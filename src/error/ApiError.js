import ApiErrorNames from './ApiErrorNames'
import ExtendableError from 'es6-error'
/**
 * 自定义Api异常
 * 备注: 使用Babel之后直接继承Error,error.__proto__指向Error, error instanceof ApiError == false
 */
export default class ApiError extends ExtendableError {
  constructor (errorName) {
    super()
    let errorInfo = ApiErrorNames.getErrorInfo(errorName)
    this.name = errorName
    this.code = errorInfo.code
    this.message = errorInfo.message
  }
}

// ES5 写法
// function ApiError (errorName) {
//   let errorInfo = ApiErrorNames.getErrorInfo(errorName)
//   this.name = errorName
//   this.code = errorInfo.code
//   this.message = errorInfo.message
// }

// ApiError.prototype = Object.create(Error.prototype)

// ApiError.prototype.constructor = ApiError

// export default ApiError
