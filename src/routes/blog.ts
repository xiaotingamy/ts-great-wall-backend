/*
 * @Description: XX模块路由
 * @version:
 * @Author: guoxt
 * @Date: 2021-10-31 15:45:40
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:13:34
 */
import Router from 'koa-router'
import { blogControllers } from '../controllers'
import jwtMiddleware from '../middlewares/jwt'
import loginCheck from '../middlewares/loginCheck'

const router = new Router()

router.prefix('/api')
router.use(jwtMiddleware)

router.post('/create/blog', loginCheck, blogControllers.create)

export default router
