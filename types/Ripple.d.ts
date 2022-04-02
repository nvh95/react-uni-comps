import React from 'react';
import type { BaseProps } from './types';
/** 波纹效果,给子元素添加点击波纹效果 */
declare const Ripple: React.ForwardRefExoticComponent<{
    /**
     * 波纹效果背景色
     * @default #ccc
     * */
    color?: string;
    children?: React.ReactNode;
    /**
     * 波纹起始缩放大小
     * @default 0.3
     *  */
    startScale?: number;
    /**
     * 动画持续时间
     * @default 300
     *  */
    duration?: number;
    /** 100% 宽度 */
    block?: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Ripple;
