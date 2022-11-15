<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>User {{ $route.params.id }}</div>
    <div id="main">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
   props: ['bbb', 'aaa'],
    created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
      () => this.$route.params,
       (toParams, previousParams) => {
        console.log(toParams, previousParams);
        this.fetchData()

        // 对路由变化做出响应...
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    )
  },
  methods:{
    fetchData(){
      console.log('get');
    }
  }
  
}
</script>
<style lang="less">
.about{
  #main{
height: 100px;
    overflow: auto;
  }
      
}
</style>