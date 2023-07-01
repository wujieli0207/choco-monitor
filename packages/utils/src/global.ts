import { isWindow } from './is'

export const __GLOBAL__ = window as unknown as Window

export const IS_BROWSER_ENV = isWindow()
