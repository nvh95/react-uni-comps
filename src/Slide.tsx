import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import { isMobile, isTouch } from './dom';
import { animationNormal } from './vars';
import FingerGesture from './FingerGesture';
import useCallbackRef from './hooks/useCallbackRef';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .wrap {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    touch-action: none;

    &.vertical {
      flex-direction: column;
    }

    .uc-slide-page {
      width: 100%;
      flex-shrink: 0;
    }
  }

  .pager {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);

    .item {
      cursor: pointer;
      display: inline-block;
      width: 19px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      transition: all ease-in-out ${animationNormal}ms;

      &:not(:last-child) {
        margin-right: 4px;
      }

      &.active {
        background: #fff;
      }
    }

    &.vertical {
      position: absolute;
      right: 8px;
      top: 50%;
      left: unset;
      transform: translate3d(0, -50%, 0);

      .item {
        display: block;
        width: 4px;
        height: 19px;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }
  }
`;

export type Props = {
  /** 自动播放,默认false */
  autoPlay?: boolean;
  // /** 水平还是垂直播放 */
  direction?: 'horizontal' | 'vertical';
  /** 距离下一次播放的间隔毫秒, 默认 3000 */
  interval?: number;
  children: React.ReactElement[];
  /** 容器高度，默认160px */
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  /** 循环播放,默认true */
  loop?: boolean;
  /** 页面切换后回调 */
  onPageChange?: (pageIndex: number) => void;
  /** 是否显示分页器,默认true */
  showPageIndicator?: boolean;
  /** 滑动比例多少切换，默认0.1 */
  ratio?: number;
  /** 动画时间，默认280 */
  duration?: number;
};

export interface SlideRefType {
  prev: () => void;
  next: () => void;
}

const getItems = (children, loop, height) => {
  const items = [].concat(children),
    firstItem = items[0],
    lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  return React.Children.map(items, (c, index) =>
    React.cloneElement(c, {
      key: index,
      className: clsx('uc-slide-page', c.props?.className),
      style: { ...c.props?.style, height },
    })
  );
};

/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */
const Slide = React.forwardRef<SlideRefType, Props>((props, ref) => {
  const {
    autoPlay = false,
    loop = true,
    onPageChange,
    direction = 'horizontal',
    interval = 3000,
    duration = 280,
    children,
    className,
    height = 160,
    style,
    showPageIndicator = true,
    ratio = 0.1,
    ...rest
  } = props;

  const containerRef = useRef<HTMLDivElement>();

  const wrapElRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState(() => getItems(children, loop, height));

  const count = items.length;
  const len = React.Children.count(children);

  const thisRef = useRef({
    x: 0,
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false,
  });
  const [pageIndex, setPageIndex] = useState<number>(0); // !loop:0~len-1, loop: -1~len
  const exp = count > len; // expanded

  const min = exp ? -1 : 0;
  const max = exp ? len : len - 1;

  const autoRef = useCallbackRef<{
    pageIndex: number;
    min: number;
    max: number;
    exp: boolean;
  }>({
    pageIndex,
    min,
    max,
    exp,
  });

  const slideToPageIndex = useCallback(
    (newPageIndex: number, transition = true) => {
      const s = thisRef.current;

      wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';
      if (direction === 'horizontal') {
        const x = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapWidth;
        wrapElRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        s.x = x;
      } else {
        const y = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapHeight;
        wrapElRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
        s.y = y;
      }

      setPageIndex(newPageIndex);
    },
    [thisRef, direction, exp]
  );

  useImperativeHandle(ref, () => ({
    prev: () => {
      slideToPageIndex(Math.max(autoRef.current.min, pageIndex - 1));
    },
    next: () => {
      slideToPageIndex(Math.min(autoRef.current.max, pageIndex + 1));
    },
  }));

  const ensurePageIndex = useCallback(() => {
    if (pageIndex >= len) {
      slideToPageIndex(0, false);
    } else if (pageIndex === -1) {
      slideToPageIndex(len - 1, false);
    }
  }, [slideToPageIndex, len, pageIndex]);

  useUpdateEffect(() => {
    setItems(getItems(children, loop, height));
    slideToPageIndex(0, false);
  }, [children, loop, height, slideToPageIndex]);

  useUpdateEffect(() => {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange?.(pageIndex);
    }
  }, [pageIndex]);

  useLayoutEffect(() => {
    const s = thisRef.current;
    const container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;

    slideToPageIndex(0, false);
  }, [slideToPageIndex]);

  useEffect(() => {
    if (autoPlay && len > 1 && !thisRef.current.isMoving) {
      const timer = window.setTimeout(() => {
        slideToPageIndex(pageIndex + 1);
      }, interval);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [pageIndex, slideToPageIndex, autoPlay, interval, len, exp]);

  const pagerRender = (): React.ReactNode => {
    if (!showPageIndicator || len <= 1) return null;

    return (
      <div className={clsx('pager', { vertical: direction === 'vertical' })}>
        {React.Children.map(children, (c, idx) => (
          <span
            key={idx}
            className={clsx('item', { active: pageIndex === idx })}
            onClick={() => slideToPageIndex(idx)}
          ></span>
        ))}
      </div>
    );
  };

  const evtProps: any = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = (e) => {
    !isMobile && e.preventDefault();
    const s = thisRef.current;
    s.isMoving = true;
    wrapElRef.current.style.transitionProperty = 'none';
    s.lastX = s.x;
    s.lastY = s.y;
  };

  evtProps[isTouch ? 'onTouchEnd' : 'onMouseUp'] = () => {
    const s = thisRef.current;
    if (!s.isMoving) {
      return;
    }

    const instance = autoRef.current;

    if (
      instance.exp &&
      (instance.max === instance.pageIndex || instance.min === instance.pageIndex)
    ) {
      slideToPageIndex(instance.pageIndex === max ? 0 : len - 1, false);
      return;
    }
    s.isMoving = false;

    if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
      slideToPageIndex(pageIndex + (s.x < s.lastX ? 1 : -1));
    } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
      slideToPageIndex(pageIndex + (s.y < s.lastY ? 1 : -1));
    } else {
      // reset
      slideToPageIndex(pageIndex);
    }
  };

  useLayoutEffect(() => {
    const wrapEl = wrapElRef.current;
    const fg = new FingerGesture(wrapEl, {
      onPressMove: (e) => {
        const s = thisRef.current;
        const instance = autoRef.current;

        if (
          instance.exp &&
          (instance.max === instance.pageIndex || instance.min === instance.pageIndex)
        ) {
          return;
        }

        if (direction === 'horizontal') {
          if (s.x > 0 || s.x < -1 * (count - 1) * s.wrapWidth) {
            return;
          }
          s.x += e.deltaX;
          wrapElRef.current.style.transform = `translate3d(${s.x}px, 0, 0)`;
        } else {
          if (s.y > 0 || s.y < -1 * (count - 1) * s.wrapHeight) {
            return;
          }
          s.y += e.deltaY;
          wrapElRef.current.style.transform = `translate3d(0, ${s.y}px, 0)`;
        }
      },
    });
    return () => fg.destroy();
  }, [count, direction, autoRef]);

  return (
    <StyledSlide
      ref={containerRef}
      {...rest}
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
    >
      <div
        ref={wrapElRef}
        className={clsx('wrap', { vertical: direction === 'vertical' })}
        onTransitionEnd={() => {
          ensurePageIndex();
        }}
        {...evtProps}
        style={{ transition: `transform ${duration}ms ease-in-out` }}
      >
        {items}
      </div>

      {pagerRender()}
    </StyledSlide>
  );
});

Slide.displayName = 'UC-Slide';

export default Slide;
