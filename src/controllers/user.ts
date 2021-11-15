/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:19:20
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:09:49
 */
import { loginFailInfo, registerUserNameExistInfo, registerFailInfo } from '../lib/errorInfo'
import { userServices } from '../services'
import { InvalidQueryError } from '../lib/error'
import { JWT_SECRET_KEY } from '../conf'
import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'

const user = {
  /**
   * @function: 注册
   * @author: guoxt
   * @param {*} ctx
   * @param {*} next
   * @return {*}
   */
  async register (ctx: Context, next: Next) {
    // debugger
    const { username, password, nickname, sex } = ctx.request.body
    const userInfo = await userServices.getUserInfo(username)
    if (userInfo) {
      // 用户名已存在
      ctx.errorInfo = registerUserNameExistInfo
      return next()
    }
    try {
      await userServices.createUserInfo(username, password, nickname, sex)
      ctx.result = {}
    } catch (ex) {
      ctx.errorInfo = registerFailInfo
    }
    return next()
  },
  /**
   * @function: 登录, 对接sso认证中心登陆接口
   * @author: guoxt
   * @param {*} ctx
   * @param {*} next
   * @return {*}
   */
  async login (ctx: Context, next: Next) {
    const token = ctx.request.headers.token
    if (!token) {
      throw new InvalidQueryError()
    }
    try {
      const res: any = await userServices.getUserInfo(token)
      if (res.success) {
        const userInfo = res.data
        const token = jwt.sign(userInfo, JWT_SECRET_KEY, { expiresIn: '2h' }) // 有效时长2小时
        ctx.result = {
          ...userInfo,
          accessToken: token // 长城系统token
        }
      } else {
        ctx.errorInfo = res
      }
    } catch (err) {
      ctx.errorInfo = loginFailInfo
    }
    return next()
  }
}

export default user
  