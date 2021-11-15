/*
 * @Description: 用户数据模型
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 17:58:07
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-14 16:42:47
 */
import seq from './database/seq'
import { STRING, DECIMAL } from './database/types'

// 用户模型 users表
const User = seq.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  nickname: {
    type: STRING,
    allowNull: false,
    comment: '昵称'
  },
  sex: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '性别（1 男性，2 女性，3 保密）'
  }
})

export default User
