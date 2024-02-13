<template>
  <div class="page-container" ref="container">
    <div class="page-item"><Types /></div>
    <div class="page-item"><Material /></div>
    <div class="page-item"><Standards /></div>
    <div class="page-item"><Applications /></div>
  </div>
</template>

<script setup lang="ts">
import Types from "./components/Types.vue";
import Material from "./components/Material.vue";
import Standards from "./components/Standards.vue";
import Applications from "./components/Applications.vue";
// import { onMounted, ref } from "vue";
// const container = ref();
// onMounted(() => {
//   console.log(container.value);
//   var viewHeight = document.documentElement.clientHeight;
//   var pageNum = document.querySelectorAll(".page-item").length;
//   var currentPosition = 0;
//   container.value.style.height = viewHeight + "px";
//   function goDown() {
//     if (currentPosition > -viewHeight * (pageNum - 1)) {
//       currentPosition = currentPosition - viewHeight;
//       container.value.style.top = currentPosition + "px";
//     }
//   }

//   function goUp() {
//     if (currentPosition < 0) {
//       currentPosition = currentPosition + viewHeight;
//       container.value.style.top = currentPosition + "px";
//     }
//   }

//   var handlerWheel = throttle(scrollMove, 1000);
//   if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//     document.addEventListener("mousewheel", handlerWheel);
//   } else {
//     document.addEventListener("DOMMouseScroll", handlerWheel);
//   }
//   function scrollMove(e: { deltaY: number }) {
//     if (e.deltaY > 0) {
//       goDown();
//     } else {
//       goUp();
//     }
//   }

//   // 节流
//   function throttle(fn: { (e: any): void; apply?: any }, delay: number) {
//     let baseTime = 0;
//     return function () {
//       const currentTime = Date.now();
//       if (baseTime + delay < currentTime) {
//         fn.apply(delay, arguments);
//         baseTime = currentTime;
//       }
//     };
//   }
// });
</script>

<style lang="scss" scoped></style>
