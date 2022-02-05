import React from 'react';
declare type Props = {
    /** 渲染子元素等待时间，单位ms,默认700 */
    wait?: number;
    /** 是否显示子元素 */
    visible: boolean;
    /** 子元素 */
    children: React.ReactElement;
};
/** 延迟渲染子元素, 一般用于防止loading闪烁等问题 */
declare const WaitLoading: (props: Props) => React.ReactElement;
export default WaitLoading;
