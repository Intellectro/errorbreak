<script setup>
    import { onMounted, reactive, useTemplateRef } from 'vue';
    import { BsDiscord } from '@kalimahapps/vue-icons';
    import { AkPlay } from '@kalimahapps/vue-icons';
    import { useMotion } from '@vueuse/motion';

    const rainbowStyle = reactive({
	    background: "linear-gradient(90deg,#02fcef70,#ffb52b70 50%,#a02bfe70)"
    });

    const _circleOne_ = useTemplateRef("circleOne");
    const _circleTwo_ = useTemplateRef("circleTwo");

    onMounted(() => {
        useMotion(_circleOne_, {
            initial: {
                scale: 0,
                y: -100,
            },
            visible: {
                scale: 1,
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 5,
                    delay: 600
                }
            }
        });

        useMotion(_circleTwo_, {
            initial: {
                scale: 0,
                x: 100,
            },
            enter: {
                scale: 1,
                x: 0,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 5,
                    delay: 600
                }
            }
        });
    })

</script>

<template>
    <div class="flex flex-col gap-y-8 py-20 px-3 items-center relative z-9 overflow-x-hidden">
        <div class="h-fit py-1 px-1 flex justify-center items-center dark:text-black/80 text-[13px] rounded-full" :style="rainbowStyle">
            <span class="bg-black/80 px-4 py-1 text-slate-100 font-[550] rounded-full">The last starter kit you'll ever need!.</span>
        </div>
        <div class="w-full flex flex-col items-center">
            <div class="text-[30px] lg:text-[60px] font-[1000] leading-tight text-center text-slate-100">Debug Smarter, Code Faster</div>
            <div class="w-full text-slate-400 md:max-w-[45%] text-[15px] text-center font-[500]">ErrorBreak is the ultimate debugging platform for developers. Identify, analyze, and resolve code issues effortlessly with powerful tools designed to simplify troubleshooting and speed up development. Debug smarter, not harder!.</div>
            <div class="flex flex-col md:flex-row gap-x-3 gap-y-1 mt-4">
                <router-link class="h-fit py-[6px]" to="#">
                    <button class="py-[6px] text-slate-100 px-4 flex gap-x-2 items-center rounded-full border-2 border-border-button">
                        <BsDiscord class="text-[22px]" />
                        <span class="text-[13px] font-[600]">Join the Community</span>
                    </button>
                </router-link>
                <router-link class="h-fit py-[6px]" to="#">
                    <button class="py-[8px] text-slate-100 px-8 md:px-4 flex gap-x-2 items-center rounded-full bg-border-button">
                        <AkPlay class="text-[22px]" />
                        <span class="text-[13px] font-[600]">Watch Teaser</span>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="absolute w-[150px] h-[150px] top-[10%] left-[30%] bg-border-button rounded-full -z-9" ref="circleOne"></div>
        <div class="absolute w-[150px] h-[150px] top-[50%] left-[60%] bg-slate-500 rounded-full -z-9" ref="circleTwo"></div>
        <div class="absolute w-[60%] h-[300px] opacity-70 -top-[20%] left-[50%] translate-x-[-50%] bg-slate-300/10 blur-[200px] rounded-[50%] -z-9"></div>
    </div>
</template>
