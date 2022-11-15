<template>
  <div id="app">
    <div class="hello">
    <h1>{{ msg }}</h1>
    <p>qiankun 主应用带过来的消息：{{microInfo}}</p>
    <button @click="handleActions">子应用按钮</button>
  </div>
  </div>
</template>

<script>
import actions  from './actions'
export default {
  name: 'App',
  components: {
  },
   data () {
    return {
      msg: 'VUE2-APP 子应用',
      microInfo: {}
    }
  },
  mounted() {
    // 注册观察者函数
    actions.onGlobalStateChange(state => {
      console.log('子应用的观察函数：', state)
      this.microInfo = state
    }, true)
  },
  methods: {
    handleActions() {
      actions.setGlobalState({
        msg: `子应用传递过来消息，${Math.random()}`
      })
    }}}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
