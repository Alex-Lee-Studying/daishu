import request from '@/utils/request'
const basePath = '/app/v1'

// 求带列表
export function getDeliveries(params) {
  return request({
    url: basePath + '/deliveries',
    method: 'get',
    headers: {'page': params.page, 'page-size': params.pageSize},
    data: params.data
  })
}