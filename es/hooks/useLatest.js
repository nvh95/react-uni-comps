import { useRef } from 'react';
/**
 * 保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

export default function useLatest(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
}