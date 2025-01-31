import React, { useRef, useLayoutEffect, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import clsx from 'clsx';
import Button from './Button';
import Touch from 'w-touch';
import useClickAway from './hooks/useClickAway';

type Action = {
  text: string;
  color?: string;
  onClick?: () => void;
};

type Props = {
  /** 左边actions */
  left?: Action[];
  /** 右边actions */
  right?: Action[];
  /** 显示回调 */
  onOpen?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 点击按钮后是否自动关闭,默认true */
  autoClose?: boolean;
  /** 点击外部区域关闭,默认true*/
  closeOnClickOutside?: boolean;
};

const StyledSwipeAction = styled.div`
  user-select: none;
  position: relative;
  display: block;
  overflow: hidden;
  cursor: grab;
  box-sizing: border-box;

  .wrap {
    transition: transform 0.3s ease-in-out;
    overflow: visible;
    display: flex;
    flex-wrap: nowrap;

    .left-part,
    .right-part {
      position: absolute;
      top: 0;
      height: 100%;
    }

    .left-part {
      left: 0px;
      transform: translate3d(-100%, 0, 0);
    }
    .right-part {
      right: 0px;
      transform: translate3d(100%, 0, 0);
    }
    .middle-part {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      height: 44px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      background: #fff;
      color: #666;
      box-sizing: border-box;
    }

    .swipe-action-item {
      * {
        pointer-events: none;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  height: 100%;
  border-radius: 0;
  border: 0;
  color: #fff;
  font-size: 15px;
`;

/** SwipeAction 滑动操作 */
const SwipeAction: React.FC<Props> = (props) => {
  const {
    left = [],
    right = [],
    onClose,
    onOpen,
    autoClose = true,
    closeOnClickOutside = true,
    children,
  } = props;
  const elRef = useRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);

  const thisRef = useRef({
    x: 0,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0,
  });

  useEffect(() => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onOpen, onClose]);

  const startTransform = useCallback((transformStr, x) => {
    const v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    v.el.style.transform = `${transformStr}`;
  }, []);

  useClickAway(elRef, () => {
    if (closeOnClickOutside) {
      startTransform('translate3d(0,0,0)', 0);
      setIsOpen(false);
    }
  });

  useLayoutEffect(() => {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);

  const renderAction = useCallback((item, idx) => {
    return (
      <StyledButton
        onClick={item.onClick}
        key={idx}
        className="swipe-action-item"
        style={{ backgroundColor: item.color || vars.primary }}
      >
        {item.text}
      </StyledButton>
    );
  }, []);

  useLayoutEffect(() => {
    const el = elRef.current;
    const fg = new Touch(el, {
      onPressMove: (e) => {
        const v = thisRef.current;
        v.x += e.deltaX;
        // x<0:swipe left & show right
        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        }
      },
      onTouchStart: () => {
        thisRef.current.el.style.transitionProperty = 'none';
      },
      onTouchEnd: () => {
        const v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          } else {
            startTransform(`translate3d(-${v.rightWidth}px,0,0)`, -1 * v.rightWidth);
            setIsOpen(true);
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            v.x = 0;
            setIsOpen(false);
          } else {
            startTransform(`translate3d(${v.leftWidth}px,0,0)`, v.leftWidth);
            setIsOpen(true);
          }
        }
      },
    });

    return () => {
      fg?.destroy();
    };
  }, [startTransform]);

  return (
    <StyledSwipeAction className={clsx('uc-swipe-action')}>
      <div
        ref={elRef}
        className="wrap"
        onClick={(e: any) => {
          if (autoClose && e.target?.classList?.contains('swipe-action-item')) {
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          }
        }}
      >
        <div ref={(ref) => (thisRef.current.leftEl = ref)} className={clsx('left-part')}>
          {left.map((item, idx) => renderAction(item, idx))}
        </div>

        <div className="middle-part">{children}</div>

        <div ref={(ref) => (thisRef.current.rightEl = ref)} className={clsx('right-part')}>
          {right.map((item, idx) => renderAction(item, idx))}
        </div>
      </div>
    </StyledSwipeAction>
  );
};

SwipeAction.displayName = 'UC-SwipeAction';

export default SwipeAction;
