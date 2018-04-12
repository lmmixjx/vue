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
    <div class="content" slot="content" style="height: 100%">
      <el-container style="height: 100%">
        <el-header class="elheader" style="height: 100px">
          <el-row :gutter="20">
            <el-col :span="4">
              <span  class="img"  @click="handleToggleDrawer" ><img :src="img"/></span>
            </el-col>
            <el-col :span="16">
              <h1 style="color: white;font-size:31px;text-align: center">{{$store.state.pagetitle}}</h1>
            </el-col>
            <el-col :span="4">
              <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner"><img :src="img2" style="height: 50px;margin-top: 25px" /></span>
                <
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>我的消息</el-dropdown-item>
                  <el-dropdown-item >设置</el-dropdown-item>
                  <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer >Footer</el-footer>
      </el-container>
    </div>
  </vue-drawer-layout>

  </div>
</template>

<script>
import Vue from 'vue'
import DrawerLayout from 'vue-drawer-layout'
import { Col, Container } from 'element-ui'

Vue.use(DrawerLayout)
Vue.use(Container)
Vue.use(Col)

export default {
  data () {
    return {
      img: require('@/assets/start.png'),
      img2: require('@/assets/profile.png'),
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

  html, body{ margin:0; height:100%; }
  .elcontainer{
    height: 100%;
  }
  .elheader {
    padding: 0px 0px 0px 0px;
    /*position: absolute;*/
    /*line-height: 100px;*/
    height: 20%;
    background: $color-primary;
    .userinfo-inner {
      cursor: pointer;
      color:#fff;
      font-size: 20px;
    }
  }
  .colheader {
    margin: 0px;
    position: absolute;
    width: 100%;
    height: 100px;
    line-height: 60px;
    color: #fff;
  }
  .container {
    padding: 0px 0px 0px 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  .header {
    margin: 0px;
    position: absolute;
    width: 100%;
    height: 100px;
    line-height: 60px;
    background: $color-primary;
    color:#fff;
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  .userinfo-inner {
    cursor: pointer;
    color:#fff;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  }
  }
  .logo {
  //width:230px;
    height:60px;
    font-size: 22px;
    padding-left:20px;
    padding-right:20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;
  img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .txt {
    color:#fff;
  }
  }
  .logo-width{
    width:230px;
  }
  .logo-collapse-width{
    width:60px
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  }
  .main {
    display: flex;
  // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  aside {
    flex:0 0 230px;
    width: 230px;
  // position: absolute;
  // top: 0px;
  // bottom: 0px;
  .el-menu{
    height: 100%;
  }
  .collapsed{
    width:60px;
  .item{
    position: relative;
  }
  .submenu{
    position:absolute;
    top:0px;
    left:60px;
    z-index:99999;
    height:auto;
    display:none;
  }

  }
  }
  .menu-collapsed{
    flex:0 0 60px;
    width: 60px;
  }
  .menu-expanded{
    flex:0 0 230px;
    width: 230px;
  }
  .content-container {
  // background: #f1f2f7;
    flex:1;
  // position: absolute;
  // right: 0px;
  // top: 0px;
  // bottom: 0px;
  // left: 230px;
    overflow-y: scroll;
    padding: 20px;
  .breadcrumb-container {
  //margin-bottom: 15px;
  .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  .breadcrumb-inner {
    float: right;
  }
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  }
  }
  }
</style>
