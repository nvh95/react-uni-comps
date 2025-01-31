import React from 'react';
import type { BaseProps } from './types';
/** 头像 */
declare const Avatar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 尺寸
     * @default 40
     *  */
    size?: number;
    /**
     * 形状
     * @default circle
     *  */
    shape?: 'circle' | 'square';
    /** 文字/icon/img 不设置，则为默认头像icon */
    children?: React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
