/*
 * @Description: blog service
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 11:54:19
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 20:16:18
 */
import { Blog } from '../models/index'

const blog = {
  /**
   * @function: 创建一条博客
   * @author: guoxt
   * @param {*} userId
   * @param {*} content
   * @param {*} title
   * @return {*}
   */  
  async createBlog ({ userId, content, title }: IBlogContent) {
    const result = await Blog.create({
      userId,
      content,
      title
    })
    return result.dataValues
  }
}

export default blog
