<template>
    <div class="row">
    <form action="">
    <div class="col-8 mx-auto text-center">
        <h3>Add Quote</h3>
        <textarea name="quote" id="" cols="50" rows="5" v-model="quote"></textarea>
    </div>
    </form>
    <div class="col-12 text-center p-2">
        <button class="bg-dark btn-dark text-capitalize border-0 rounded-2 mb-4 py-3 px-5 fw-bold" @click.prevent="addnewquote">add quote</button>
    </div>
</div>
   
</template>
<script>
export default {
    data:function (){
        return {
            quote:'',
        }
    },
    methods: {
        addnewquote() {
          
            this.$emit('addnewquot',this.quote);
            this.quote=''
        }
    }
}
</script>
<style>
</style>