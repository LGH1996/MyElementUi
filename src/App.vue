<template>
    <div class="aside" onselectstart="return false">
        <menu-bar v-bind:datas="mebu.data" />
    </div>
    <div class="main">
        <router-view />
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import MenuBar from './components/MenuBar/MenuBar.vue'
import routeDate from './js/routeData'
const mebu = reactive(routeDate)
onMounted(()=>{
    console.log(mebu.data)
})
</script>

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
