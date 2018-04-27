import { remoreUserLocal, getUserLocal } from '../service/getData'
import {
  GET_USERINFO,
  LOGOUT,
  SET_PAGETITLE,
  RECORD_USERINFO,
  GET_PAGETITLE
} from './mutation_type'

export default {

  recorduserinfo ({ commit, state }, obj) {
    let res = obj
    commit(RECORD_USERINFO, res)
  },
  getUserInfo ({ commit, state }) {
    let res = getUserLocal()
    console.log(res)
    commit(GET_USERINFO, res)
  },
  logoutaction ({ commit, state }) {
    remoreUserLocal()
    commit(LOGOUT)
  },
  settitle ({ commit, state }, title) {
    commit(SET_PAGETITLE, title)
  },
  gettitle ({ commit, state }) {
    commit(GET_PAGETITLE)
  }
}
