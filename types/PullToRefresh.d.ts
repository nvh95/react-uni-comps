import React, { ReactNode } from 'react';
import type { BaseProps } from './types';
declare type PullStatus = 'init' | 'pulling' | 'canRelease' | 'refreshing' | 'complete';
/** 下拉刷新 */
declare const PullToRefresh: React.ForwardRefExoticComponent<React.HTMLAttributes<Element> & {
    /** 触发刷新时的处理函数 */
    onRefresh?: () => Promise<any>;
    /** 下拉的提示文案 */
    pullingText?: ReactNode;
    /** 释放的提示文案 */
    canReleaseText?: ReactNode;
    /** 刷新时的提示文案 */
    refreshingText?: ReactNode;
    /** 完成时的提示文案 */
    completeText?: ReactNode;
    /**
     * 完成后延迟消失的时间，单位为 ms
     * @default 500
     *  */
    completeDelay?: number;
    /**
     * 头部提示内容区的高度，单位px
     * @default 40
     *  */
    headHeight?: number;
    /**
     * 触发刷新需要下拉多少距离，单位px
     * @default 60
     */
    threshold?: number;
    /** 根据下拉状态，自定义下拉提示文案 */
    renderText?: (status: PullStatus) => ReactNode;
    /**
     * 触发下拉刷新的元素
     * 作为组件，请使用React.forwardRef 将ref引到dom
     *  */
    children?: React.ReactElement;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default PullToRefresh;
