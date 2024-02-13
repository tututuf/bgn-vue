<template>
  <div class="page-container" ref="container">
    <div class="page-item">
      <Quote />
    </div>
    <div class="page-item">
      <Form />
    </div>
  </div>
</template>

<script setup lang="ts">
import Quote from "./components/Quote.vue";
import Form from "./components/Form.vue";
import { onMounted, ref } from "vue";

// const container = ref();
// onMounted(() => {
//   console.log(container.value);
//   console.log(container.value.style);
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
//   var touchStartY = 0;
//   document.addEventListener("touchstart", (event) => {
//     touchStartY = event.touches[0].pageY;
//   });
//   var handleTouchEnd = throttle(touchEnd, 500);
//   document.addEventListener("touchend", handleTouchEnd);
//   function touchEnd(e: any) {
//     var touchEndY = e.changedTouches[0].pageY;
//     if (touchEndY - touchStartY < 0) {
//       // 向上滑动, 页面向下滚动
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

<style lang="scss" scoped>
.page-container {
  position: relative;
  top: 0;
  transition: all 1000ms ease;
  touch-action: none;
}

.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
