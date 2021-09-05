import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import clsx from 'clsx';

type TabsProp = {
  /** 是否有下划线,默认true*/
  underline?: boolean;
  /** 下划线宽度,默认100%,可以使用百分比和px */
  underlineWidth?: string;
  /** Tabs.Tab子元素*/
  children: React.ReactElement[];
  /** 默认选择的tab,默认0,第一个 */
  defaultIndex?: number;
  /** index变化时触发的回调函数 */
  onIndexChange?: (index: number) => void;
  /** 是否显示border,默认显示 */
  border?: boolean;
} & React.HTMLAttributes<HTMLElement>;

type TabProp = {
  disabled?: boolean;
  title: React.ReactNode;
  children: React.ReactElement;
};

const StyledTabHeaderWrap = styled.div`
  display: flex;
  height: 44px;
  position: relative;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  border-bottom: 1px solid ${colors.border};
  &::-webkit-scrollbar {
    display: none;
  }

  &.no-border {
    border-bottom: none;
  }
`;

const StyledTabHeadItem = styled.div<{
  activeIndex?: number;
  count?: number;
  underlineWidth?: string;
}>`
  flex: 1 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000d9;
  font-size: 14px;
  min-width: 56px;
  user-select: none;

  &.active {
    color: ${(props) => props.theme.color};
    color: var(--uc-color, ${colors.primary});
    font-weight: 500;
  }
  &.disabled {
    cursor: not-allowed;
    color: ${colors.disabledText};
  }

  &.uc-tabs-header-item {
    &.uc-tabs-header-line {
      position: relative;
      background-color: transparent !important;
      transition: transform 0.3s ease;
      transform: translate3d(${(props) => (props.activeIndex - props.count) * 100 + '%'}, 0px, 0px);

      &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        width: ${(props) => props.underlineWidth};
        height: 2px;
        background-color: ${(props) => props.theme.color};
        background-color: var(--uc-color, ${colors.primary});
      }
    }
  }
`;

const StyledTabContentWrap = styled.div`
  overflow: hidden;
`;
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */
const Tab: React.FC<TabProp> = ({ children }) => {
  return children;
};

const isValidtTabElement = (el) => {
  return React.isValidElement(el) && el.type === Tab;
};
/**
 * 选项卡切换
 */
const Tabs: React.FC<TabsProp> & { Tab: typeof Tab } = ({
  children,
  underlineWidth = '100%',
  defaultIndex = 0,
  underline = true,
  border = true,
  onIndexChange,
  className,
  ...otherProps
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const count = React.Children.count(children);

  return (
    <div {...otherProps} className={clsx('uc-tabs', className)}>
      <StyledTabHeaderWrap className={clsx('uc-tabs-header-wrap', { 'no-border': !border })}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { title = '', disabled } = child.props as TabProp;
            return (
              <StyledTabHeadItem
                key={index}
                className={clsx('uc-tabs-header-item', {
                  active: index === activeIndex,
                  disabled: disabled,
                })}
                onClick={() => {
                  if (!disabled && index !== activeIndex) {
                    setActiveIndex(index);
                    if (typeof onIndexChange === 'function') {
                      onIndexChange(index);
                    }
                  }
                }}
              >
                {title}
              </StyledTabHeadItem>
            );
          }
        })}
        {underline ? (
          <StyledTabHeadItem
            className={clsx('uc-tabs-header-item', 'uc-tabs-header-line')}
            count={count}
            underlineWidth={underlineWidth}
            activeIndex={activeIndex}
          />
        ) : null}
      </StyledTabHeaderWrap>
      <StyledTabContentWrap className={`uc-tabs-content-wrap`}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { children } = child.props as TabProp;
            const style: React.CSSProperties = {};
            if (index !== activeIndex) {
              style.display = 'none';
            }
            return (
              <div key={index} style={style}>
                {children}
              </div>
            );
          } else {
            throw new Error('Tabs can only contain Tab element');
          }
        })}
      </StyledTabContentWrap>
    </div>
  );
};

/** Tab直接子元素 */
Tabs.Tab = Tab;

export default Tabs;
