<template>
    <div class="row gy-3 mb-3">
<wonderfulQuote v-for="(quote,index) in quotes" :key="quote.index"  @click.native="getindex(index)">{{ quote}}</wonderfulQuote>
    </div>
    
</template>
<script>
import wonderfulQuote from './wonderfulQuote.vue'
export default {
    props:['quotes'],
    components:{
        wonderfulQuote
    },
    methods:{
        getindex(index){
            this.$emit('quoteindex',index)
        }
     
    }

} 
</script>
<style>

</style>