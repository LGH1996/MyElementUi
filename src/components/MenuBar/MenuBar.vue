<template>
    <el-menu default-active="0" style="height: 100%;" :router="true">
        <el-scrollbar>
            <template v-for="item of datas">
                <menu-bar-item :data="item"></menu-bar-item>
            </template>
        </el-scrollbar>
    </el-menu>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import MenuBarItem from './MenuBarItem.vue'
defineProps({
    datas: {
        type: Array,
        require: true
    }
})
onMounted(() => {
    // console.log(bbb )
})
</script>
  