import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import userRouter from '../router/user.router'

const app = new Koa()

// 解析 json / urlencoded
app.use(bodyParser())
app.use(userRouter.routes())
// 判断某个 method 是否支持
app.use(userRouter.allowedMethods())

export default app

// module.exports = app