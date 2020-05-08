import request from '@/utils/request'

//国家城市列表
export function getCountriesCities(params) {
  return request({
    url: '/app/v1/countries-cities',
    method: 'get',
    params
  })
}

// 用户反馈
export function createAccusation(params) {
  return request({
    url: '/app/v1/accusations',
    method: 'post',
    headers: {'Authorization': params.token},
    data: params.data
  })
}