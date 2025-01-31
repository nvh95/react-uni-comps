import React from 'react';
import styled from 'styled-components';
import copy from './copy';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Props = {
  /** 要复制的文本 */
  text: string;
  /** 复制成功的回调 */
  onCopy?: () => void;
  children?: React.ReactNode;
  onClick?: () => void;
} & BaseProps;

const StyledWrap = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

/** 复制文本*/
const CopyToClipboard = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { text, onClick, onCopy, children, className, ...rest } = props;

  return (
    <StyledWrap
      {...rest}
      ref={ref}
      className={clsx('uc-copy-to-clipboard', className)}
      onClick={() => {
        copy(text) && onCopy?.();
        onClick?.();
      }}
    >
      {children}
    </StyledWrap>
  );
});

CopyToClipboard.displayName = 'UC-CopyToClipboard';

export default CopyToClipboard;
