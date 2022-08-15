import { Context, Next } from 'koa'
import { NAME_AND_PASSWORD_NOTNULL } from '../constants/error-types'

export const userInspect = async (ctx: Context, next: Next) => {
  const { name, password } = ctx.request.body

  // 检查是否不为空
  console.log(name, password)
  if (!name && !password) {
    const error = new Error(NAME_AND_PASSWORD_NOTNULL)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}
