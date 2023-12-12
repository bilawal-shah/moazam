<template>
    <div>
        <h1>Vuex</h1>
        <p>
            Counter is : {{ counter }}
        </p>
        
    </div>
    
</template>

<script>
export default{
    // props :['counter']
    computed: {
        counter () {
            return this.$store.getters.doubleCounter
          
        }
    }
}
</script>


<style>
</style>