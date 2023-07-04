export interface IBreadcrumbData {
  [key: string]: any
}

export interface IInitOptions {
  dsn: string // 上报地址
  appKey: string // 应用标识
  userId?: string // 用户标识
  useImgReport?: boolean // 是否使用 图片上报，默认为 true，设置为 false 之后使用 fetch 上报
}

export interface IReportData {
  errorType: string // 错误类型
  errorMessage: string // 错误信息
  stackTrace: string // 错误堆栈
  url: string // 错误发生页面
  userId?: string // 用户标识
  deviceInfo?: IDeviceInfo // 设备信息
  additionalInfo?: string // 附加信息
  errorTimestamp?: Date // 错误时间戳
}

// 捕获的设备信息
export interface IDeviceInfo {
  browserVersion: string // 浏览器版本
  browser: string // 浏览器
  osVersion: string // 操作系统版本
  os: string // 操作系统
  ua: string // User Agent
  device: string // 设备
  deviceType: string // 设备类型
  [key: string]: unknown
}
