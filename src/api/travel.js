import request from '@/utils/request'
const basePath = '/app/v1'

// 行程列表
export function getTravels(params) {
  return request({
    url: basePath + '/travels',
    method: 'get',
    headers: {'page': params.page, 'page-size': params.pageSize},
    data: params.data
  })
}