<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
    <div class="aside">
        <navigation-bar></navigation-bar>
    </div>
    <div class="main">
        <router-view />
    </div>
</template>

<style scoped>
.aside {
    background-color: antiquewhite;
    width: 25%;
    height: 100%;
}

.main {
    background-color: aquamarine;
    width: 75%;
    height: 100%;
}
</style>
