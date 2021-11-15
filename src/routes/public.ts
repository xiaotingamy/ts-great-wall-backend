/*
 * @Description: public 路由
 * @version:
 * @Author: guoxt
 * @Date: 2021-10-31 15:45:32
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 20:17:46
 */
import Router from 'koa-router'
import { userControllers } from '../controllers'

const router = new Router()

router.prefix('/api/public')

router.post('/user/login', userControllers.login)
router.post('/user/register', userControllers.register)

export default router
