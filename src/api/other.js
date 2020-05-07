import request from '@/utils/request'

export function getCountriesCities(params) {
  return request({
    url: '/app/v1/countries-cities',
    method: 'get',
    params
  })
}