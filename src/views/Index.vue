<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      users:[],  
      msg: 'hello index',
      isCollapse: true,
      //使用网络接口
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        }
    },
  created(){
    //   http请求,请求成功调用.then()函数，并将数据传给data
      /**
        this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
          console.log(data);//请求成功的数据
          this.users=data.body;//将data数据的的body内容复制给定义的users数据
        })
       */
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 首页布局样式-->
<style>
    
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
