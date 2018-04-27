// 引入fetch-mock
var fetchMock = require('fetch-mock')
// 使用fetch-mock模拟数据
// 登录
fetchMock.post('/empno/login', '{"success":true,"msg":"登录成功","user":{"username":"徐坚翔"}}')
// 获得所有可用版本信息
fetchMock.post('/sqlmanager/getavailableversion', '{"projects": [{"project_name": "XMS","versionlist": [{"version_name": "V330","version_descript": "XMS330版本"},{"version_name": "V340","version_descript": "XMS340版本"},{"version_name": "V350","version_descript": "XMS350版本"}]}]}')
