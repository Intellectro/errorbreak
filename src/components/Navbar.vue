<script setup>
    import {logo2} from "../images/index.js";
    import store from "../store/index.js";
    import { reactive, ref } from 'vue';

    const _items_ = ref(store.state);

    const borderHandler = reactive(store.state.borderHandler);

    const {routerLinks} = _items_.value;
</script>

<template>
    <div class="w-full h-fit" :style="borderHandler">
        <div class="w-full md:w-[80%] mx-auto h-auto py-4 px-5 flex justify-between items-center backdrop-blur-2xl bg-transparent relative z-[99]">
            <div class="flex gap-x-1 md:gap-x-2 items-center justify-center">
                <img :src="logo2" class="w-7 h-7 object-center object-contain" :alt="logo2.split('/').pop().split('.')[0]">
                <span class="text-slate-100 text-[14px] md:text-base font-[1000]">{{"<ErrorBreak />"}}</span>
            </div>
            <div class="hidden md:flex items-center gap-x-4">
                <div v-for="({_id, _path, _name}) in routerLinks" :key="_id">
                    <router-link :to="_path" class="text-slate-100 text-[12px] font-bold !font-mono capitalize">{{_name}}</router-link>
                </div>
            </div>
            <router-link to="#">
                <button class="bg-slate-100 text-[13px] md:text-[14px] font-bold py-2 px-3 md:px-5 rounded-full">
                    Get Started&ThickSpace; >
                </button>
            </router-link>
        </div>
    </div>
</template>