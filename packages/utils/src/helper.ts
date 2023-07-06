import { Callback } from '@choco-monitor/types'

/**
 * Generates a universally unique identifier (UUID) using the
 * version 4 variant.
 *
 * @return {string} A randomly generated UUID.
 */
export function generateUUID(): string {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    }
  )
  return uuid
}

/**
 * @description 监听事件
 */
export function on(
  target: any,
  eventName: string,
  handler: Callback,
  options = false
): void {
  target.addEventListener(eventName, handler, options)
}
