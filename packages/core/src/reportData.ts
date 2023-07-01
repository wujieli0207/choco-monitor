import { IInitOptions } from '@choco-monitor/types'
import {
  IS_BROWSER_ENV,
  Queue,
  generateUUID,
  isBoolean,
  isString,
} from '@choco-monitor/utils'

export class ReportData {
  private queue: Queue = new Queue()
  private uuid: string
  private dsn: string = ''
  private appKey: string = ''
  private useImgReport: boolean = true

  constructor() {
    this.uuid = generateUUID()
  }

  private beaconRequest(url: string, data: unknown) {
    return navigator.sendBeacon(url, JSON.stringify(data))
  }

  private imgRequest(url: string, data: unknown) {
    const requestFn = () => {
      const img = new Image()
      const spliceStr = url.includes('?') ? '&' : '?'
      img.src = `${url}${spliceStr}data=${encodeURIComponent(
        JSON.stringify(data)
      )}`
    }
    this.queue.push(requestFn)
  }

  private fetchRequest(url: string, data: unknown) {
    const requestFn = () => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    this.queue.push(requestFn)
  }

  public bindOptions(options: IInitOptions) {
    const { dsn, appKey, useImgReport = true } = options
    isString(dsn) && (this.dsn = dsn)
    isString(appKey) && (this.appKey = appKey)
    isBoolean(useImgReport) && (this.useImgReport = useImgReport)
  }

  public resport(data: unknown) {
    if (!this.dsn || !this.appKey) {
      console.error('dsn or appKey 剋空，请在 init 方法中传入')
      return
    }

    if (IS_BROWSER_ENV) {
      // 优先使用 beacon 上报，否则使用 img 或者 xhr 上报
      const result = this.beaconRequest(this.dsn, data)
      console.log('result: ', result)
      if (!result) {
        this.useImgReport
          ? this.imgRequest(this.dsn, data)
          : this.fetchRequest(this.dsn, data)
      }
    }
  }
}

const reportData = new ReportData()

export default reportData
