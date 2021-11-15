/*
 * @Description: 登录验证中间件
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 13:35:47
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:06:28
 */

import { ErrorModel } from '../lib/resModel'
import { loginCheckFailInfo } from '../lib/errorInfo'
import { Context, Next } from 'koa'

/**
 * @function API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
export default async function loginCheck (ctx: Context, next: Next) {
  if (ctx.jwtData && ctx.jwtData.userId) {
    // 已登录
    await next()
    return
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo)
}
