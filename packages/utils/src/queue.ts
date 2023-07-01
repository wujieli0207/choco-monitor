import { __GLOBAL__ } from './global'

export class Queue {
  private queue: any[] = []
  private isRunning = false

  constructor() {}

  public push(fn: (...args: any) => void) {
    this.queue.push(fn)

    if (!this.isRunning) {
      this.isRunning = true
      // 优先使用 requestIdleCallback 上报，否则使用 Promise 上报
      if (Reflect.has(__GLOBAL__, 'requestIdleCallback')) {
        requestIdleCallback(() => this.run())
      } else if (Reflect.has(__GLOBAL__, 'Promise')) {
        Promise.resolve().then(() => this.run())
      }
    }
  }

  private run() {
    const currentQueue = this.queue.slice(0)
    this.queue = []
    this.isRunning = false
    currentQueue.forEach((fn) => fn())
  }
}
