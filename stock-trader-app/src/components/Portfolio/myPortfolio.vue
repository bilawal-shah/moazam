<template>
    <div class="row p-4 gy-5">
 <app-stock v-for="stock in stocks" :key="stock.id"  :stock="stock"></app-stock>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import stock from './portfolioStock.vue'
export default {
    computed : {
        ...mapGetters({
            stocks: 'stockPortfolio'
        } )
    },
    components:{
        appStock: stock
    }
}


</script>