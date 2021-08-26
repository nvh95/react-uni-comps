import React, { useRef, useImperativeHandle, MutableRefObject } from 'react';
import useDrag, { Position } from './hooks/useDrag';

export type Props = {
  onDragEnd?: (position: Position) => void;
  boundRef?: MutableRefObject<HTMLElement>;
  children: React.ReactElement;
};
/** 拖拽包裹的元素 */
const Drag = React.forwardRef<Element, Props>((props: Props, ref): React.ReactElement => {
  const { children, boundRef } = props;
  const elRef = useRef<HTMLElement>();

  if (process.env.NODE_ENV !== 'production') {
    if (!React.isValidElement(children)) {
      throw new Error('Drag:children must be a valid react element');
    }
  }

  useDrag(elRef, boundRef, (pos: Position) => {
    props.onDragEnd?.(pos);
  });

  useImperativeHandle(ref, () => elRef.current);

  return React.cloneElement(children, {
    ref: elRef,
    style: { ...children.props.style, ...{ position: 'absolute' } },
  });
});

Drag.displayName = 'UC-Drag';

export default Drag;
