import { IReportData, IVueInstance } from '@choco-monitor/types'
import reportData from './reportData'
import { __SUPPORT__ } from '@choco-monitor/utils'

export class HandleEvents {
  public handleError(err: Error, vm: IVueInstance, info: string) {
    const errorData: IReportData = {
      errorType: 'error',
      errorMessage: err.message,
      stackTrace: err.stack!,
      url: '',
      deviceInfo: __SUPPORT__.deviceInfo,
    }
    return reportData.resport(errorData)
  }
}

const handleEvents = new HandleEvents()
export default handleEvents
