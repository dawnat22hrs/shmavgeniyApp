<script setup>
</script>

<template>
<nav class="navbar">
    <div class="container flex">
        <RouterLink to="/" class="rl"><h2 class="link-title">Shmavgeniy</h2></RouterLink>
    </div>
</nav>
</template>

<style  lang="scss">
@import '../assets/scss/fonts.scss';
.navbar {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 200;
    border-bottom: .2px solid #e5e5e5;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
    display: flex;
    align-items: center;

    .rl {
        text-decoration: none;
    }
    .link-title {
        font-size: 3vh;
        margin: 0 auto;
        color: #000;
    }

    .navbar__name {
        font-size: 18px;
        color: #000;
    }
}

.flex {
    display: flex;
    align-items: center;
}
</style>