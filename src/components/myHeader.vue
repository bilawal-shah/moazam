<template>
    <div class="col-12">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"
            :style="{width:(quoteCount/maxQuote)*100+'%'}">
                {{ quoteCount }}/{{ maxQuote }}
            </div>
        </div>
         
       
    </div>
 
    
</template>
<script>
export default {
    props:['quoteCount','maxQuote']
}
</script>
<style>
</style>