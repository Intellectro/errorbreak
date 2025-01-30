<script setup>
import { useMotion } from '@vueuse/motion';
import { onMounted, useTemplateRef } from 'vue';

    defineProps({
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: 'Debugger'
        },
        icon: {
            type: String,
        },
        content: {
            type: String,
            default: ''
        }
    });

    const cardRef = useTemplateRef("card-handler")

    onMounted(() => {
        useMotion(cardRef, {
            initial: {
                y: 100,
                opacity: 0
            },
            visibleOnce: {
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }
            }
        })
    })
</script>

<template>
    <div class="flex-1 w-full py-2 px-3 flex items-center justify-center" ref="card-handler">
        <div class="flex gap-x-2 items-start">
            <div class="flex-[0.05]">
                <div class="w-full h-[30%] p-2">
                    <div v-html="icon" />
                </div>
            </div>
            <div class="flex-[0.95] flex flex-col gap-y-2">
                <div class="text-[15px] font-bold">{{title}}</div>
                <div class="text-[13px] font-[500]">{{content}}</div>
            </div>
        </div>
    </div>
</template>