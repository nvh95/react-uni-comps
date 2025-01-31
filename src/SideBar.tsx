//#region  top

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import useMount from './hooks/useMount';
import type { StringOrNumber, BaseProps } from './types';

type Item = {
  /** 禁用 */
  disabled?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 配置项key */
  key?: StringOrNumber;
};

type SideBarProps = {
  /** 选择的index,非受控模式使用*/
  defaultIndex?: number;
  /** 选择的index, 默认 0 */
  index?: number;
  /** index变化时触发的回调函数 */
  onChange?: (index: number) => void;
  /** 配置项列表 */
  items: Array<Item>;
} & BaseProps;

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  font-size: 14px;
  background-color: #fff;
  user-select: none;
  display: inline-flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  .uc-sidebar-item {
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 12px;
    background-color: #f5f5f5;

    &.active {
      ${getThemeColorCss('color')}
      background-color: #fff;
      border-radius: 0;
    }
    &.disabled {
      cursor: not-allowed;
      color: ${vars.disabledText};
    }
    &.prev {
      border-radius: 0 0 8px 0;
    }
    &.next {
      border-radius: 0 8px 0 0;
    }
  }
`;

//#endregion

/**
 * 侧边导航
 */
const SideBar: React.FC<SideBarProps> = ({
  items = [],
  index,
  defaultIndex = 0,
  onChange,
  className,
  ...rest
}) => {
  const [_v, _setV] = useState(typeof index === 'undefined' ? defaultIndex : index);

  const wrapElRef = useRef<HTMLDivElement>();

  useUpdateEffect(() => {
    if (index !== _v) {
      _setV(index);
    }
  }, [index]);

  useMount(() => {
    const wrapEl = wrapElRef.current;
    if (wrapEl && wrapEl.scrollHeight > wrapEl.offsetHeight) {
      const itemEl = wrapEl.querySelector('.uc-sidebar-item') as HTMLDivElement;

      // scroll
      wrapEl.scroll({
        top: (_v - 1) * itemEl.offsetHeight,
      });
    }
  });

  return (
    <StyledWrapper {...rest} ref={wrapElRef} className={clsx('uc-sidebar', className)}>
      {items.map((item: Item, idx: number) => {
        const { title, disabled } = item;
        const prev = _v - 1 === idx;
        const next = _v + 1 === idx;
        return (
          <div
            key={item.key || idx}
            className={clsx('uc-sidebar-item', {
              active: idx === _v,
              disabled: disabled,
              prev: prev,
              next: next,
            })}
            onClick={() => {
              if (!disabled && idx !== _v) {
                onChange?.(idx);
                _setV(idx);
              }
            }}
          >
            {title}
          </div>
        );
      })}
    </StyledWrapper>
  );
};

export default SideBar;
