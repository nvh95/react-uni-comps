import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Backdrop from './Backdrop';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledWrapper = styled.div<{ duration: number }>`
  position: fixed;
  z-index: 200;
  transition: transform ${(props) => props.duration}ms ease;
  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
  }

  &.entering,
  &.entered {
    transition-timing-function: ease-out;
    transform: none;
    visibility: visible;
  }

  &.exiting {
    transition-timing-function: ease-in;
  }

  &.exited {
    visibility: hidden;
  }

  &.bottom-exited,
  &.bottom-exiting {
    transform: translate(0, 100%);
  }

  // left
  &.left {
    left: 0;
    top: 0;
    bottom: 0;
  }

  &.left-exited,
  &.left-exiting {
    transform: translate(-100%, 0);
  }

  // right
  &.right {
    right: 0;
    top: 0;
    bottom: 0;
  }

  &.right-exited,
  &.right-exiting {
    transform: translate(100%, 0);
  }

  // top
  &.top {
    left: 0;
    top: 0;
    right: 0;
  }

  &.top-exited,
  &.top-exiting {
    transform: translate(0, -100%);
  }

  //center
  &.center {
    position: fixed;
    top: 50%;
    left: 50%;
    transition: none;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    90% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.01);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  &.center-entering,
  &.center-entered {
    display: '';
    animation: showUp ease ${(props) => props.duration}ms forwards;
  }

  &.center-exited,
  &.center-exiting {
    display: none;
  }

  &.no-trasition {
    animation: none;
    transition: none;
  }
`;

export type Props = {
  /** 是否可见 */
  visible?: boolean;
  /** 是否显示遮罩，默认显示 */
  backdrop?: boolean;
  /** 遮罩样式 */
  backdropStyle?: React.CSSProperties;
  /** 遮罩点击事件 */
  onBackdropClick?: () => void;
  /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
  position: 'top' | 'bottom' | 'left' | 'center' | 'right';
  /** 弹出动画时间，默认280ms */
  duration?: number;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 弹框里面的内容 */
  children?: React.ReactNode;
  /** 弹框style */
  style?: React.CSSProperties;
/** 弹框className */
  className?: string;
};

/** 弹框，可以从上，下，左，右，中间弹出 */
const Popup = (props: Props): React.ReactElement => {
  const {
    children,
    visible,
    backdrop = true,
    backdropStyle,
    onBackdropClick,
    position = 'bottom',
    duration = 280,
    mountContainer = () => document.body,
    style,
    className,
  } = props;
  const wrapRef = useRef();

  return ReactDOM.createPortal(
    <>
      {backdrop && visible ? <Backdrop style={backdropStyle} onClick={onBackdropClick} /> : null}
      <Transition in={visible} timeout={duration}>
        {(status) => (
          <div>
            <StyledWrapper
              ref={wrapRef}
              duration={duration}
              style={style}
              className={clsx('uc-popup', className, position, status, position + '-' + status)}
            >
              {children}
            </StyledWrapper>
          </div>
        )}
      </Transition>
    </>,
    mountContainer()
  );
};

export default Popup;
