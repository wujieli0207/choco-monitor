export interface IBreadcrumbData {
  [key: string]: any
}

export interface IInitOptions {
  dsn: string // 上报地址
  appKey: string // 应用标识
  userId?: string // 用户标识
  useImgReport?: boolean // 是否使用 图片上报，默认为 true，设置为 false 之后使用 fetch 上报
}
