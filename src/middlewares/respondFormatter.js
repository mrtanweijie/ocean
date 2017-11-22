import ApiError from '../error/ApiError'
/**
 * 格式化处理响应结果中间件
 */
var respondFormatter = ctx => {
  if (ctx.body) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body
    }
  } else {
    ctx.body = {
      code: 0,
      message: 'success'
    }
  }
}

export default pattern => {
  return async (ctx, next) => {
    var reg = new RegExp(pattern)
    try {
      await next()
    } catch (error) {
      // 如果异常类型是API异常并且通过正则验证的url,将错误信息添加到响应体中返回
      if (error instanceof ApiError && reg.test(ctx.originalUrl)) {
        ctx.status = 200
        ctx.body = {
          code: error.code,
          message: error.message
        }
        return
      }
      // 继续抛,让外层中间件处理日志
      throw error
    }
    if (reg.test(ctx.originalUrl)) {
      respondFormatter(ctx)
    }
  }
}
