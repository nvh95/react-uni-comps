import React from 'react';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 安全区的位置
   * @default bottom
   * */
  position?: 'top' | 'bottom' | 'right' | 'left';
} & BaseProps;

function upperFirstLetter(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

/** 安全区 */
const SafeArea: React.FC<Props> = (props) => {
  const { position = 'bottom', className, style, children, ...rest } = props;

  const styles: React.CSSProperties = {
    display: 'block',
    width: '100%',
    ...style,
    [`padding${upperFirstLetter(position)}`]: `constant(safe-area-inset-${position})`,
    [`padding${upperFirstLetter(position)}`]: `env(safe-area-inset-${position})`,
  };

  return (
    <div {...rest} className={clsx('uc-safe-area', className)} style={styles}>
      {children}
    </div>
  );
};

SafeArea.displayName = 'UC-SafeArea';

export default SafeArea;
