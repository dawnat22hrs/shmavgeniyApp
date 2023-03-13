<script setup lang="ts">
import NavigationMenu from '../components/NavigationMenu.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
<main>
    <NavigationMenu/>
    <div class="hero-content">
        <h2 class="title">Welcome bastard</h2>
        <div class="btn__hero-content">
            <RouterLink to="/map"><button class="btn">Get started</button></RouterLink>
        </div>
    </div>
</main>
</template>

<style scoped lang="scss">

.hero-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50%;//100px;

    .title {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 400%;//10vh;
      letter-spacing: 10px;
      text-align: center;
    }

    .btn__hero-content {
        margin-top: 200px;

        .btn {
	        display: inline-block;	
	        box-sizing: border-box;
            margin: 0 15px 15px 0;
            padding: 0 25px;
            border: 1px solid #fff;
            outline: none;
            border-radius: 50px;
            height: 46px;
            font-size: 14px;
            line-height: 46px;
            text-decoration: none;
            font-weight: 300;
            background-color: #fff;
            color: #000;
            cursor: pointer;
            box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
            appearance: none;
            user-select: none;
            vertical-align: top;
            touch-action: manipulation;  
	        transition: box-shadow 0.2s;
        }
        .btn:focus-visible {
	        border: 1px solid #4c51f9;
	        outline: none;
        }
        .btn:hover {
	        transition: all 0.2s;
	        box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
        }
        .btn:active {
	        background-color: #808080;
        }
        .btn:disabled {
	        background-color: #eee;
	        border-color: #eee;
	        color: #444;
	        cursor: not-allowed;
        }
    }
}
</style>