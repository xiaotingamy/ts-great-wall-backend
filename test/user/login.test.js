/* eslint-disable no-undef */
/*
 * @Description: 用户模块
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-08 23:21:45
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-13 19:54:03
 */
const server = require('../server')

// 用户信息
const username = `user_${Date.now()}`
const password = `psd_${Date.now()}`
const testUser = {
  username,
  password,
  nickname: username,
  sex: 1
}
const token = ''

// 注册
test('注册一个用户，应该成功', async () => {
  const res = await server.post('/api/public/user/register').send(testUser)
  expect(res.body.success).toBe(true)
})

// 重复注册
test('重复注册用户，应该失败', async () => {
  const res = await server.post('/api/public/user/register').send(testUser)
  expect(res.body.success).toBe(false)
  expect(res.body.errorCode).toBe(40202)
  expect(res.body.errorMsg).toBe('用户已存在')
})

// 登录
test('登录，应该成功', async () => {
  const res = await server.post('/api/public/user/login').send(token)
  expect(res.body.success).toBe(true)

  // 获取 TOKEN
  TOKEN = res.body.data.token
})
