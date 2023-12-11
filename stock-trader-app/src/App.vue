<template>
 <div class="container">
  <appHeader></appHeader>
    
  <router-view></router-view>
  

 </div>
</template>

<script>
import Header from './components/myHeader.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header  
  },
  created() {
    this.$store.dispatch('initsetStocks')
  }
}
</script>

<style>
body{
  padding: 30px;
}
 
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>  
