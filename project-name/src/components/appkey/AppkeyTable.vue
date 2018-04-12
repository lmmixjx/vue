<template>
  <h1>提交记录列表页面</h1>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Button } from 'element-ui'

Vue.use(Button)

export default {
  methods: {
    doget () {
      console.log(this.$router.currentRoute.fullPath)
      console.log('doget' + global.url)
      axios.get(global.url + '/getid')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
