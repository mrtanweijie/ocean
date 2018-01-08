import Router from 'koa-router'
import initRouter from './routes'
const router = new Router()

initRouter(router)

export default router
