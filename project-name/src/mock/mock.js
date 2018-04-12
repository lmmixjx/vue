// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('/empno/login', 'post', (req, res) => {
  var jsons = req.body
  console.log(jsons)
  var obj = JSON.parse(jsons)
  console.log(obj.username)
  if (obj.username === 'admin' && obj.password === '1234') {
    return '{"success":true,"msg":"登录成功","user":{"name":"呀哈哈"}}'
  } else {
    return '{"success":false,"msg":"密码错误或者用户不存在"}'
  }
})
