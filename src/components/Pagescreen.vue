<script setup>
    import { onMounted, onUnmounted, reactive, shallowRef, useTemplateRef } from 'vue';
    import Navbar from './Navbar.vue';
    import FixedNav from './FixedNav.vue';
    import store from '../store';

    const scrollbarHandler = reactive({
        scrollbarWidth: "thin",
    });
    
    const scrollController = useTemplateRef("scrollElem");
    const _fixer = shallowRef(Navbar);

    const handleScroll = (e) => {
        const elem = e.currentTarget;
        if (elem.scrollTop >= 120) {
            _fixer.value = FixedNav;
        }else {
            _fixer.value = Navbar;
        }
        store.dispatch("navHandler", _fixer.value);
    }

    onMounted(() => {
        scrollController.value?.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        scrollController.value?.removeEventListener("scroll", handleScroll);
    })
</script>

<template>
    <div class="w-screen h-screen bg-primary overflow-y-auto overflow-x-hidden" :style="scrollbarHandler" ref="scrollElem">
        <div class="h-fit w-full">
            <slot />
        </div>
    </div>
</template>