import React from 'react';
declare type Props = {
    /** 圈圈大小,应用到font-size,默认16 */
    size?: number;
    /** 圈圈颜色*/
    color?: string;
    style?: React.CSSProperties;
    className?: string;
};
/** Spinner 加载中 */
declare const Spinner: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Spinner;
