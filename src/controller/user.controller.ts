import { Context, Next } from "koa"
import service from '../service/user.service'

class userController {
  async create(ctx: Context, next: Next) {
    // 获取参数
    const data = ctx.request.body

    // 进行数据库操作
    const res = await service.create(data)

    // 返回数据
    ctx.response.body = res
  }
}

export default new userController()