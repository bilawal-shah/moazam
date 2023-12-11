<template>
    <div class="row p-4 gy-5">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>

    </div>
</template>
<script>
import stock from './myStock.vue'
export default {
    // data() {
    //     return {
    //         stocks:[
    //            {id: 1 , name:'BMW', price: 100 },
    //            {id: 2 , name:'apple', price: 200 },
    //            {id: 3 , name:'twitter', price: 300 },
    //            {id: 4 , name:'Google', price: 400 }
    //         ]
    //     }
    // },
    components:{
        appStock: stock
    },
    computed:{
        stocks() {
            return this.$store.getters.stocks;
        }

    }
}

</script>
