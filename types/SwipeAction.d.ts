import React from 'react';
declare type Action = {
    text: string;
    color?: string;
    onClick?: () => void;
};
declare type Props = {
    /** 左边actions */
    left?: Action[];
    /** 右边actions */
    right?: Action[];
    /** 显示回调 */
    onOpen?: () => void;
    /** 关闭回调 */
    onClose?: () => void;
    /** 点击按钮后是否自动关闭,默认true */
    autoClose?: boolean;
    /** 点击外部区域关闭,默认true*/
    closeOnClickOutside?: boolean;
};
/** SwipeAction 滑动操作 */
declare const SwipeAction: React.FC<Props>;
export default SwipeAction;
