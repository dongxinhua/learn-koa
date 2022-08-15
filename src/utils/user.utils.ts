import crypto from 'crypto'

export const md5Password = (password: string) => {
  const hash = crypto.createHash('md5')

  return hash.digest('hex')
}