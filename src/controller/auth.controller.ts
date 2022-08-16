import { Context, Next } from 'koa'

class authController {
  async login(ctx: Context, next: Next) {
    ctx.response.body = {
      code: 200,
      msg: '登录成功'
    }
  }
}

export default new authController()
