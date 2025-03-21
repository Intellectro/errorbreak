<script setup>
    import { SiHackthebox } from '@kalimahapps/vue-icons';
    import { JaDatabase } from '@kalimahapps/vue-icons';
    import { IcDatabaseSettings } from '@kalimahapps/vue-icons';
    import { FaPiggyBank } from '@kalimahapps/vue-icons';
    import { FlMailMultiple } from '@kalimahapps/vue-icons';
    import { FlShieldCheckmark } from '@kalimahapps/vue-icons';
    import { BsFileEarmarkRichtextFill } from '@kalimahapps/vue-icons';
    import { AkDoubleCheck } from '@kalimahapps/vue-icons';
    import { CaNetwork4 } from '@kalimahapps/vue-icons';

    import store from "../store";
    import {computed, ref} from "vue";

    const contents = ref(store.state?.contents);
    const cmdataarr = computed(() => store.getters?.cmDataHandler);
    const borderHandler = computed(() => store.getters?.borderHandler);
</script>

<template>
    <div class="w-full py-9 px-4 md:px-2 md:w-[80%] mx-auto relative z-9" :style="borderHandler">
        <div class="flex flex-col gap-y-8">
            <div class="flex flex-col gap-y-2 items-center text-slate-100 font-bold">
                <div class="text-[32px] text-center tracking-wide leading-tight font-[1000]">Your Debugging <span class="py-1 px-3 ml-2 bg-border-button" v-html="'Companion'" /></div>
                <div class="w-full mt-3 md:max-w-[60%] text-center mx-auto text-[13px] text-slate-400 font-[550]">ErrorBreak is the ultimate debugging platform that helps developers pinpoint and fix issues effortlessly. From error tracking to deep insights, ErrorBreak streamlines the debugging process, so you can focus on building great software.</div>
            </div>
            <div class="w-full md:w-[80%] mx-auto">
                <div class="flex flex-col lg:flex-row gap-10">
                    <div class="w-[95%] mx-auto lg:w-[45%]">
                        <div class="flex flex-col gap-y-1">
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <SiHackthebox class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Frontend</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <JaDatabase class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Backend</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <IcDatabaseSettings class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Database</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <FaPiggyBank class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Payment</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <FlMailMultiple class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Mailing</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <FlShieldCheckmark class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Authentication</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <BsFileEarmarkRichtextFill class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">SEO</span>
                                </div>
                                <div class="flex flex-col gap-y-1 items-center">
                                    <div class="w-[50px] h-[50px] flex justify-center items-center bg-slate-100/10">
                                        <CaNetwork4 class="text-[18px] font-bold text-slate-300" />
                                    </div>
                                    <span class="text-slate-100 text-[12px]">Networking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-[65%] md:px-5">
                        <div class="flex flex-col gap-y-5">
                            <div class="flex flex-col gap-y-2">
                                <div class="text-[14px] font-bold text-slate-100">Developer Productivity / Multi-Language Support</div>
                                <div class="text-[13px] font-[500] text-slate-500 leading-tight">Focus on how ErrorBreak enhances productivity through automation and streamlined debugging.</div>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <div class="flex items-center text-slate-500 gap-x-1" v-for="({_id, _content}) in contents" :key="_id">
                                    <AkDoubleCheck class="text-[11px] font-bold text-border-button" />
                                    <span class="text-[13px] font-[500]">{{_content}}</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <div class="flex justify-between" v-for="({rows}, index) in cmdataarr" :key="index">
                                    <div class="flex flex-col gap-y-1" v-for="({_id, _icon, _content}) in rows" :key="_id">
                                        <div class="w-[40px] h-[40px] flex justify-center items-center">
                                            <div v-html="_icon" />
                                        </div>
                                        <span class="text-[13px] text-slate-300 font-[550]">{{_content}}</span>
                                    </div>
                                </div>
                                <span class="text-slate-300 font-extrabold mt-5">Plus Other 1K+ Languages Supported</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute w-[50%] h-[100%] opacity-70 bg-slate-100/10 blur-[200px] rounded-full top-[-20%] left-[50%] translate-x-[-50%] -z-9"></div>
    </div>
</template>