/*
 * @Description: 环境
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 16:08:26
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 17:54:14
 */

const ENV = process.env.NODE_ENV

export default {
  isDev: ENV === 'development',
  notDev: ENV !== 'development',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: ENV === 'test',
  notTest: ENV !== 'test'
}
