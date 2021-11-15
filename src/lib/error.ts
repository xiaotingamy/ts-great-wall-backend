
class CodedError extends Error {
  code: string | number
  constructor (message = '未知错误', code = -1) {
    super(message)
    this.code = code
  }
}
class ForbiddenError extends CodedError {
  constructor (message = '拒绝访问') {
    super(message, 403)
  }
}
class InvalidQueryError extends CodedError {
  constructor (message = '无效的参数') {
    super(message, 400)
  }
}

export {
  CodedError,
  ForbiddenError,
  InvalidQueryError
}
