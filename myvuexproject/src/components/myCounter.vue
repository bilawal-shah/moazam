<template>
    <div>
        <button class="btn btn-primary me-3 " @click="increment">increment</button>
        <button class="btn btn-primary" @click="decrement">decrement</button>
     
    </div>

</template>
<script>
export default {
    methods:{
        increment(){
            // this.$emit('updated',1)
            this.$store.state.counter++;
        },
        decrement(){
            // this.$emit('updated',-1)
            this.$store.state.counter--;
        }
    }

}
</script>

<style>
</style>