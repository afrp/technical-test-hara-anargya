<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="container-app">
        <div class="side-menu">
            <div class="side-menu-title">heylink.</div>
            <div class="box-menu">
                <router-link to="/" exact>Dashboard</router-link>
                <router-link to="/overview" exact>Overview</router-link>
            </div>
        </div>
        <div class="container-content">
            <div class="header">
                <div class="header-text">Conversion</div>
            </div>
            <div class="box-content-wrap">
                <slot></slot>
            </div>            
        </div>      
    </div>
</template>

<style scoped>
.container-app{
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    background: #F2F2F2;
}
.side-menu{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 281px;
    padding: 24px 8px;
    padding-left: 30px;
    box-shadow: 0px 0px 4px 0px #00000033;
    gap: 32px;
}

.container-content{
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    width: calc(100% - 281px);
}
.header{    
    padding: 16px 24px;
    min-height: 65px;
    display: flex;
    justify-content: space-between;        
    align-items: center;
    background: #FCFCFC;    
    box-shadow: 0px 0px 4px 0px #00000033;
}

.box-content-wrap{
    display: flex;
    padding: 24px;
    width: auto;
}

.header-text{    
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
}
.side-menu-title{
    font-size: 30px;
    font-weight: 800;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #152544;
}
.box-menu{
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 5px;
}
.box-menu a{
    width: 100%;
    display: flex;
    align-items: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: #424242;
    min-height: 46px;
    padding: 0 10px;
    border-radius: 8px;
}
.box-menu a.router-link-active, .box-menu a.router-link-exact-active {
   background-color: #E3F2FD;   
 }
</style>
