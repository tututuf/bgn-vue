<template>
  <div class="contain">
    <div class="index">
      <div class="flanges-box">
        <div class="title-box weight">Precision Meets Purpose</div>
        <img src="/imgs/Product/Flanges/Flanges.png" />
        <div class="text-box">
          BNG offers solutions for easily connecting and disconnecting joints by
          utilizing a wide range of flanges in stock or by order from our
          factory and approved manufacturers. These flanges are designed to
          attach pipes to various mechanical equipment such as valves, fittings,
          and other components in a piping system configuration.
        </div>
      </div>
      <!-- <img
        src="/imgs/Main_page/read_more.png"
        style="margin-top: 2rem"
        @click="readmore"
      /> -->
    </div>

    <div ref="inDetailBox">
      <!-- <inDetail v-show="display" /> -->
      <inDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import inDetail from "./inDetail.vue";
const display = ref<Boolean>(false);

const inDetailBox = ref<HTMLDivElement>();

function readmore() {
  display.value = true;
  console.log(inDetailBox.value);
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
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  overflow-y: auto;
  .index {
    position: relative;
    height: 120vh;
    background-size: 100% 100%;
    background-image: url("/imgs/Product/Flanges/Flanges_head_bkg.png");
    background-color: #ededed;
  }
  .flanges-box {
    top: 25vh;
    position: absolute;
    width: 50vw;
    // margin-top: 30vh;
    margin-left: 15vw;
    text-align: left;
    .title-box {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    img {
      width: 65%;
      margin-bottom: 1rem;
    }
    .text-box {
      width: 37vw;
      font-size: 1.5rem;
    }
  }
}
</style>
