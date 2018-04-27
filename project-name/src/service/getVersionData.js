import fetch from '../config/fetch'
/**
 * 获取可用版本列表
 */
export const getversion = () => fetch('/sqlmanager/getavailableversion', null, 'POST')
