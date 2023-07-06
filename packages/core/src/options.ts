import { IInitOptions } from '@choco-monitor/types'
import reportData from './reportData'

export function handleOptions(options: IInitOptions) {
  reportData.bindOptions(options)
}
