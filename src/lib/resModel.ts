/*
 * @Description: res 的数据模型
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:25:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-12 20:27:49
 */
interface IResData {
  errorCode?: number
  data?: any // todo
  errorMsg?: string
  success: boolean
}

class BaseModel {
  errorCode?: number
  data?: object
  errorMsg?: string
  success: boolean
  constructor ({ errorCode, data, errorMsg, success }: IResData) {
    this.success = success
    if (errorCode) {
      this.errorCode = errorCode
    }
    if (data) {
      this.data = data
    }
    if (errorMsg) {
      this.errorMsg = errorMsg
    }
  }
}

class SuccessModel extends BaseModel {
  constructor (data = {}) {
    super({
      data,
      success: true
    })
  }
}

class ErrorModel extends BaseModel {
  constructor ({ errorCode = -1, errorMsg = '网络繁忙，请稍后再试' }) {
    super({
      errorCode,
      errorMsg,
      success: false
    })
  }
}

export {
  SuccessModel,
  ErrorModel
}
