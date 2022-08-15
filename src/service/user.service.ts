class userService {
  async create(user: any) {
    console.log(`将数据写入数据库`, user)
    return 'create'
  }
}

export default new userService()