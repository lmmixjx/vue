# vue

项目结构


```
.
├── src                                         // 源码目录
|    ├──assets                                  // PNG图片目录
|    ├──components                              // 公共组件目录
|    |      ├──DrawLayoutPanel.vue              // 主界面组件，包括左侧弹出框
|    |      ├──footer
|    |           ├──footer.vue                  // 页尾组件
|    ├──config                                  // 配置文件目录
|    |     ├──env.js                            // 配置请求url文件
|    |     ├──fetch.js                          // 统一配置的fetch请求方法
|    ├──mock                      
|    |    ├──mock.js                            // fetchmock模拟数据
|    ├──router
|    |     ├──router.js                         // 路由配置
|    ├──service
|    |     ├──getDatas.js                       // 获得一些公用信息的方法
|    |     ├──getVersionDatas.js                // 获得一些关于版本的方法
|    ├──style
|    |    ├──vars.scss                          // 公用sass配置文件，里面配置了程序主色调
|    ├──views                                   // 页面目录
|    |    ├──Auth                               
|    |    |    ├──Auth.vue                      // 权限页面
|    |    ├──guide
|    |    |    ├──GuidePanel.vue                // 左侧导航页面
|    |    ├──home
|    |    |    ├──Home.vue                      // 首页页面
|    |    ├──login
|    |    |    ├──Login.vue                     // 登录页面
|    |    ├──Project
|    |    |    ├──Project.vue                   // 产品和版本维护页面
|    |    ├──SQLPage
|    |    |    ├──Commit.vue                    // SQL提交页面
|    |    |    ├──Export.vue                    // SQL导出页面
|    |    |    ├──Query.vue                     // SQL查询页面
|    |    ├──users
|    |    |    ├──User.vue                      // 用户维护页面


```
