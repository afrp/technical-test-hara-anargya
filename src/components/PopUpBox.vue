<script setup>

defineProps({
    data: Object,
})

const emit = defineEmits(['exit']);

</script>

<template>
    <div class="container-popup">
        <div class="overlay" @click="emit('exit')"></div>
        <div class="card box-card">    
            <div class="flex flex-col gap-3 relative w-full h-full">
                <div class="close-icon" role="button" @click="emit('exit')">X</div>
                <div class="flex gap-2.5 items-center">
                    <div class="box-img">
                        <img alt="User Profile" :src="data.profile_picture">
                    </div>
                    <div class="flex flex-col gap-2 items-start">
                        <div class="title-text">{{ data.first_name + " " + data.last_name }}</div>
                        <div class="subtitle-text ml-1">{{ data.email }}</div>
                        <div class="subtitle-text ml-1">{{ data.phone }}</div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 relative w-full h-full">
                    <div class="flex gap-5 ">
                        <div class="flex flex-col gap-1">
                            <label>Gender</label>
                            <div class="text-value">{{ data.gender }}</div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label>Job</label>
                            <div class="text-value">{{ data.job }}</div>
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <div class="flex flex-col gap-1">
                            <label>Address</label>
                            <div class="text-value">{{ data.street +', '+ data.city +', '+ data.state +', '+ data.country +', '+ data.zipcode}}</div>
                        </div>                    
                    </div>
                </div>
            </div>    
        </div>    
    </div>
</template>

<style scoped>
.box-card{
    display: flex;
    flex-direction: column;
    padding: 26px 15px 26px 36px;    
    width: 555px;
    min-height: 436px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 0px #00000033;
    border-radius: 10px;
}

.overlay{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #D9D9D980 ;
    top: 0;
    left: 0;
}
.container-popup{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.close-icon{
    position: absolute;
    right: 0;
    top: 0;
    color: #FA1212;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}
.box-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box-img img{
    height: 150px;
    width: auto;
}
.title-text{    
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: #080808;
}
.subtitle-text{    
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #080808;
}
.box-card label{    
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #686868;
}
.text-value{    
    font-size: 14px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #080808;
}
</style>
