<template>
    <div class="col-sm-12 col-md-4">
        <div class="card">
            <div class="card-header ">
              <h5 class="card-title">{{ stock.name }} <small>(Price: {{ stock.price | currency }})</small></h5>
      
            </div>
            <div class="card-body d-flex justify-content-between align-items-centers">
                <div class="pull-left">
                    <input 
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger:Insufficiantfunds}"
                    >
                </div>
                <div class="pull-right">
                    <button
                    class="btn btn-success"
                    @click="buyStock"
                    :disabled="quantity <=0 || Insufficiantfunds">Buy</button>
                </div>
            </div>
          </div>
    </div>
    
</template>
<script>
export default {
    
    props :['stock'],
    data () {
        return {
            quantity: 0
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        },

        Insufficiantfunds(){
            return this.quantity*this.stock.price > this.funds;
        }

    },
    methods: {
        buyStock() {

            const order={

                stockId:    this.stock.id,
                stockprice: this.stock.price,
                stockname:  this.stock.name,
                quantity:   this.quantity
            }
            console.log(order)
            this.$store.dispatch('buyStocks',order)
            this.quantity=0;

        }
    }
}

</script>
<style scoped>
.danger {
    border: 1px solid red;
}
</style>