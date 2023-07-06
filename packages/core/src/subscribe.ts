import { EVENT_TYPES } from '@choco-monitor/common'
import { ReplaceCallback } from '@choco-monitor/types'
import { callWithTryCatch } from '@choco-monitor/utils'

const handlersMap: { [key in EVENT_TYPES]?: ReplaceCallback[] } = {}

export function subscribe(type: EVENT_TYPES, callback: ReplaceCallback) {
  if (!Reflect.has(handlersMap, type)) {
    handlersMap[type] = []
  }
  handlersMap[type]?.push(callback)
}

export function notify(type: EVENT_TYPES, data?: any): void {
  console.log('data: ', data)
  if (!type || !Reflect.has(handlersMap, type)) return

  handlersMap[type]?.forEach((callback) => {
    callWithTryCatch(
      () => callback(data),
      () => {
        console.error('notify error')
      }
    )
  })
}
