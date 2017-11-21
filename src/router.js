import Router from 'koa-router'
import initController from './controllers'
const router = new Router()

initController(router)

export default router
