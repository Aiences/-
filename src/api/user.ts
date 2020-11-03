import request from '../utils/request'

export default {

  // 用户登录请求
  login: (data: any) => {
    return request({
      url: process.env.VUE_APP_BASE_API + '/user/front/login',
      method: 'post',
      data
    })
  },


}