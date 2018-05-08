<template>
  <el-col class="container">
    <el-menu mode="horizontal" class="menu">
      <el-submenu index="0">
        <template slot="title">产品版本选择</template>
        <el-submenu index="project.project_name"  v-for="project in versionlist" :key="project.project_name">
          <template slot="title">{{project.project_name}}</template>
          <el-menu-item index="version.version_name" v-for="version in project.versionlist" :key="version.version_name">{{version.version_descript}}</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <el-row class="information">
      <el-row :span="24" class="informationTitle">
        <el-col :span="1" class="maininfo">
          提交概况
        </el-col>
        <el-col :span="23" class="num">
          <span :span="24">
            <el-col :span="1">
              {{todaycommit}}
            </el-col>
            <el-col :span="23" class="des">
              今日提交数
            </el-col>
          </span>
        </el-col>
      </el-row>
      <el-row class="informationPanel">
        <el-row v-for="sql in sqllist" :key="sql.uuid">
          <!-- {{ sql.version_name }} -->
          <el-row :span="24" class="card">
            <el-col class="commitinfo">
             <span class="userinfo-inner">
               Commits on &nbsp;&nbsp; {{sql.crttime}} &nbsp;&nbsp;&nbsp;  {{sql.crtby}}
             </span>
            </el-col>
            <el-card shadow="always" >
              <el-row :span="24">
                <el-col :span="18">
                  <el-row :span="24" class="carddetail">
                    <el-col :span="4">
                      <el-col :span="8" class="title">
                        产品
                      </el-col>
                      <el-col :span="16" class="descript">
                        {{sql.project_name}}
                      </el-col>
                    </el-col>
                    <el-col :span="4">
                    <el-col :span="8" class="title">
                        版本
                      </el-col>
                      <el-col :span="16" class="descript">
                        {{sql.version_name}}
                      </el-col>
                    </el-col>
                    <el-col :span="6">
                      <el-col :span="8" class="title">
                        测试库执行时间
                      </el-col>
                      <el-col :span="16" class="descript">
                        <!-- {{sql.exectime}} -->
                        <span v-if="sql.exectime > 100" class="exectime">
                          {{sql.exectime}}ms
                        </span>
                        <span v-else>
                          {{sql.exectime}}ms
                        </span>
                      </el-col>
                    </el-col>
                  </el-row>
                  <el-row class="carddetail">
                    <el-col :span="4">
                      <el-col :span="8" class="title">
                        SQL类型
                      </el-col>
                      <el-col :span="16" class="descript">
                        {{sql.type}}
                      </el-col>
                    </el-col>
                    <el-col :span="20">
                    <el-col :span="1" class="title">
                        涉及表
                      </el-col>
                      <el-col :span="23" class="tables">
                        {{sql.involvetables}}
                      </el-col>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6" class="btnPanel">
                  <el-button class="btn" title="完整SQL">
                    <img :src="img" class="btnimage"/>
                  </el-button>
                </el-col>
              </el-row>
              <hr class="hr"/>
              <el-row class="carddetail">
                <el-col :span="1" class="title">
                    SQL
                  </el-col>
                  <el-col :span="23" class="sql">
                    <span v-html="sql.sql">{{sql.sql}}</span>
                  </el-col>
              </el-row>
            </el-card>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </el-col>
  <!-- <iframe src="http://xmsdp.test.foxhis.com/" frameborder="0" width="100%" height="100%"/> -->
</template>

<script>
import { getHomeinfo, getAvailableVersion } from '@/service/getData'

export default {
  data () {
    return {
      sqllist: [],
      versionlist: [],
      selectoption: '全部版本',
      todaycommit: 27,
      img: require('@/assets/sqldetail.png')
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    async getinfomation () {
      await getHomeinfo().then((res) => {
        this.sqllist = res.sqllist
        for (var i = 0; i < this.sqllist.length; i++) {
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('INSERT', 'gm'), '<span style="color: blue;">INSERT</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('insert', 'gm'), '<span style="color: blue;">INSERT</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('from', 'gm'), '<span style="color: blue;">FROM</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('FROM', 'gm'), '<span style="color: blue;">FROM</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('where', 'gm'), '<span style="color: blue;">WHERE</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('WHERE', 'gm'), '<span style="color: blue;">WHERE</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('delete', 'gm'), '<span style="color: blue;">DELETE</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('DELETE', 'gm'), '<span style="color: blue;">DELETE</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('values', 'gm'), '<span style="color: blue;">VALUES</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('VALUES', 'gm'), '<span style="color: blue;">VALUES</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('INTO', 'gm'), '<span style="color: blue;">INTO</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('into', 'gm'), '<span style="color: blue;">INTO</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('null', 'gm'), '<span style="color: blue;">NULL</span>')
          this.sqllist[i].sql = this.sqllist[i].sql.replace(new RegExp('NULL', 'gm'), '<span style="color: blue;">NULL</span>')
          var slice = this.sqllist[i].sql.split("'")
          console.log(slice)
          var convertsql = ''
          for (var s = 0; s < slice.length; s++) {
            if (s % 2 === 1) {
              convertsql += '<span style="color: Red;">' + '\'' + slice[s] + '\'' + '</span>'
            } else {
              convertsql += slice[s]
            }
          }
          this.sqllist[i].sql = convertsql
        }
      })
    },
    async getversion () {
      await getAvailableVersion().then((res) => {
        this.versionlist = res.projects
        console.log(this.versionlist[0].versionlist[0].version_name)
      })
    }
  },
  mounted () {
    this.getinfomation()
    this.getversion()
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .menu {
    height: 60px;
  }
  .information {
    height: 100%;
    .informationTitle {
      height: 60px;
      margin-left: 20px;
      .maininfo {
        margin-top: 20px;
      }
      .num {
        margin-top: 7px;
        font-size: 30px;
        text-align: right;
        .des {
          font-size: 5px;
          text-align: left;
          text-indent: 10px;
          margin-top: 20px;
          color: gray;
        }
      }
    }
    .informationPanel {
      height: calc(100% - 60px - 60px);
      overflow-y: scroll;
      font-size: 8px;
      padding-left: 39px;
      .commitinfo {
        font-size: 16px;
        color: gray;
        padding-bottom: 10px;
        .userinfo-inner {
          font-size: 14px;
        }
      }
      .card {
        padding: 0px 10px 5px 10px;
        .hr {
          height: 1px;
          border: none;
          border-top: 1px dashed lightgray;
        }
        .btnPanel {
          float: right;
          text-align: right;
          .btn {
            height: 32px;
            width: 32px;
            padding: 0px 0px 0px 0px;
            margin-top: 0px;
            border: 0px;
            .btnimage {
              height: 32px;
              width: 32px;
            }
          }
        }
        .carddetail {
          padding-bottom: 5px;
          .title {
            color: gray;
          }
          .tables {
            color: cornflowerblue;
            text-indent: 28px;
          }
          .descript {
            // text-indent: 20px;
            color: cornflowerblue;
            .exectime {
              color: red;
              font-weight: bold;
            }
          }
          .sql {
            // color: red;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .informationPanel::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 25px;
      z-index: -1;
      display: block;
      width: 2px;
      content: "";
      background-color: #eff1f3;
    }
  }
}
</style>
