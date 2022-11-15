<template>
  <div class="about">
    <h1>{{ mmm }}</h1>
    <button @click="handleActions">主应用通信按钮</button>
  <div id="FaTher"></div>

  </div>
</template>

<script>
import actions from './actions'
export default {
  data(){
return {
  mmm: ''
}
  },
  mounted() {
    // 注册一个观察者函数
    // state 是变更后的状态，prevState 是变更前的状态
    const that = this
    actions.onGlobalStateChange((state, prevState) => {
      that.mmm  = state
      console.log("主应用观察者，改变前的值", prevState)
      console.log("主应用观察者，改变后的值", state)
    })
  },
  methods: {
    handleActions() {
      actions.setGlobalState({
        msg: `主应用消息msg，${Math.random()}`
      })
    }
  }
}
</script>
