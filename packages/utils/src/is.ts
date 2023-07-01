const toString = Object.prototype.toString

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isArray(val: unknown) {
  return is(val, 'Array')
}

export function isFunction(fn: unknown) {
  return typeof fn === 'function'
}

export function isWindow() {
  return typeof window !== 'undefined'
}
