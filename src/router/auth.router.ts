import Router from 'koa-router'
import controller from '../controller/auth.controller'
import { authInspect, authVerifyToken } from '../middleware/auth.middleware'

const authRouter = new Router()

authRouter.post('/login', authInspect, controller.login)

authRouter.post('/test', authVerifyToken, controller.success)

export default authRouter
