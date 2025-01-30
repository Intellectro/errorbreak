<script setup>
    import {onMounted, ref, useTemplateRef, computed, reactive} from "vue";
    import { CaCaretDown, CaCaretRight } from '@kalimahapps/vue-icons';
    import store from "../store";

    const borderRound = reactive({
        border: "0.5px solid hsla(263,8%,46%,.2)"
    });

    const borderHandler = computed(() => store.getters?.borderHandler);
    defineProps({
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: "What is ErrorBreak?"
        },
        content: {
            type: String,
            default: "ErrorBreak is the ultimate debugging platform for developers. Identify, analyze, and resolve code issues effortlessly with powerful tools designed to simplify troubleshooting and speed up development. Debug smarter, not harder!."
        }
    });
    
    const _toggle_ = ref({
        show: false,
        curentHeight: 0
    })

    const _height_ = useTemplateRef("getHeight");

    const handleToggle = () => {
        if (!_toggle_.value.show) {
            _toggle_.value.show = true;
            _toggle_.value.curentHeight = window.getComputedStyle(_height_.value).getPropertyValue("height");
            return;
        }
        _toggle_.value.show = false;
        _toggle_.value.curentHeight = 0;
    }
</script>

<template>
    <div class="h-fit" :style="borderRound" @click="handleToggle">
        <div class="font-bolder py-3 px-2 flex justify-between items-center" :style="borderHandler">
            <span class="text-[13px] md:text-[15px] font-[1000]">{{title}}</span>
            <CaCaretRight v-if="!_toggle_.show" />
            <CaCaretDown v-else />
        </div>
        <div :class="[_toggle_.show ? `h-[${_toggle_.curentHeight}] ` : 'h-0 overflow-hidden ', `transition-all duration-700 ease-linear`]" :style="borderHandler" aria-label="collapse-holder">
            <div ref="getHeight" class="h-fit text-[12px] md:text-base py-2 px-5">{{content}}</div>
        </div>
    </div>
</template>