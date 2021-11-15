/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-11 18:35:08
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-13 19:52:40
 */
import NodeRsa from 'node-rsa'
/**
  * @function: 验签函数
  * @author: guoxt
  * @param {*} data 验签参数，这边验签参数有要求，必须按照参数字母大小从小到大排序，及a在前，z在最后；
  * @return {*}
  */
function handleSign (data: IAuthReqData) {
  const params = new URLSearchParams()
  for (const key in data) {
    params.append(key, data[key])
  }
  //私钥 -- 与配置在sso系统中的公钥是匹配的
  const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgHUmmhSSrJG0aLHuAohZ/Pc1z0OUmjgntGU/2IIVRC7RQfQyyPjE
  v470wlO35JIP5eo6paV02BDZNqhgiomlGEQqp09dyIGbQ1j5/7liaUET5VEzDdYf
  pwD+QDOjXMHoaGCzhW51/yarZPoW1wmG/N/qXMbAnYyUPHA6k5WYB03tAgMBAAEC
  gYAktutVBT62Dz88fCYpC2K/KwsA2AKZFMBxdtfotLeAoK411PCtHiQWrlh0mk41
  BGx+wtCFESBh72E01cS1LJt03O9S0vPOTTaZ+Mjl5KLolpLb0lV1gsvQFpn75rM/
  W8Z1tl8OI1GkPnwjBLNa5tl18D/uwWuYvx232yjeGEpkVQJBALTHEo3Sx8GG3z6a
  ulWQh/9ww8mz3OivM+xSq/QRYNiKEqi1cL6cFG3qcodVqg4lEZyX67VxadWSO6vl
  JUnr3HcCQQCl5dMQREizhcSvrg1m87R2UVlPKTDjfe24haKyyFS45W2g260RqsuK
  0Ea2QGcPZGp7g4gA4phyYPqmlBlQ9JW7AkAFFAaIZ2BnJlPFHXGYj7vSSCen1d6h
  xrIttFDSRV60FoTZqmclY5sLT2eyN4zUYuQwwu/DJBF2B2qXtJMslWyXAkEAgl1z
  2piOOOSphxRTW8+uxDtw3xATZvGSWSpKjAt46EMCPyHhgrygblj0+ErrseDK/HyD
  544pFdi3nydKLZ/F+QJAZmF7kKN79pqGdqHZpIN4KhceckLtTgGfvg6ma0dXHFb4
  +CR+iboARKD2IV4/NWTbvvlXAXGnqLIT0o1cjJ9flg==
  -----END RSA PRIVATE KEY-----`

  const key = new NodeRsa(PRIVATE_KEY)
  // 对于参数做格式转换，因为转换后会做转译，所以这边做decodeURIComponent，不然验签失败
  // content: charset=UTF-8&content={"token": "2163819r8239478912"}
  const content = decodeURIComponent(params.toString())
  const content_buffer = Buffer.from(content)
  return key.sign(content_buffer, 'base64', 'utf8')
}

export {
  handleSign
}
