<script setup>
    import {screenshot1} from "../images";
    import { reactive } from 'vue';
    import store from '../store';

    const borderHandler = reactive(store.state?.borderHandler);
</script>

<template>
    <div class="w-full px-4 py-3 relative after:absolute after:left-[10%] after:top-[13%] after:h-[30px] after:w-[140px] after:backdrop-blur-3xl" :style="borderHandler">
        <img class="w-full" :src="screenshot1" :alt="screenshot1.split('/').pop().split('.')[0]">
    </div>
</template>