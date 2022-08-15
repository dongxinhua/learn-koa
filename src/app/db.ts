
import { DataSource } from 'typeorm'

import { DATABASE, HOST, MYSQLNAME, MYSQLPSD, MYSQLPORT } from '../app/config'
import { User } from '../entity/User'

const AppDataSource = new DataSource({
  type: "mysql",
  host: HOST,
  port: Number(MYSQLPORT),
  username: MYSQLNAME,
  password: MYSQLPSD,
  database: DATABASE,
  entities: [User],
  synchronize: true
})

export default AppDataSource
