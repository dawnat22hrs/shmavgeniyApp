<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import colorData from '../colorData.json'

//state
const colorsLevel = ref(colorData) // array all color
const currDistanse = ref(0)
const distanseIzhToMsc = 969; // maybe other value
const latitudEnd = 56.8498;
const longitudeEnd = 53.2045;
const color = ref('')

//methods
// Get position of the device, that using your site
const getCurrentPosition = () => {

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // our method
            
        // get json file 
            
        // deserilaze file
        //JSON.parse()

        currDistanse.value = distance(latitude, longitude, latitudEnd,longitudeEnd);
        const indexColor = Math.round(currDistanse.value / (distanseIzhToMsc / colorsLevel.value.length))
        color.value = colorsLevel.value[indexColor]['color'] as string; 
        console.log(colorsLevel.value[indexColor]['id'])
    }

    const error = () => {
        //TODO: if don't get position
        console.log('Не могу найти тебя') 
    }

    navigator.geolocation.getCurrentPosition(success, error)
}

// Get from degrees to radians
const convertDeg2rad = (num: number) => {
    return num * Math.PI / 180;
}

// Get distanse between two coordinates to kilometers.
const distance = (lat_1: number, lon_1:number, lat_2:number, lon_2:number) => {

    const radius_earth = 6371; // Радиус Земли

    const lat_1R = convertDeg2rad(lat_1),
        lon_1R = convertDeg2rad(lon_1),
        lat_2R = convertDeg2rad(lat_2),
        lon_2R = convertDeg2rad(lon_2);

    const d = 2 * radius_earth * Math.asin(Math.sqrt(Math.sin((lat_2R - lat_1R) / 2) ** 2 + Math.cos(lat_1R) * Math.cos(lat_2R) * Math.sin((lon_2R - lon_1R) / 2) ** 2));

    return Math.round(d*10000)/10000; // round to 2 number after comma
}

const getColorByPosition = (): string => {
    getCurrentPosition()  
    return ""
}

const getColor = () => {
    getColorByPosition();
    return color.value
}
</script>

<template>
<main class="main" :style="{background: getColor()}">
        <RouterLink to="/" class="rl"><h2 class="link-title" :style="{background: getColor()}">Shmavgeniy</h2></RouterLink>
        <p class="distance__map-block" :style="{background: getColor()}">{{ currDistanse }} km</p>
        <!--<p v-for="colors in colorsLevel"> {{ colors }}</p>-->
</main>
</template> 

<style scoped lang="scss">
.main {
    width: 100vw;
    height: 100vh;

    .rl {
        text-decoration: none;
        display: block;
        width: 184px;
    }
    .link-title {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 200;
        font-size: 5vh;
        color: #000;
        width: 184px;
        padding: 20px 0 0 15vw;
    }

    .distance__map-block {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        position: absolute;
        left: 80vw;
        top: 90vh;
    }
}
</style>