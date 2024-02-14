<script setup>
import InfoBox from '../components/InfoBox.vue'

import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);
const selectedUser = ref({});    

function formatDate(dateString) {
  const originalDate = new Date(dateString);
  
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1; // Month dimulai dari 0 (Januari adalah bulan 0)
  const year = originalDate.getFullYear();

  const addLeadingZero = value => (value < 10 ? `0${value}` : value);

  const formattedDay = addLeadingZero(day);
  const formattedMonth = addLeadingZero(month);
  const formattedYear = year;

  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
}

onMounted(async () => {
    try {
    const resp = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
    data.value = resp.data;
    selectedUser.value = resp.data.users[1];
    // console.log('masuk', resp.data.users[1]);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
});


</script>

<template>
    <div class="container-home">
        <div class="flex w-full gap-4">
            <InfoBox title="Pending" total="2.480,30" percentage="2,15" revenue="up"/>
            <InfoBox title="Paid" total="84.310" percentage="1,10" revenue="down"/>
            <InfoBox title="Rejected" total="12.155" percentage="2,15" revenue="up"/>
        </div>
        <div class="box-table">
            <div class="title-table">User List</div>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th class="bold">ID</th>
                        <th class="bold">User</th>
                        <th class="bold">Date Of Birth</th>
                        <th class="bold">Email</th>
                        <th class="bold">Job</th>
                        <th class="bold">Country</th>
                        <th class="bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in data.users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td class="flex items-center gap-1.5">
                            <div class="box-img">
                                <img alt="User Profile" :src="user.profile_picture">
                            </div>
                            <span class="semi-bold text-black">{{ user.first_name + ' ' + user.last_name }}</span>
                        </td>
                        <td>{{ formatDate(user.date_of_birth) }}</td>
                        <td class="semi-bold"><span class="text-black">{{ user.email }}</span></td>
                        <td>{{ user.job }}</td>
                        <td class="semi-bold text-black"><span class="text-black">{{ user.country }}</span></td>
                        <td>Action Button</td>
                    </tr>
                </tbody>
            </table>
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
.box-table{
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background: #FFFFFF;
}
.title-table{
    width: 100%;
    padding: 25px 28px 18px;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
}

.box-table table{
    text-align: left;
}

.box-table table tr th{        
    border-top: 1px solid #00000033;
    border-bottom: 1px solid #00000033;
}

.box-table table tbody tr{            
    border-bottom: 1px solid #00000033;
}

.box-table table tbody tr:last-child{
    border-bottom: none;
}

.box-table table tr th, .box-table table tr td{
    padding: 18px 20px;
}

.box-table table tr th, .box-table table tr td{
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #7C7C7C;
}
.box-img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box-img img{
    height: 24px;
    width: auto;
}
</style>