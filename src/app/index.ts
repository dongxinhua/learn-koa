import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import useRoutes from '../router'
import { errorHandler } from './errorHandler'

const app = new Koa()

// 解析 json / urlencoded
app.use(bodyParser())
// 判断某个 method 是否支持
useRoutes(app)

app.on('error', errorHandler)

export default app