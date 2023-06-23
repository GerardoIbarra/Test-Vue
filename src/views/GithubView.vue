<template>
    <NavComp />
    <Github />
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import Github from '@/components/Git.vue'
export default {
    name: "Dashboard",
    components: {
        NavComp,
        Github
    }
}
</script>

<style lang="stylus" scoped>
</style>
