import { Context, Next } from 'koa'
import { sign } from 'jsonwebtoken'
import { PRIVATE_KEY } from '../app/config'

class authController {
  async login(ctx: Context, next: Next) {
    const { id, name } = ctx.user
    const token = sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60,
      algorithm: 'RS256'
    })
    ctx.response.body = {
      code: 200,
      id,
      name,
      token,
      msg: '登录成功'
    }
  }

  async success(ctx: Context, next: Next) {
    ctx.response.body = {
      code: 200,
      msg: '验证成功'
    }
  }
}

export default new authController()
