/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-12 17:47:06
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-13 19:49:20
 */
import * as path from 'path'

export const SERVE_PORT = 3000

export const JWT_SECRET_KEY = 'KHeurj_7463#$'

export const publicDir = path.resolve(__dirname, '../public')

export const logPath = path.resolve(__dirname, '../logs/koa-template.log')
