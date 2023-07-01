import { IBreadcrumbData } from '@choco-monitor/types'

export class Breadcrumb {
  stack: IBreadcrumbData[] = []
  maxBreadcrumbs: number = 50 // 用于行为最大存放长度

  push(breadcrumb: IBreadcrumbData): void {
    if (this.stack.length >= this.maxBreadcrumbs) {
      this.shift()
    }
    this.stack.push(breadcrumb)
  }

  shift(): boolean {
    return this.stack.shift() !== undefined
  }

  clear(): void {
    this.stack = []
  }

  getStack(): IBreadcrumbData[] {
    return this.stack
  }
}

const breadcrumb = new Breadcrumb()

export default breadcrumb
