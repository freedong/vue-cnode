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
.main {
  width: 90%;
  max-width: 1400px;
  min-width: 380px;
  margin: 15px auto;
  min-height: 660px;
}
.return-top {
  width: 24px;
  color: gray;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  padding: 12px 0 12px 5px;
  position: fixed;
  right: 0;
  top: 139px;
  z-index: 20;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}


@media screen and (max-width: 979px) {
  .media-cancel-style {
    width: 100%;
  }
}

</style>
