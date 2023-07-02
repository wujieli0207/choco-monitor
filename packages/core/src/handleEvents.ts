import { IReportData, IVueInstance } from '@choco-monitor/types'
import reportData from './reportData'

export class HandleEvents {
  public handleError(err: Error, vm: IVueInstance, info: string) {
    const errorData: IReportData = {
      errorType: 'error',
      errorMessage: err.message,
      stackTrace: err.stack!,
      url: '',
    }
    return reportData.resport(errorData)
  }
}

const handleEvents = new HandleEvents()
export default handleEvents
