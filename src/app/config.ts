import 'dotenv/config'
import fs from 'fs'
import path from 'path'

const {
  APP_PORT,
  MYSQLNAME,
  MYSQLPSD,
  MYSQLPORT,
  DATABASE,
  HOST
} = process.env

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'), 'utf-8')
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'), 'utf-8')

export {
  APP_PORT,
  MYSQLNAME,
  MYSQLPSD,
  MYSQLPORT,
  DATABASE,
  HOST,
  PRIVATE_KEY,
  PUBLIC_KEY
}