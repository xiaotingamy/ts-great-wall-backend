/*
 * @Description:
 * @version:
 * @Author: guoxt
 * @Date: 2021-10-31 15:45:40
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 20:17:14
 */
import Router from 'koa-router'
import { blogControllers } from '../controllers'
import jwtMiddleware from '../middlewares/jwt'
import loginCheck from '../middlewares/loginCheck'

const router = new Router()

router.prefix('/api')
router.use(jwtMiddleware)

router.post('/test', loginCheck, blogControllers.create)

export default router
