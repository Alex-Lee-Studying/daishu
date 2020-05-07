import request from '@/utils/request'
const basePath = '/user/v1'

export function login(params) {
  return request({
    url: basePath + '/auth',
    method: 'post',
    data: params
  })
}

export function register(params) {
  return request({
    url: basePath + '/users',
    method: 'post',
    data: params
  })
}

export function getInfo(params) {
  return request({
    url: basePath + '/users/' + params.id,
    method: 'get'
  })
}

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