<template>
    <div>
        <h1>Vuex2</h1>
        <p>
            Counter is : {{ counter }}
            <!-- Counter is : {{ doubleCounter }} -->
            
        </p>
        <p>
            No of Clicks : {{ StringCounter }}
        </p>
        
    </div>
    
</template>

<script>
// import {mapGetters} from 'vuex';
export default{
    // props :['counter']
    computed: {
        counter () {
            return this.$store.getters.doubleCounter
          
        },
        StringCounter () {
            return this.$store.getters.StringCounter

        }
    }
    // computed :
    //     mapGetters([
    //     'doubleCounter',
    //     'StringCounter'
    // ])
    

}
</script>


<style>
</style>