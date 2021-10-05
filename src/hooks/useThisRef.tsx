import { MutableRefObject, useRef } from 'react';
/**
 *  get latest values from ref, value will always be synced automatically with props & states
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useThisRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
