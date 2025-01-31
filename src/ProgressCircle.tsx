import React from 'react';
import styled, { useTheme } from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import type { BaseProps } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 进度条颜色,默认读主题色 */
  color?: string;
  /**
   * 进度百分比（范围：0 ～ 100)
   * @default 0
   */
  percent?: number;
  /**
   * 圆弧的宽度
   * @default  10
   */
  strokeWidth?: number;
  /**
   * 圆弧末尾使用的形状
   * @default round
   */
  strokeLinecap?: 'butt' | 'round';
  /** 环中间的内容，比如显示文本等 */
  children?: React.ReactNode;
  /**
   * 环的直径
   * @default 120
   *  */
  size?: number;
} & BaseProps;

const StyledProgressCircle = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

/** 环形进度条 */
const ProgressCircle = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    percent = 0,
    strokeLinecap = 'round',
    strokeWidth = 10,
    size = 120,
    className,
    style,
    ...rest
  } = props;
  const theme = (useTheme() as Record<string, unknown>) || {};
  const color = (props.color || theme.color || vars.primary) as string;

  return (
    <StyledProgressCircle
      className={clsx(className, 'uc-progress-circle')}
      style={{ ...style, width: size, height: size }}
      {...rest}
      ref={ref}
    >
      <svg height={size} width={size} viewBox="0 0 120 120" x-mlns="http://www.w3.org/200/svg">
        <circle
          r="50"
          cx="60"
          cy="60"
          stroke="#d9d9d9"
          strokeWidth={strokeWidth}
          fill="none"
        ></circle>
        {percent > 0 ? (
          <circle
            r="50"
            cx="60"
            cy="60"
            stroke={color}
            strokeDasharray={`${(percent * 314) / 100},314`}
            strokeWidth={strokeWidth}
            fill="none"
            transform="rotate(-90,60,60)"
            strokeLinecap={strokeLinecap}
            style={{ transition: `stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s` }}
          ></circle>
        ) : null}
      </svg>
      {children && <div className="content">{children}</div>}
    </StyledProgressCircle>
  );
});

ProgressCircle.displayName = 'UC-ProgressCircle';

export default ProgressCircle;
