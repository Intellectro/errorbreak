<script setup>
    import store from "../store";
    import Navbar from "./Navbar.vue";

    import { computed, markRaw } from "vue";

    const _navbar_ = computed(() => {
    const currentNav = store.getters.showCurrentNav;
    return !currentNav.isNull ? markRaw(currentNav) : null;
});
</script>

<template>
  <component :is="_navbar_ || Navbar"></component>
</template>
