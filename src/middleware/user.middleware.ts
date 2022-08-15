import { Context, Next } from 'koa'
import { NAME_AND_PASSWORD_NOTNULL, USER_IS_EXISTS } from '../constants/error-types'
import service from '../service/user.service'

export const userInspect = async (ctx: Context, next: Next) => {
  const { name, password } = ctx.request.body

  // 检查是否不为空
  console.log(name, password)
  if (!name && !password) {
    const error = new Error(NAME_AND_PASSWORD_NOTNULL)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断是否已存在
  const user = await service.getUserByName(name)
  if (user) {
    // 用户已存在
    const error = new Error(USER_IS_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}
