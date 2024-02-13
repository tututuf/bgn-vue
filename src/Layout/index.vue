<template>
  <div id="main-layout">
    <LayoutHeader class="header-title"></LayoutHeader>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from './LayourHeader.vue'

</script>

<style lang="scss" scoped>
#main-layout {
  height: 100vh;
  width: 100vw;
  background-color: #111;
}

.header-title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>