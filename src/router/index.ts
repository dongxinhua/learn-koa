import Koa from 'koa'
import fs from 'fs'

// 动态注册路由
const useRoutes = (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  fs.readdirSync(__dirname).forEach(async (file) => {
    if (file === 'index.js') return;
    const router = await import(`./${file}`)
    app.use(router.default.routes())
    app.use(router.default.allowedMethods())
  })
}

export default useRoutes