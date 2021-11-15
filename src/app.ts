/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 15:27:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:02:17
 */

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import staticCache from 'koa-static-cache'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import koaJwt from 'koa-jwt'
import { publicDir } from './conf'
import { JWT_SECRET_KEY } from './conf'

// 路由
import publicRouter from './routes/public'
import privateRouter from './routes/private'
import blogAPIRouter from './routes/blog'

import { loggerMiddleware } from './middlewares/logger'
import { errorHandler, responseHandler } from './middlewares/response'
import { corsHandler } from './middlewares/cors'

const app = new Koa()
  
// Logger
app.use(loggerMiddleware)

// error handler
app.use(errorHandler)

// global middlewares
app.use(bodyParser())
app.use(staticCache(publicDir))

// Helmet
app.use(helmet())

// cors
app.use(cors(corsHandler))

// unless the URL starts with '/api/public'
app.use(koaJwt({ secret: JWT_SECRET_KEY }).unless({ path: [/^\/api\/public/] }))

// Routes
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(publicRouter.routes())
app.use(publicRouter.allowedMethods())
app.use(privateRouter.routes())
app.use(privateRouter.allowedMethods())
app.use(blogAPIRouter.routes())
app.use(blogAPIRouter.allowedMethods())

// response
app.use(responseHandler)

module.exports = app