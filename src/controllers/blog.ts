/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:56:27
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 21:01:48
 */
import { blogServices } from '../services'
import { createBlogFailInfo } from '../lib/errorInfo'
import { Context, Next } from 'koa'

const blog = {
  async create (ctx: Context, next: Next) {
    const { content, title } = ctx.request.body
    const userId = ctx.jwtData.userId
  
    try {
      // 创建博客
      const blog = await blogServices.createBlog({
        userId,
        content,
        title
      })
      ctx.result = blog
    } catch (ex) {
      ctx.errorInfo = createBlogFailInfo
    }
    return next()
  }
}

export default blog
