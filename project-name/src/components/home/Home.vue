<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <span class="el-dropdown-link userinfo-inner"><img :src="img"/></span>

    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      img: require('@/assets/start.png')
    }
  },
  methods: {
    gettest () {
      console('gettest')
    }
  }
}
</script>
