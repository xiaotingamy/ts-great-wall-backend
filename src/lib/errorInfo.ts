/*
 * @Description: 失败信息集合，包括 errorCode 和 errorMsg
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:22:25
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-14 15:09:18
 */
export const loginFailInfo = {
  errorCode: 40204,
  errorMsg: '登录失败，用户名或密码错误'
}

export const loginCheckFailInfo = {
  errorCode: 40201,
  errorMsg: '您尚未登录'
}

export const registerUserNameExistInfo = {
  errorCode: 40202,
  errorMsg: '用户已存在'
}

export const registerFailInfo = {
  errorCode: 40203,
  errorMsg: '注册失败，请重试'
}

export const createBlogFailInfo = {
  errorCode: 11001,
  errorMsg: '创建微博失败，请重试'
}
