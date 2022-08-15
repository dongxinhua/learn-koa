import { Context } from 'koa'
import { NAME_AND_PASSWORD_NOTNULL, USER_IS_EXISTS } from '../constants/error-types'

export const errorHandler = (error: Error, ctx: Context) => {
  let status, msg
  switch (error.message) {
    case NAME_AND_PASSWORD_NOTNULL:
      status = 400
      msg = {
        code: 400,
        msg: '用户名或密码不能为空'
      }
      break;

    case USER_IS_EXISTS:
      status = 409
      msg = {
        code: 409,
        msg: '用户名已存在'
      }
      break;

    default:
      status = 404
      msg = 'NOT FOUND'
      break;
  }

  ctx.status = status
  ctx.body = msg
}