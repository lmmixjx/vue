import { setUserLocal, setTitleLocal, getTitleLocal } from '@/service/getData'
import {
  GET_USERINFO,
  RECORD_USERINFO,
  LOGOUT,
  SET_PAGETITLE,
  GET_PAGETITLE
} from './mutation_type'

export default {
  [GET_USERINFO] (state, info) {
    let obj = JSON.parse(info)
    if (state.userInfo && (state.userInfo.username !== obj.username)) {
      return
    }
    if (obj.username) {
      state.userInfo = { ...obj }
    } else {
      state.userInfo = null
    }
  },
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    setUserLocal(info) // 把登录后用户信息存到本地
  },
  [LOGOUT] (state, info) {
    state.userInfo = null
  },
  [SET_PAGETITLE] (state, info) {
    state.pagetitle = info
    setTitleLocal(info)
  },
  [GET_PAGETITLE] (state, info) {
    let name = getTitleLocal()
    if (name) {
      state.pagetitle = name
    }
  }
}
