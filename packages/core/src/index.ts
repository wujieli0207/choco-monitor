import { IInitOptions, IVueInstance } from '@choco-monitor/types'
import handleEvents from './handleEvents'
import { setupReplace } from './setupReplace'
import { handleOptions } from './options'

function init(options: IInitOptions) {
  handleOptions(options)
  setupReplace()
}

function install(Vue: IVueInstance, options: IInitOptions) {
  const handler = Vue.config.errorHandler

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
