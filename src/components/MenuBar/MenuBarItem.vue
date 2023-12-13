<template>
    <el-sub-menu v-if="data.children" :index="v4()">
        <template #title>
            <svg-icon :name="data.meta.icon" style="margin-right: 10px;" />
            {{ data.meta.title }}
        </template>
        <template ate v-for="sub of data.children">
            <menu-bar-item v-if="sub.children" :data="sub" />
            <el-menu-item v-else :index="sub.path">
                {{ sub.meta.title }}
            </el-menu-item>
        </template>
    </el-sub-menu>
    <el-menu-item v-else :index="data.path">
        <svg-icon :name="data.meta.icon" style="margin-right: 10px;" />
        {{ data.meta.title }}
    </el-menu-item>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { v4 } from 'uuid'
defineProps({
    data: {
        type: Object,
        require: true
    }
})
onMounted(() => {
    // console.log(aaa)
})
</script>