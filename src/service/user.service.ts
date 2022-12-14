import { User } from "../entity/User"

interface UserData {
  name: string,
  password: string
}

class userService {
  async create(data: UserData) {
    const user = new User
    user.name = data.name
    user.password = data.password
    await user.save()
    return {
      code: 200,
      msg: '注册成功'
    }
  }

  async getUserByName(name: string) {
    const res = await User.findBy({
      name
    })
    return res[0]
  }
}

export default new userService()