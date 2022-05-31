import type { EventTargetType } from '../types';
/**
 * 事件监听
 *
 * @export
 * @param {TargetType} target 绑定事件对象, 找不到则用window
 * @param {string} [eventName='click'] 事件类型
 * @param {(e:Event) => void} [handler] 事件处理
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined]
 */
export default function useEventListener(target: EventTargetType, eventName?: string, handler?: (e: Event) => void, options?: boolean | AddEventListenerOptions | undefined): void;
