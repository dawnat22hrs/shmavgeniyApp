<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="myModal" class="modal">
        <RouterLink to="/"><span class="close">&times;</span></RouterLink>
        <div class="modal-content">
            <p class="text">Не получается определить <br> геопозицию, <i style="background: #E8E8E8; font-family: cursive;">Bastard</i>.
                <br><br>Включи по братски<br>Настройки&#9658;Конфиденциальность и безопасность&#9658;Служба геолокации&#9658;Сайты Safari</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .modal {
        width: 70vw;
        height: 25vh;
        background: #E8E8E8;
        margin: 200px auto;
        border-radius: 10px;
        padding-top: 10px;
        border: 1px solid gray;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        .close {
            border-radius: 10px;
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            margin-right: 10px;
            margin-top: -5px;
            background: #E8E8E8;
        }

        .text {
            font-weight: 400;
            text-align: center;
            padding: 15% 5px 0 5px;
            background: #E8E8E8;
            line-height: 1.2;
            word-break: break-all;
        }
    }
</style>