<script setup>
import IconInOut from '../assets/icon/InOut.vue'
import IconArrowUp from '../assets/icon/ArrowUp.vue'

defineProps({
    title: String,
    total: String,
    percentage: String,
    revenue: String, // up, down, stable

})
</script>

<template>
  <div class="card box-card">
    <div class="flex justify-between w-full p-5">
        <div class="flex flex-col gap-1.5">
            <div class="value-title">{{title}}</div>
            <div class="value-number">{{total}}</div>
        </div>
        <div class="box-icon">
            <IconInOut />
        </div>
    </div>
    <div class="flex justify-between w-full p-5 bg-bottom">
        <div class="flex gap-1.5 items-center">
            <div class="text-percentage box-percentage" :class="{up: revenue == 'up', down: revenue == 'down'}">
                <IconArrowUp />
                <span>{{percentage}}%</span>
            </div>
            <div class="text-percentage">
                Last Month
            </div>
        </div>
        <div class="text-percentage" role="button">
            <b>View More</b>
        </div>
    </div>
  </div>
</template>

<style scoped>
.box-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    max-width: 347px;
    padding: 0;
    width: 100%;
    min-height: 143px;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 0px #00000033;
}
.bg-bottom{
    background:#F9FAFC;
    border-radius: 0 0 10px 10px;
}
.value-title{    
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    color: #727272;
    text-align: left;
}
.value-number{
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: #080808;
}
.box-icon{
    width: 34.53px;
    height: 34.53px;
    background: #F2F4F7;
    color: #817F7F;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-icon svg{
    width: 22.63px;
    height: auto;
}
.box-percentage{
    display: flex;
    align-items: center;
    gap: 2px;    
    font-weight: 600;
}

.text-percentage{    
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: #AAAAAA;
}
.box-percentage.up{
    color: #4CBF93;
}
.box-percentage.down{
    color: #EE7C85;
}
.box-percentage.down svg{
    transform: rotate(180deg);
}

.box-percentage svg{
    width: 15.57px;
    height: auto;
}
</style>
