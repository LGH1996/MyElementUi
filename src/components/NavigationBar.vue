<template>
    <el-menu default-active="0" :unique-opened="true" style="height: 100%;" :router="true">
        <el-scrollbar>
            <template v-for="item of routes.data">
                <el-sub-menu v-if="item.children" :index="item.path">
                    <template #title>
                        <svg-icon v-if="item.meta.icon != '#'" :name="item.meta.icon" />
                        <span style="margin-left: 10px;">{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item v-for="subItem of item.children" :index="subItem.path">
                        {{ subItem.meta.title }}
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path">
                    <svg-icon v-if="item.meta.icon != '#'" :name="item.meta.icon" />
                    <span style="margin-left: 10px;">{{ item.meta.title }}</span>
                </el-menu-item>
            </template>
        </el-scrollbar>
    </el-menu>
</template>

<script  setup>
import routeDate from '../js/routeData'
import { reactive } from 'vue'
let routes = reactive(routeDate)
</script>
  