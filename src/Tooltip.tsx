import React, { useState, useRef } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import { Placement } from './popovers/types';
import clsx from 'clsx';

const StylePopover = styled(Popover)`
  color: #fff;
  background-color: rgb(0, 0, 0, 0.85);
  padding: 12px;
`;

type Offset = { x?: number; y?: number };

export type Props = {
  className?: string;
  /** tooltip显示的内容 */
  title?: React.ReactNode;
  /** 显示箭头,默认显示 */
  arrow?: boolean;
  /** 显示位置,参考popover */
  placement?: Placement;
  /** 需要tooltip的子元素 */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** hover触发显示，关闭的timeout时间，默认100 (ms) */
  hoverDelay?: number;
};

/** 文字提示气泡框, 基于Popover */
const Tooltip = (props: Props): React.ReactElement => {
  const {
    title,
    hoverDelay = 100,
    placement = 'top',
    arrow = true,
    offset,
    className,
    children,
  } = props;
  // 鼠标移到popover内容区，不关闭popover
  const ref = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  const actionProps = {
    onMouseEnter: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
    onMouseLeave: () => {
      ref.current = window.setTimeout(() => {
        setVisible(false);
      }, hoverDelay);
    },
    onFocus: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
  };

  return (
    <StylePopover
      className={clsx('uc-tooltip', className)}
      visible={visible}
      placement={placement}
      content={title}
      arrow={arrow}
      offset={offset}
      {...actionProps}
    >
      {React.isValidElement(children) ? (
        React.cloneElement(children, actionProps)
      ) : (
        <span {...actionProps}>{children}</span>
      )}
    </StylePopover>
  );
};
Tooltip.displayName = 'UC-Tooltip';

export default Tooltip;
