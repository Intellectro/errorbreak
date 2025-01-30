<script setup>
    import { BsDiscord, BsFacebook, BsGithub, BsTwitter } from '@kalimahapps/vue-icons';
import { logo2 } from '../images';
</script>

<template>
    <div class="h-fit py-10 w-full px-7 md:px-20 bg-black text-slate-100">
        <div class="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <div class="w-full flex flex-col gap-y-3">
                <div class="flex gap-x-2 items-center">
                    <div class="w-[34px] h-[34px]">
                        <img class="w-full h-full object-center object-contain" :src="logo2" :alt="logo2.split('/').pop().split('.')[0]">
                    </div>
                    <div class="text-xl font-[1000]">{{"<ErrorBreak />"}}</div>
                </div>
                <div class="text-[13px] font-[550] text-slate-100">&copy; {{new Date().getFullYear()}} ErrorBreak. All rights reserved.</div>
                <div class="flex gap-5 items-center">
                    <router-link to="//x.com">
                        <BsTwitter />
                    </router-link>
                    <router-link to="//facebook.com">
                        <BsFacebook />
                    </router-link>
                    <router-link to="//github.com">
                        <BsGithub />
                    </router-link>
                    <router-link to="//discord.com">
                        <BsDiscord />
                    </router-link>
                </div>
            </div>
            <div class="w-full flex flex-col gap-y-2">
                <div class="text-xl font-[1000] text-slate-500">Links</div>
                <div class="flex flex-col">
                    <router-link to="/">Home</router-link>
                    <router-link to="/register">Register</router-link>
                    <router-link to="/team">Team</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
            <div class="w-full flex flex-col gap-y-2">
                <div class="text-xl font-[1000] text-slate-500">Legal</div>
                <div class="flex flex-col gap-y-1">
                    <router-link to="/terms">Terms &amp; Conditions</router-link>
                    <router-link to="/privacy">Privacy Policy</router-link>
                </div>
            </div>
        </div>
    </div>
</template>