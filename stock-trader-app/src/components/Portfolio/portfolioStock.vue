<template>
    <div class="col-sm-12 col-md-4">
        <div class="card">
            <div class="card-header ">
              <h5 class="card-title">{{ stock.name }} <small>(Price: {{ stock.price |currency}} | Quantity : {{ stock.quantity }})</small></h5>
      
            </div>
            <div class="card-body d-flex justify-content-between align-items-centers">
                <div class="pull-left">
                    <input 
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger:Insufficiantstocks}"
                    >
                </div>
                <div class="pull-right">
                    <button
                    class="btn btn-danger"
                    @click="sellStocks"
                    :disabled="quantity <=0 || Insufficiantstocks"
                  
                     >Sell</button>
                </div>
            </div>
          </div>
    </div>
    
</template>
<script>
import { mapActions } from 'vuex';
export default {
    
    props :['stock'],
    data () {
        return {
            quantity: 0
        }
    },
    computed: {
        Insufficiantstocks(){
            return parseInt(this.quantity)>parseInt(this.stock.quantity) ;
        }

    },
    methods: {
        ...mapActions({
            placeSellorder: 'sellStock'
    }),
        sellStocks(){
            const order={
                stockId:this.stock.id,
                stockprice:this.stock.price,
                quantity: this.quantity


            };
            this.placeSellorder(order);
            this.quantity =0;
        }
       
    }
}

</script>
<style scoped>
.danger {
    border: 1px solid red;
}
</style>