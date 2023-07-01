import { IInitOptions, IVueInstance } from '@choco-monitor/types'
import reportData from './reportData'
import handleEvents from './handleEvents'

function init(options: IInitOptions) {
  console.log('options: ', options)
  reportData.bindOptions(options)
}

function install(Vue: IVueInstance, options: IInitOptions) {
  const handler = Vue.config.errorHandler

  console.log('Vue: ', Vue)
  Vue.config.errorHandler = function (
    err: Error,
    vm: IVueInstance,
    info: string
  ) {
    console.error(err, vm, info)

    handleEvents.handleError(err)
    if (handler) {
      handler.apply(null, [err, vm, info])
    }
  }
  init(options)
}

export default {
  install,
}
