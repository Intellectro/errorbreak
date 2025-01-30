<script setup>
    import FaqContent from "./FaqContent.vue";
    import store from "../store";
    import { computed } from "vue";

    const faqData = computed(() => store.getters?.faqHandler);
</script>

<template>
    <div class="w-full bg-primary text-slate-100 relative z-9">
        <div class="w-full px-5 md:px-3 md:w-[65%] py-10 mx-auto">
            <div class="flex flex-col gap-y-4">
                <div class="text-2xl text-center font-bold">Frequently Asked Questions</div>
                <div class="flex flex-col">
                    <FaqContent v-for="(data, index) in faqData" :key="index" v-bind="data" />
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[400px] -z-9 h-[400px] rounded-full bg-slate-300/10 blur-[200px]"></div>
    </div>
</template>