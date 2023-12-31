import { EVENT_TYPES } from '@choco-monitor/common'
import { IReplaceHandler } from '@choco-monitor/types'
import { __GLOBAL__, on } from '@choco-monitor/utils'
import { notify, subscribe } from './subscribe'

const replaceMap = {
  [EVENT_TYPES.ERROR]: handleListenError(),
  [EVENT_TYPES.UNHANDLEDREJECTION]: unhandledRejectionReplace(),
}

export function addReplaceHandler(handler: IReplaceHandler): void {
  subscribe(handler.type, handler.callback)

  if (Reflect.has(replaceMap, handler.type)) {
    replaceMap[handler.type]
  }
}

function handleListenError(): void {
  const callback = (e: ErrorEvent) => {
    console.log('handleListenError: ', e)
    notify(EVENT_TYPES.ERROR, e)
  }
  on(__GLOBAL__, EVENT_TYPES.ERROR, callback, true)
}

function unhandledRejectionReplace(): void {
  const callback = (e: PromiseRejectionEvent) => {
    console.log('unhandledRejection: ', e)
    notify(EVENT_TYPES.UNHANDLEDREJECTION, e)
  }
  on(__GLOBAL__, EVENT_TYPES.UNHANDLEDREJECTION, callback, true)
}
