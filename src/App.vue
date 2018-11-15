<template>
  <div id="app">
    <!-- 顶部导航栏组件 -->
    <navbar></navbar>
    <!-- 内容区跳转路由 -->
    <div class="main media-cancel-style">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 底部栏组件 -->
    <footers></footers>
    <!-- 回到顶部组件 -->
    <transition name="fade">
      <div class="return-top" v-show="showRetrunTop" @click="returnTop">
        回到顶部
      </div>
    </transition>
  </div>
</template>

<script>


import navbar from './components/Navbar.vue'
import footers from './components/Footer.vue'


export default {
  name: 'App',
  components:{
    navbar,
    footers
  },
  data(){
    return{
      showRetrunTop:false,
    }
  },
  methods:{
    returnTop(){},
  }
}
</script>

<style>

</style>
