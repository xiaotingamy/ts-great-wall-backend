/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 16:11:37
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:07:37
 */
import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'
import { JWT_SECRET_KEY } from '../conf'
import { ForbiddenError } from '../lib/error'

export default async function (ctx: Context, next: Next) {
  // 将 token 中的数据解密后存到 ctx 中
  try {
    if (typeof ctx.request.headers.authorization === 'string') {
      const token = ctx.request.headers.authorization.slice(7)
      ctx.jwtData = jwt.verify(token, JWT_SECRET_KEY)
    } else {
      throw new ForbiddenError('未授权')
    }
  } catch (err) {
    throw new ForbiddenError('未授权')
  }
  await next()
  return
}
