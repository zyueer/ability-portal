<template>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "window"
    }
</script>

<style scoped>
    .main{
        width: 100%;
        height: 100%;
    }
</style>