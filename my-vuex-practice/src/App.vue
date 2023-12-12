<template>
  <div id="app">
    <!-- <Counter @updated="counter+=$event" ></Counter>
    <Result :counter="counter"></Result> -->
    <Result ></Result>
    <hr>
    <Counter ></Counter>
    <hr>
    <anotherCounter></anotherCounter>

  </div>
</template>

<script>
import Counter from './components/myCounter.vue'
import Result from './components/myResult.vue'
import anotherCounter from './components/myAnothercounter.vue'

export default {

  // data() {
  //   return {
  //     counter : 0

  //   }
  // },
  components: {
    Counter,
    Result,
    anotherCounter

  }
}
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
