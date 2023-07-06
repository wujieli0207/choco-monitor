import { IReportData } from '@choco-monitor/types'
import reportData from './reportData'
import { __SUPPORT__ } from '@choco-monitor/utils'
import { EVENT_TYPES } from '@choco-monitor/common'

export class HandleEvents {
  public handleError(err: Error) {
    const errorData: IReportData = {
      errorType: EVENT_TYPES.ERROR,
      errorMessage: err.message,
      stackTrace: err.stack || '',
      url: '',
      deviceInfo: __SUPPORT__.deviceInfo,
    }
    return reportData.resport(errorData)
  }
}

const handleEvents = new HandleEvents()
export default handleEvents
