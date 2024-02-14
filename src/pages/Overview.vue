<script setup>
import { ref, computed, watch } from 'vue';
import provinceData from '../assets/js/province.js';
import cityData from '../assets/js/city.js';

const provinces = ref(provinceData);
const cities = ref([]);
const selectedPropinsi = ref('');
const selectedCityId = ref('');
const propinsiByCityId = ref('');

const sortedProvinces = computed(() => {
    return provinces.value.slice().sort((a, b) => {
        return a.name.localeCompare(b.name) || a.id - b.id
    });
});

const getCityByPropinsiId = () => {
    cities.value = cityData.filter(city => city.provinsi_id === selectedPropinsi.value);
};

const getPropinsiByCityId = () => {
    const city = cityData.find(city => city.id === parseInt(selectedCityId.value));
    if (city) {
        const propinsi = provinces.value.find(prov => prov.id === city.provinsi_id);
        propinsiByCityId.value = propinsi ? propinsi.name : 'Propinsi tidak ditemukan';
    } else {
        propinsiByCityId.value = 'Kota tidak ditemukan';
    }
};

watch(selectedPropinsi, () => {
    getCityByPropinsiId();
});
</script>

<template>
    <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-col gap-3">
            <div class="title-text">Nama Propinsi Berdasarkan ID Kota</div>
            <div class="flex 2 gap-2">
                <input type="number" v-model="selectedCityId" class="btn-tbl" placeholder="Masukkan ID Kota">
                <button @click="getPropinsiByCityId">Cari</button>
            </div>                
            <p class="text-left" v-if="propinsiByCityId">{{ propinsiByCityId }}</p>
        </div>
        <div class="list-divider"></div>
        <div class="flex flex-col gap-3 w-full">
            <div class="title-text">
                Silahkan pilih provinsi untuk melihat Kab/Kota
            </div>
            <div class="flex gap-2 flex-wrap w-full">
                <div 
                    class="box-province"
                    :class="{selected : propinsi.id === selectedPropinsi}"
                    v-for="propinsi in sortedProvinces" 
                    :key="propinsi.id"
                    role="button"
                    @click="selectedPropinsi = propinsi.id"
                >
                    {{ propinsi.name }}
                </div>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="city-box" v-if="cities.length">
                <ul>
                    <li v-for="(city, index) in cities" :key="city.id">
                    {{ index+1 + '. ' + city.name }}
                    </li>
                </ul>
            </div>            
        </div>        
    </div>
</template>

<style scoped>
.box-province{
    padding: 10px 15px;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    border: 1px solid #00000033;
    background: #F9FAFC;
    border-radius: 8px;
}
.box-province.selected{
    background: #77bd8c;
}

.title-text{    
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    color: #727272;
    text-align: left;
}
.city-box{
    width: fit-content;
    text-align: left;
}

.list-divider{
    background: #727272;
    width: 100%;
    height: 2px;
}
</style>