import { UAParser } from 'ua-parser-js'
import { isWindow } from './is'
import { IGlobalSupport } from '@choco-monitor/types'

export const __GLOBAL__ = window as unknown as Window
// 全局配置
export const __SUPPORT__: IGlobalSupport = {}

export const IS_BROWSER_ENV = isWindow()

export const UA_RESULT = new UAParser().getResult()

__SUPPORT__.deviceInfo = {
  browser: UA_RESULT.browser.name || '',
  browserVersion: UA_RESULT.browser.version || '',
  os: UA_RESULT.os.name || '',
  osVersion: UA_RESULT.os.version || '',
  ua: UA_RESULT.ua,
  device: UA_RESULT.device.model || '',
  deviceType: UA_RESULT.device.type || '',
}
