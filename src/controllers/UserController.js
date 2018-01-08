import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'
class UserController {
  async userInfo (ctx, next) {
    if (Number(ctx.params.id) !== 1) {
      throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
    }
    ctx.body = { id: 1, name: 'twj', age: 18 }
  }

  async userList (ctx, next) {
    ctx.body = [{ name: 'twj0', age: 18 }, { name: 'twj1', age: 19 }]
    await next()
  }
}

export default new UserController()
