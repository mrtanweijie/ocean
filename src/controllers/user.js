export default async router => {
  router.get('/userInfo', userInfo)
}

async function userInfo (ctx, next) {
  ctx.body = {
    code: 0,
    message: '请求成功',
    data: {}
  }
  await next()
}
