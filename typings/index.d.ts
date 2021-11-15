/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-12 19:01:46
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 20:48:32
 */

/**
 * @interface sso登陆认证的请求参数
 */
interface IAuthReqData {
  charset: string
  content: string
  method: string
  nonce: string
  sys_code: string
  version: string
  sign?: string
  sign_type?: string
  [x: string]: any
}

/**
 * @interface 博客内容
 */
interface IBlogContent {
  userId: number
  content: string
  title: string
  [x: string]: any
}
