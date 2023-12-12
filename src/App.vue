<template>
  <div class="container mt-5">
    <appheader :quoteCount="quotes.length" :maxQuote="maxQuote"></appheader>
    <appnewquote @addnewquot="addquote" ></appnewquote>

<gridquote :quotes="quotes" @quoteindex="deletequote"></gridquote>
<div class="row">
  <div class="col-sm-12 text-center">
    <div class="alert alert-info">Click on a quote to del it !</div>
  </div>
</div>

   
  </div>
</template>

<script>
import gridquote from './components/quoteGrid.vue'
import appnewquote from './components/newQuote.vue'
import appheader from './components/myHeader.vue'
export default {
  data: function() {
    return {
      quotes:['A man is known by the company he keeps.'],
      maxQuote:13

    }
  },
  methods: {
    addquote(quote) {
      if(this.quotes.length>=this.maxQuote){
        alert('Delete Quote First')
      }
      else if (quote!='') {
        this.quotes.push(quote);

      }
      

    },
    deletequote(index) {
      this.quotes.splice(index,1)
    }
  },
  components:{
    gridquote,
    appnewquote,appheader

  }
}



</script>

<style>

</style>
