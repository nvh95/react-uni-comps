import React from 'react';
import styled from 'styled-components';

/** 显示1px的边 */
export type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';

export type Props = {
  position?: Position /** 显示1px的边，默认为 bottom 底部,为all则显示4条边 */;
  color?: string /** 1px边的颜色,默认 #dcdcdc 浅灰色 */;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledDiv = styled.div<{ position: Position; color: string }>`
  position: relative;
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    ${({ position }) => `border${position === 'all' ? '' : '-' + position}`}: 1px solid ${({
      color,
    }) => color};

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
`;

/** 包含1px的边的容器div */
const HairLineBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { position = 'bottom', color = '#dcdcdc', ...rest } = props;
  return <StyledDiv ref={ref} position={position} color={color} {...rest}></StyledDiv>;
});

HairLineBox.displayName = 'UC-HairLineBox';
export default HairLineBox;
