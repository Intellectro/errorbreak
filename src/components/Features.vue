<script setup>
    import { BsFire } from '@kalimahapps/vue-icons';
    import {side_screenshot1, side_screenshot2, side_code_pic} from "../images";
    import { useMotion } from '@vueuse/motion';
    import { computed, onMounted, useTemplateRef } from 'vue';
    import Card from './Card.vue';
    import store from '../store';

    const imageRef = useTemplateRef("imageOne");
    const imageRef2 = useTemplateRef("imageTwo");

    const cardsData = computed(() => store.getters?.cardsDataHandler);


    onMounted(() => {
        useMotion(imageRef, {
            initial: {
                x: 100,
                opacity: 0,
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 50
                }
            }
        });

        useMotion(imageRef2, {
            initial: {
                x: -100,
                opacity: 0,
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    damping: 70
                }
            }
        })
    });

</script>

<template>
    <div class="w-full bg-black py-20">
        <div class="py-4 mx-auto w-full px-6 md:w-[70%] h-fit md:px-3">
            <div class="flex gap-x-4 flex-col md:flex-row gap-y-10">
                <div class="flex-1">
                    <div class="w-full flex flex-col gap-y-2">
                        <div class="flex gap-x-3 items-center">
                            <div class="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-sm bg-border-button flex justify-center items-center">
                                <BsFire class="text-slate-100 text-[29px]" />
                            </div>
                            <span class="text-xl font-bold text-slate-100">Get Started in minutes</span>
                        </div>
                        <div class="text-[15px] md:text-[20px] md:text-2xl text-slate-100 font-[550]">Focus on how {{"<ErrorBreak />"}} enhances productivity through automation and streamlined debugging. howcase how the platform helps track errors and provide detailed insights for resolution.</div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="w-full px-3 h-[250px] md:h-[300px] bg-linear-210 from-20% to-100% from-amber-500 to-border-button rounded-xl relative">
                        <img :src="side_screenshot1" class="w-full h-full object-contain object-center" :alt="side_screenshot1.split('/').pop().split('.')[0]">
                        <div class="absolute top-[-25%] right-[-8%] w-[160px] h-[160px] md:w-[250px] md:h-[250px]" ref="imageOne">
                            <img class="w-full h-full object-center object-contain" :src="side_screenshot2" :alt="side_screenshot2.split('/').pop().split('.')[0]">
                        </div>
                        <div class="absolute bottom-[-25%] left-[-8%] w-[160px] h-[160px] md:w-[250px] md:h-[250px]" ref="imageTwo">
                            <img class="w-full h-full object-center object-contain" :src="side_code_pic" :alt="side_code_pic.split('/').pop().split('.')[0]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-y-4 gap-x-3 py-10 w-[85%] mx-auto text-slate-100">
            <Card v-for="(data, index) in cardsData" :key="index" class="bg-primary" v-bind="data" />
        </div>
    </div>
</template>