<template>
  <div class="contain">
    <div class="index">
      <div class="fittings-box">
        <div class="title-box weight">Unrelenting Excellence</div>
        <img src="/imgs/Product/CNC/CNC.png" />
        <div class="text-box">
          Simply send us your requests, and we will provide high-quality parts
          to spec to suit your budgetary targets and meet your lead times. Our
          European team oversees smooth, efficient, and transparent
          communication with the local partners in Asia, from quotation to
          delivery.
        </div>
      </div>
      <!-- <img
        src="/imgs/Main_page/read_more.png"
        style="margin-top: 8rem"
        @click="readmore"
      /> -->
    </div>

    <div ref="inDetailBox">
      <!-- <inDetail v-if="display" /> -->
      <inDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import inDetail from "./inDetail.vue";
const display = ref<Boolean>(false);
const inDetailBox = ref<HTMLDivElement>();
function readmore() {
  display.value = true;
  nextTick(() => {
    inDetailBox.value?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
</script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  overflow-y: auto;
  .index {
    position: relative;
    height: 120vh;
    background-size: 100% 100%;
    background-image: url("/imgs/Product/CNC/CNC_head_bkg.png");
    background-color: #ededed;
  }
  .fittings-box {
    top: 25vh;
    position: absolute;
    width: 50vw;
    height: 50vh;
    // margin-top: 25vh;
    margin-left: 15vw;
    text-align: left;

    .title-box {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    img {
      width: 50%;
      margin-bottom: 1rem;
    }

    .text-box {
      width: 37vw;
      font-size: 1.5rem;
    }
  }
}
</style>
