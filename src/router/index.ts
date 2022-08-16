import Koa from 'koa'
import fs from 'fs'

// 动态注册路由
const useRoutes = (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  fs.readdirSync(__dirname).forEach(async (file) => {
    const fileName = file.split('.')[0]
    if (fileName === 'index') return;
    const router = await import(`./${file}`)
    app.use(router.default.routes())
    // 判断某个 method 是否支持
    app.use(router.default.allowedMethods())
  })
}

export default useRoutes