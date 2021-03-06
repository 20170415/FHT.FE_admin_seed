/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-09-14 10:29:35
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-11-20 10:09:37
 */

import { fetch } from '@/utils/fetch'

export const exampleApi = {
  requestPath: 'example',
  queryMethod: 'list',
  isMock: true,
  list (params = {}) {
    return fetch(this.requestPath, {
      method: this.queryMethod,
      params
    }, {
      isMock: this.isMock
    })
  }
}
