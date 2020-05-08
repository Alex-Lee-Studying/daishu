import request from '@/utils/request'
const basePath = '/user/v1'

// 用户认证/登陆
export function login(params) {
  return request({
    url: basePath + '/auth',
    method: 'post',
    data: params.data
  })
}
// 用户注册，目前支持邮件/短信注册
export function register(params) {
  return request({
    url: basePath + '/users',
    method: 'post',
    // headers: {'Language': ''},
    data: params.data
  })
}
// 根据用户id获取用户信息
export function getInfo(params) {
  return request({
    url: basePath + '/users/' + params.id,
    method: 'get'
  })
}
// 修改用户相关信息
export function updateInfo(params) {
  return request({
    url: basePath + '/users/' + params.id,
    method: 'put',
    headers: {'Authorization': params.token},
    data: params.data
  })
}
// 修改用户密码
export function updatePwd(params) {
  return request({
    url: basePath + '/users/' + params.id + '/password',
    method: 'put',
    headers: {'Authorization': params.token},
    data: params.data
  })
}
// 发送短信验证码
export function smsCode(params) {
  return request({
    url: basePath + '/sms-code',
    method: 'post',
    data: params
  })
}

export function logout(params) {
  return request({
    url: basePath + '/users/' + params.id,
    method: 'put'
  })
}