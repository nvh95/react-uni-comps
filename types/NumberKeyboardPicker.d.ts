import React from 'react';
declare type Props = {
    /** 是否弹出 */
    visible: boolean;
    /** 关闭 */
    onClose: () => void;
    className?: string;
    /** 显示小数点,默认false */
    dot?: boolean;
    /** 按键回调,返回输入的字符串 */
    onChange: (str: string) => void;
};
/** 数字键盘弹出 */
declare const NumberKeyboardPicker: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default NumberKeyboardPicker;
