<template>
    <div> 
        <!-- <button class="btn btn-primary me-3 " @click="asynIncrement(100)">increment</button> -->
        <button class="btn btn-primary" @click=" asynDecrement(100 )">decrement</button>
    </div>

</template>
<script>
// import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {

    methods: {
        ...mapActions([
            'asynIncrement',
            'asynDecrement'
        ])
    }
    // methods:{
    //     increment(){
    //         // this.$emit('updated',1)
    //         // this.$store.state.counter++; 
    //         this.$store.commit('increment')
    //     },
    //     decrement(){
    //         // this.$emit('updated',-1)
    //         // this.$store.state.counter--;
    //         this.$store.commit('decrement')
    //     }
    // }

 }
</script>

<style>

</style> 