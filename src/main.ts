// import { Context } from 'koa'
import 'reflect-metadata'

import app from './app'
import { APP_PORT } from './app/config'
import AppDataSource from './app/db'

// app.use((ctx, next) => {
//   ctx.body = 'Hello Koa'
//   next()
// })

app.listen(process.env.APP_PORT, () => {
  console.log('服务器启动成功', APP_PORT)

  AppDataSource.initialize()
    .then(async () => {
      console.log('数据库连接成功')
    })
    .catch(err => {
      console.error('Error during Data Source initialization', err)
    })
})
