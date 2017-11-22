import ApiError from '../error/ApiError'
import ApiErrorNames from '../error/ApiErrorNames'

export default async router => {
  router.get('/api/userInfo/:id', userInfo).get('/api/userList', userList)
}
async function userInfo (ctx, next) {
  if (Number(ctx.query.id) !== 1) {
    throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
  }
  ctx.body = { id: 1, name: 'twj', age: 18 }
}

async function userList (ctx, next) {
  ctx.body = [{ name: 'twj0', age: 18 }, { name: 'twj1', age: 19 }]
  await next()
}
