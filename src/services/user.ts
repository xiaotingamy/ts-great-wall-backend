/*
 * @Description: user service
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 17:40:20
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-13 19:53:06
 */
import { User } from '../models'
import { handleSign } from '../lib/sign'
import { SSO_LOGIN_CONF } from '../conf'
import axios  from 'axios'

const user = {
  /**
   * @function: 创建用户
   * @author: guoxt
   * @param {*} username
   * @param {*} password
   * @param {*} nickname
   * @param {*} sex
   * @return {*}
   */  
  async createUserInfo (username: string, password: string, nickname: string, sex: number) {
    const result = await User.create({
      username,
      password,
      nickname,
      sex
    })
    return result.dataValues
  },
  
  /**
   * @function: 查询用户
   * @author: guoxt
   * @param {*} token
   * @return {*}
   */  
  async getUserInfo (token: string | string[] | undefined) {
    const params = new URLSearchParams()
    const reqData: IAuthReqData = {
      charset: 'UTF-8', // 编码类型
      content: JSON.stringify({ token }),// 从header中拿token
      method: 'fshows.auth.applyAuth',
      nonce: '123456789', // 本次业务操作唯一标识，但是这边是一个随机字符串，没有要求
      sys_code: SSO_LOGIN_CONF.sysCode, // 系统编码
      version: '1.0'
    }
    reqData.sign = handleSign(reqData)
    reqData.sign_type = 'RSA2'
    console.log('sign', reqData.sign)

    for (const key in reqData) {
      params.append(key, reqData[key])
    }
    // console.log('URLSearchParams:', params)
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: SSO_LOGIN_CONF.url, // sso rpc接口
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.error('getUserInfo err: 获取用户信息失败', err)
        reject(err)
      })
    })
  }
}

export default user
