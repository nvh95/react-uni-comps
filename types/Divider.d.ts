import React from 'react';
import type { BaseProps } from './types';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 分割线水平还是垂直
     * @default horizontal
     *  */
    type?: 'horizontal' | 'vertical';
    /**
     * 分割线标题的位置
     * @default center
     *  */
    textPosition?: 'left' | 'right' | 'center';
    /** 是否虚线 */
    dashed?: boolean;
    /**
     * 分割线颜色
     * @default #eee
     *  */
    color?: string;
} & BaseProps;
/** 分割线 */
declare const Divider: React.FC<Props>;
export default Divider;
