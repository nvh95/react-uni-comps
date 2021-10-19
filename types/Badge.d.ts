import React from 'react';
declare type Props = {
    /** 内容,没有内容则显示圆点 */
    content?: React.ReactNode;
    /** 徽标背景色 */
    color?: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    /** 自定义徽标样式 */
    badgeStyle?: React.CSSProperties;
};
/** 徽标:右上角添加标记 */
declare const Badge: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default Badge;
