import { Context, Next } from 'koa'
import service from '../service/user.service'
import { NAME_AND_PASSWORD_NOTNULL, USER_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT } from '../constants/error-types'
import { md5Password } from '../utils/user.utils'


export const authInspect = async (ctx: Context, next: Next) => {
  const { name, password } = ctx.request.body

  // 判断是否为空
  if (!name || !password) {
    const error = new Error(NAME_AND_PASSWORD_NOTNULL)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名是否存在
  const user = await service.getUserByName(name)
  if (!user) {
    // 用户不存在
    const error = new Error(USER_IS_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断密码是否正确
  if (md5Password(password) !== user.password) {
    const error = new Error(PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}