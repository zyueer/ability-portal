<template>
    <div id="login">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    #login{
        width: 100%;
        height: 100%;
    }
</style>