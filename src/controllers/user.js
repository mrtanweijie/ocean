import utils from '../utils'
export default async router => {
  router.get('/userInfo', userInfo)
}

async function userInfo (ctx, next) {
  ctx.body = utils.respondData({ name: 'twj', age: 18 })
  await next()
}
