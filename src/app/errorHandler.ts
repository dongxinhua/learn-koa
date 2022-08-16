import { Context } from 'koa'
import {
  NAME_AND_PASSWORD_NOTNULL,
  PASSWORD_IS_INCORRECT,
  USER_IS_EXISTS,
  USER_IS_NOT_EXISTS
} from '../constants/error-types'

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

    case USER_IS_NOT_EXISTS:
      status = 400
      msg = {
        code: 400,
        msg: '用户名不存在'
      }
      break;

    case PASSWORD_IS_INCORRECT:
      status = 400
      msg = {
        code: 400,
        msg: '密码错误'
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