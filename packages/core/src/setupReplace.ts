import { EVENT_TYPES } from '@choco-monitor/common'
import handleEvents from './handleEvents'
import { addReplaceHandler } from './replace'

export function setupReplace(): void {
  // 捕获错误
  addReplaceHandler({
    callback: (error: Error) => {
      handleEvents.handleError(error)
    },
    type: EVENT_TYPES.ERROR,
  })
}
