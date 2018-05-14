<template>
  <div>
    <el-container class="guide container">
      <el-header class="header">
        <el-col :span="8" class="imgcon">
          <img :src="img"/>
        </el-col>
        <el-col :span="16" class="inner_text">
          导航菜单
        </el-col>
      </el-header>
      <el-main>
        <el-row class="menu">
          <el-menu
          :default-active="$route.path"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="hideGuide"
          active-text-color="#ffd04b">
            <el-menu-item index="commit">
              <img :src="img3" />
              <span class="inner_text">SQL提交</span>
            </el-menu-item>
            <el-menu-item index="query">
              <img :src="img4" />
              <span class="inner_text">SQL查询</span>
            </el-menu-item>
            <el-menu-item index="export">
              <img :src="img5" />
              <span class="inner_text">SQL导出</span>
            </el-menu-item>
            <el-menu-item index="project">
              <img :src="img6" />
              <span class="inner_text">产品版本维护</span>
            </el-menu-item>
            <el-menu-item index="auth">
              <img :src="img7" />
              <span class="inner_text">权限维护</span>
            </el-menu-item>
            <el-menu-item index="users">
              <img :src="img8" />
              <span class="inner_text">用户维护</span>
            </el-menu-item>
            <el-menu-item index="home">
              <img :src="imghome" />
              <span class="inner_text">返回首页</span>
            </el-menu-item>
          </el-menu>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getversion } from '@/service/getVersionData'

export default {
  data () {
    return {
      img: require('@/assets/guide.png'),
      img2: require('@/assets/project.png'),
      img3: require('@/assets/sqlcommit.png'),
      img4: require('@/assets/sqlquery.png'),
      img5: require('@/assets/export.png'),
      img6: require('@/assets/version.png'),
      img7: require('@/assets/auth.png'),
      img8: require('@/assets/users.png'),
      imghome: require('@/assets/home.png')
    }
  },
  mounted () {

  },
  methods: {
    async getavailableversion () {
      await getversion().then((res) => {
        if (res) {
          console.log(res)
        } else {
          console.log('no version')
        }
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    hideGuide (key, keyPath) {
      console.log(key)
      var title
      switch (key) {
        case 'commit':
          title = 'SQL提交'
          break
        case 'query':
          title = 'SQL查询'
          break
        case 'export':
          title = 'SQL导出'
          break
        case 'project':
          title = '产品版本维护'
          break
        case 'auth':
          title = '权限维护'
          break
        case 'users':
          title = '用户维护'
          break
        case 'home':
          title = '西软SQL管理平台'
          break
        default:
          title = 'UNKOWN'
          break
      }
      this.$emit('hideGuide', title)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss_vars";

.container {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    background: $color-primary;
    padding: 0px 0px 0px 0px;
    height: 60px;
    line-height: 60px;
    .imgcon {
      text-align: right;
      margin-top: 10px;
    }
    .inner_text {
      text-align: left;
      color: white;
      letter-spacing: 5px;
      text-indent: 20px;
    }
  }
}
.menu {
  position: absolute;
  top: 60px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  .inner_text {
    margin-left: 10px;
  }
}
</style>
