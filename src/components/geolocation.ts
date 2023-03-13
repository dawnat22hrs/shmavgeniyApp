import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import colorIzhToEnd from '../colorIzhevskToEnd.json'
import colorMscToIzh from '../colorMoscowToIzhevsk.json'

//state
const colorsLevelMsc = ref(colorMscToIzh) // array all color
const colorsLevelIzh = ref(colorIzhToEnd)
const radiusIzh = 20;
const currDistanse = ref(0)
const distanseIzhToMsc = 969; // maybe other value
const latitudEnd = 56.8498;
const longitudeEnd = 53.2045;
const color = ref('')

//methods
// Get position of the device, that using your site
const getCurrentPosition = () => {

    const success = (position) => {
        if(currDistanse.value == distance(position.coords.latitude, position.coords.longitude, latitudEnd,longitudeEnd)){
            console.log('watchPosition.return')
            return;
        }

        currDistanse.value = distance(position.coords.latitude, position.coords.longitude, latitudEnd,longitudeEnd);
        if (currDistanse.value > radiusIzh){
            const indexColor = Math.round(currDistanse.value / (distanseIzhToMsc / colorsLevelMsc.value.length))
            color.value = colorsLevelMsc.value[indexColor].color; 
            console.log(indexColor)
        } 
        else {
            console.log(currDistanse.value)
            const indexColor = Math.round(currDistanse.value / (radiusIzh / colorsLevelIzh.value.length))
            color.value = colorsLevelIzh.value[indexColor].color; 
            console.log(indexColor)
        }
        console.log('watchPosition.suc')
    }

    const error = () => {
        //TODO: if don't get position
        console.log('watchPosition.error') 
    }

    navigator.geolocation.watchPosition(success, error, {maximumAge: 0, timeout: 300, enableHighAccuracy: true})
    console.log('watchPosition.call')
}

// Get from degrees to radians
const convertDeg2rad = (num: number) => {
    return num * Math.PI / 180;
}

// Get distanse between two coordinates to kilometers.
const distance = (lat_2:number, lon_2:number, lat_1: number, lon_1:number) => {

    const radius_earth = 6371.1; // Радиус Земли

    const lat_1R = convertDeg2rad(lat_1),
        lon_1R = convertDeg2rad(lon_1),
        lat_2R = convertDeg2rad(lat_2),
        lon_2R = convertDeg2rad(lon_2);

    const d = 2 * radius_earth * Math.asin(Math.sqrt(Math.sin((lat_2R - lat_1R) / 2) ** 2 + Math.cos(lat_1R) * Math.cos(lat_2R) * Math.sin((lon_2R - lon_1R) / 2) ** 2));

    return Math.round(d*1000)/1000; // round to 3 number after comma
}

const getColorByPosition = () => {
    getCurrentPosition()  
}

const getColor = () => {
    return color.value
}

const getColorBar =(coef: number) => {
    let rgb = hexToRgb(color.value);
    rgb = {r: Number(rgb?.r) -coef, g: Number(rgb?.g)-coef, b: Number(rgb?.b)-coef,}
    return rgbToHex(rgb.r,rgb.g,rgb.b);
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}