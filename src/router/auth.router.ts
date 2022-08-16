import Router from 'koa-router'
import controller from '../controller/auth.controller'
import { authInspect } from '../middleware/auth.middleware'

const authRouter = new Router()

authRouter.post('/login', authInspect, controller.login)

export default authRouter
