import Router from 'koa-router'
import controller from '../controller/user.controller'
import { userInspect } from '../middleware/user.middleware'

const userRouter = new Router({
  prefix: '/user'
})

userRouter.post('/register', userInspect, controller.create)

export default userRouter