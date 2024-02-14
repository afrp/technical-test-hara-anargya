<script setup>
import InfoBox from '../components/InfoBox.vue'
</script>

<template>
    <div class="container-home">
        <div class="flex flex-wrap w-full gap-4">
            <InfoBox title="Pending" total="2.480,30" percentage="2,15" revenue="up"/>
            <InfoBox title="Paid" total="84.310" percentage="1,10" revenue="down"/>
            <InfoBox title="Rejected" total="12.155" percentage="2,15" revenue="up"/>
        </div>        
    </div>    
    
</template>

<style scoped>
.container-home{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>