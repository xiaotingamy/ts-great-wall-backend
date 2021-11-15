/*
 * @Description: 数据模型入口文件
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:55:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 19:55:11
 */
import User from './User'
import Blog from './Blog'

Blog.belongsTo(User, {
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  foreignKey: 'userId'
})

export {
  User,
  Blog
}
