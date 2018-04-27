// import {getStore,removeStore} from 'localstorage'
import fetch from '../config/fetch'
/**
 * 获取用户信息
 */
export const getUser = (data) => fetch('/empno/login', data, 'POST')
/**
 * 从本地获取用户信息
 */
export const getUserLocal = () => sessionStorage.getItem('sqlmanageruser')
/**
 * 从本地删除用户信息
 */
export const remoreUserLocal = () => sessionStorage.removeItem('sqlmanageruser')
/**
 * 在本地存储用户信息
 */
export const setUserLocal = (obj) => sessionStorage.setItem('sqlmanageruser', JSON.stringify(obj))
/**
 * 在本地存储网页标题信息
 */
export const setTitleLocal = (title) => sessionStorage.setItem('sqlpagetitle', title)
/**
 * 从本地获得网页标题信息
 */
export const getTitleLocal = (title) => sessionStorage.getItem('sqlpagetitle')
