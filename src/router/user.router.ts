import Router from 'koa-router'
import controller from '../controller/user.controller'

const userRouter = new Router({
  prefix: '/user'
})

userRouter.post('/register', controller.create)

export default userRouter