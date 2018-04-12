<template>
  <div>

    <vue-drawer-layout
      ref="drawerLayout"
      :drawer-width="800"
      :enable="true"
      :animatable="true"
      :z-index="0"
      :drawable-distance="Math.floor(800/3)"
      :content-drawable="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.4]"
      @mask-click="handleMaskClick">
      <div class="drawer" slot="drawer">
        <div class="text">This is drawer</div>
        <div class="hello">
          <h2>Essential Links</h2>
        </div>
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
                  <b>{{$store.state.pagetitle}}</b>
                </el-col>
                <el-col :span="3" class="userinfo">
                  <el-dropdown trigger="hover">
                  <span class="el-dropdown-link userinfo-inner">
                    <img :src="img2" class="image"/>
                    {{sysusername}}
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
              <el-row style="height: 100%;">
                <el-col style="">
                  <router-view />
                </el-col>
              </el-row>
            </div>
          </el-main>
          <el-footer>
            <el-row>
              <el-col class="footer">
                Footer
              </el-col>
            </el-row>
          </el-footer>
        </el-container>
      </div>
    </vue-drawer-layout>

  </div>
</template>

<script>
import Vue from 'vue'
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout)

export default {
  data () {
    return {
      img: require('@/assets/appstore.png'),
      img2: require('@/assets/un.png'),
      sysusername: '22'
    }
  },
  methods: {
    handleMaskClick () {
      this.$refs.drawerLayout.toggle(false)
    },
    handleToggleDrawer () {
      this.$refs.drawerLayout.toggle()
    },
    gettest () {
      console.log('gettest')
    }
  },
  mounted () {
    let obj = JSON.parse(sessionStorage.getItem('sqlmanageruser'))
    this.sysusername = obj.name
  }
}

</script>

<style scoped lang="scss">
  @import '~scss_vars';

  .container{
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
      .userinfo{
        height: 60px;
        line-height: 60px;
        text-align: right;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color:#fff;
          font-size: 16px;
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
    bottom: 30px;
    left: 0px;
    overflow-y: scroll;
    padding: 20px;
  }
  .footer {
    padding: 0px 0px 0px 0px;
    background: $color-primary;
    margin-top: -20px;
    position:fixed;
    left: 0px;
    bottom:0;
    height:30px;
  }
</style>
