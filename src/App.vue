<script setup>
  import {Pagescreen, Pagecontainer} from "./components";
  import SwitchNavHandler from "./components/SwitchNavHandler.vue";
</script>

<template>
   <Pagescreen>
      <Pagecontainer>
          <SwitchNavHandler />
          <router-view></router-view>
      </Pagecontainer>
   </Pagescreen>
</template>