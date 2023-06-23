<template>
    <NavComp />
    <ToDo />
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import ToDo from '@/components/ListComponent.vue';

export default {
    name: "Dashboard",
    components: {
        NavComp,
        ToDo
    },

}
</script>


