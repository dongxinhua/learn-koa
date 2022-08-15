// import { Context } from 'koa'
import 'reflect-metadata'
import app from './app'
import { APP_PORT } from './app/config'

// app.use((ctx, next) => {
//   ctx.body = 'Hello Koa'
//   next()
// })

app.listen(process.env.APP_PORT, () => {
  console.log('successs~', APP_PORT)
})