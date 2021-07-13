<template>
  <div id="app">
    <template v-if="thisRouter === 'index'">
      <Menu></Menu>
    </template>
    <template v-else>
      <OMenu></OMenu>
    </template>
    <router-view></router-view>
    <Footer/>
    <Login/>
    <Register/>
  </div>
</template>
<script>
import Menu from './components/menu.vue'
import OMenu from './components/otherMenu.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login'
import Register from './components/register'

export default {
  name: 'App',
  components: {
    Menu,
    OMenu,
    Footer,
    Login,
    Register
  },
  computed:{
    thisRouter: function(){
      if (this.$route.path == '/') {
        return 'index'
      } else {
        return 'other'
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
