export function callWithTryCatch(fn: Function, errorFn?: Function) {
  try {
    fn()
  } catch (e) {
    if (errorFn) {
      errorFn(e)
    }
  }
}
