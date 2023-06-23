<template>
    <NavComp />
    <Timer />
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import Timer from '@/components/Timer.vue'
export default {
    name: "Dashboard",
    components: {
        NavComp,
        Timer
    }
}
</script>

<style lang="stylus" scoped>
</style>
