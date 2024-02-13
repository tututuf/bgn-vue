<!-- <template>
  <div id="home-page" ref="container">
    <div class="pg"><Pg1 /></div>
    <div class="pg"><Pg2 /></div>
    <div class="pg"><Pg3 /></div>
    <div class="pg"><Pg4 /></div>
    <div class="pg"><Pg5 /></div>
    <div class="pg"><Pg6 /></div>
    <div class="pg"><Pg7 /></div>
    <div class="pg"><Pg8 /></div>
    <div class="pg"><Pg9 /></div>
    <div class="pg"><LayoutBottom /></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Pg1 from "./components/Pg1.vue";
import Pg2 from "./components/Pg2.vue";
import Pg3 from "./components/Pg3.vue";
import Pg4 from "./components/Pg4.vue";
import Pg5 from "./components/Pg5.vue";
import Pg6 from "./components/Pg6.vue";
import Pg7 from "./components/Pg7.vue";
import Pg8 from "./components/Pg8.vue";
import Pg9 from "./components/Pg9.vue";
import LayoutBottom from "@/Layout/LayoutBottom.vue";
const container = ref();
onMounted(() => {
  console.log(container.value);
  var viewHeight = document.documentElement.clientHeight;
  var pageNum = document.querySelectorAll(".pg").length;
  var currentPosition = 0;
  container.value.style.height = viewHeight + "px";
  function goDown() {
    if (currentPosition > -viewHeight * (pageNum - 1)) {
      currentPosition = currentPosition - viewHeight;
      container.value.style.top = currentPosition + "px";
    }
  }

  function goUp() {
    if (currentPosition < 0) {
      currentPosition = currentPosition + viewHeight;
      container.value.style.top = currentPosition + "px";
    }
  }

  var handlerWheel = throttle(scrollMove, 1000);
  if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
    document.addEventListener("mousewheel", handlerWheel);
  } else {
    document.addEventListener("DOMMouseScroll", handlerWheel);
  }
  function scrollMove(e: { deltaY: number }) {
    if (e.deltaY > 0) {
      goDown();
    } else {
      goUp();
    }
  }

  // 节流
  function throttle(fn: { (e: any): void; apply?: any }, delay: number) {
    let baseTime = 0;
    return function () {
      const currentTime = Date.now();
      if (baseTime + delay < currentTime) {
        fn.apply(delay, arguments);
        baseTime = currentTime;
      }
    };
  }
});
</script>

<style lang="scss" scoped>
#home-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  transition: all 1000ms ease;
  #main-content {
    position: relative;
    height: inherit;
    width: inherit;
    overflow: hidden;
    overflow-y: auto;
    z-index: 100;
    top: 0;
    // transition: all 1000ms ease;

    .box {
      position: relative;
    }
  }

  .page {
    position: relative;
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 100;
    color: #fff;
    background-size: cover;

    .title {
      font-size: 6rem;
      // font-size: 72pt;
      font-weight: 600;
      font-family: auto;
    }

    .text {
      font-family: tt0140m;
      font-size: 2.15rem;
      // font-size: 24pt;
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
  }
}
</style> -->
<template>
  <div class="page-container" ref="container">
    <div class="page-item">
      <Pg1 />
    </div>
    <div class="page-item">
      <Pg2 />
    </div>
    <div class="page-item">
      <Pg3 />
    </div>
    <div class="page-item">
      <Pg4 />
    </div>
    <div class="page-item">
      <Pg5 />
    </div>
    <div class="page-item">
      <Pg6 />
    </div>
    <div class="page-item">
      <Pg7 />
    </div>
    <div class="page-item" v-show="showMore">
      <div class="step1">
        <Pg71 id="scroll-box1" />
      </div>
    </div>
    <div class="page-item" v-show="showMore">
      <Pg72 />
    </div>
    <div class="page-item" v-show="showMore">
      <Pg73 />
    </div>
    <div class="page-item" v-show="showMore">
      <Pg74 />
    </div>
    <div class="page-item">
      <Pg8 />
    </div>
    <div class="page-item">
      <Pg9 />
    </div>
    <!-- <div class="page-item layoutBottom"><LayoutBottom /></div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
// import { useRoute } from "vue-router";
import Pg1 from "./components/Pg1.vue";
import Pg2 from "./components/Pg2.vue";
import Pg3 from "./components/Pg3.vue";
import Pg4 from "./components/Pg4.vue";
import Pg5 from "./components/Pg5.vue";
import Pg6 from "./components/Pg6.vue";
import Pg7 from "./components/Pg7.vue";
import Pg8 from "./components/Pg8.vue";
import Pg9 from "./components/Pg9.vue";
import Pg71 from "./components/Pg71.vue";
import Pg72 from "./components/Pg72.vue";
import Pg73 from "./components/Pg73.vue";
import Pg74 from "./components/Pg74.vue";
// import LayoutBottom from "@/Layout/LayoutBottom.vue";

const container = ref();
let curComponent = ref<string>("");
let curPage = ref<number>(0);
let showMore = ref<boolean>(false);
// onMounted(() => {
//   // console.log(container.value);
//   // console.log(container.value.style);
//   var viewHeight = document.documentElement.clientHeight;
//   var pageNum = document.querySelectorAll(".page-item").length;
//   var currentPosition = 0;
//   container.value.style.height = viewHeight + "px";
//   function goDown() {
//     if (showMore.value == false) {
//       if (currentPosition > -viewHeight * (pageNum - 5)) {
//         currentPosition = currentPosition - viewHeight;
//         container.value.style.top = currentPosition + "px";
//       }
//     } else {
//       if (currentPosition > -viewHeight * (pageNum - 1)) {
//         currentPosition = currentPosition - viewHeight;
//         container.value.style.top = currentPosition + "px";
//       }
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
//   // const route = useRoute();
//   // const inspectionEl = document.querySelector("#scroll-box2") as HTMLElement;
//   // if (route.query.svc == "shippings") {
//   //   window.scrollTo({ top: inspectionEl?.offsetTop });
//   // }
// });

// function myclick(page: number, id: string, selectedComponent?: string) {
//   // console.log("Pg7收到了Pg71传的方法");
//   // console.log("Pg7收到了Pg71传的方法", page, id, selectedComponent);
//   // console.log(page, id, selectedComponent);
//   curComponent.value = selectedComponent
//     ? selectedComponent
//     : curComponent.value;
//   curPage.value = page;
//   showMore.value = true;
//   nextTick(() => {
//     // goDown();
//     const scrollBox = document.querySelector("#" + id);
//     console.dir(scrollBox);
//     // const tarEl = scrollBox?.querySelector(
//     //   ".step1"
//     // ) as HTMLElement;
//     // console.log(tarEl);
//     // console.log(tarEl.offsetTop);
//     var viewHeight = document.documentElement.clientHeight;
//     var height = viewHeight * 7;
//     console.log(viewHeight, height);
//     scrollBox?.scrollTo({ top: height, behavior: "smooth" });
//   });
// }
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
}

.page-container {
  position: relative;
  top: 0;
  transition: all 1000ms ease;
  touch-action: none;
  overflow-y: auto;
}

.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  /* border: 1px solid #ddd; */
}

.layoutBottom {
}

#scroll-box1,
#scroll-box2 {
  position: relative;
  flex-direction: column;
}
</style>
