<template>
  <div class="app-container"> 
  <Navbar/> 
  <router-view :key="$route.path"/>
   </div>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>


<style>
.app-container{
  min-height: calc(100vh - 62px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}
</style>
