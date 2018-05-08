<template>
  <div>
    <vue-drawer-layout
      ref="drawerLayout"
      :drawer-width="300"
      :enable="true"
      :animatable="true"
      :z-index="818"
      :drawable-distance="300"
      :content-drawable="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.4]"
      @mask-click="handleMaskClick">
      <div class="drawer" slot="drawer">
        <guide @hideGuide="guideselect" />
      </div>
      <div class="content" slot="content">
        <el-container>
          <el-header>
            <el-row class="container">
              <el-col :span="24" class="header">
                <el-col :span="4" class="log">
                  <span @click="handleToggleDrawer"><img :src="img"/></span>
                </el-col>
                <el-col :span="16" class="title">
                  <b>{{this.pagetname}}</b>
                </el-col>
                <el-col :span="3" class="userinfo">
                  <el-dropdown trigger="hover">
                  <span class="el-dropdown-link userinfo-inner">
                    <img :src="img2" class="image"/>
                    {{this.username}}
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>我的消息</el-dropdown-item>
                      <el-dropdown-item >设置</el-dropdown-item>
                      <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <div class="main-container">
              <router-view />
            </div>
          </el-main>
          <el-footer>
            <el-row>
              <el-col class="footer">
                <mfoot/>
              </el-col>
            </el-row>
          </el-footer>
        </el-container>
      </div>
    </vue-drawer-layout>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Vue from 'vue'
import DrawerLayout from 'vue-drawer-layout'
import GuidePanel from '../views/guide/GuidePanel.vue'

Vue.use(DrawerLayout)
Vue.component('guide', GuidePanel)

export default {
  data () {
    return {
      img: require('@/assets/appstore.png'),
      img2: require('@/assets/actor.png'),
      pagetname: '',
      username: ''
    }
  },
  methods: {
    ...mapActions([
      'logoutaction',
      'getUserInfo',
      'gettitle',
      'settitle'
    ]),
    handleMaskClick () {
      this.$refs.drawerLayout.toggle(false)
    },
    handleToggleDrawer () {
      this.$refs.drawerLayout.toggle()
    },
    guideselect (title) {
      this.pagetname = title
      this.settitle(title)
      this.$refs.drawerLayout.toggle(false)
    },
    logout () {
      this.logoutaction()
      this.$router.push({ path: '/login' })
    },
    initData () {
      if (this.pagetitle) {
        this.pagetname = this.pagetitle
      }
      if (this.userInfo && this.userInfo.username) {
        this.username = this.userInfo.username
      }
    }
  },
  computed: {
    ...mapState([
      'userInfo',
      'pagetitle'
    ])
  },
  mounted () {
    this.getUserInfo()
    this.gettitle()
    this.initData()
  }
}

</script>

<style scoped lang="scss">
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
    .log {
      /*width: 40px;*/
      height: 60px;
      /*border-radius: 20px;*/
      margin-left: 5px;
      margin-top: 5px;
      /*float: right;*/
    }
    .title {
      height: 60px;
      line-height: 60px;
      color: white;
      font-size: 32px;
      text-align: center;
    }
    .userinfo {
      height: 60px;
      line-height: 60px;
      text-align: right;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        margin-right: 20px;
      }
      .image {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 10px 10px 10px;
        float: left;
      }
    }
  }
}
.main-container {
  /*background: #f1f2f7;*/
  /*flex:1;*/
  position: absolute;
  right: 0px;
  top: 60px;
  bottom: 50px;
  left: 0px;
  // overflow-y: scroll;
  // padding: 20px;
  // .main-body {
  //   right: 0px;
  //   top: 0px;
  //   bottom: 0px;
  //   left: 0px;
  // }
}
.footer {
  padding: 0px 0px 0px 0px;
  /*background: $color-primary;*/
  border-top: 1px solid #bbb;
  margin-top: -20px;
  position: fixed;
  left: 0px;
  bottom: 0;
  height: 50px;
}
</style>
