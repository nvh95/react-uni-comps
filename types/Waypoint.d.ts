import React from 'react';
import type { BaseProps } from './types';
/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
declare const Waypoint: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    /** 可见回调 */
    onVisible?: (el: HTMLElement) => void;
    /** 不可见回调 */
    onInVisible?: (el: HTMLElement) => void;
} & BaseProps & React.RefAttributes<HTMLSpanElement>>;
export default Waypoint;
