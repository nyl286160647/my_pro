<template>
  <div id="app">
    <img src="../assets/logo.png">
    <div>
      <el-row type="flex" justify="center" style="margin-top:20px;">
        <el-col :span="6"><el-input v-model="username" style="width:80%;" placeholder="userid"></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:20px;">
        <el-col :span="6"><el-input v-model="userpwd" show-password style="width:80%;" placeholder="password"></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:20px;">
        <el-col :span="24"><el-button type="primary" style="width:300rpx;" icon="el-icon-check" @click="login">Login</el-button></el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:20px;">
        <router-link id="nologin" to="/Home">no Login</router-link>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      username:"",
      userpwd:""
    }
  },
  methods:{
    login(){
      console.log("my username:"+this.username+" userpwd:"+this.userpwd);
      this.$message({
          message:'登录成功',
          type: 'success'
      });
      this.$router.replace('/Index');
      console.log("加载主页");
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
