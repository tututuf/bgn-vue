<template>
  <div class="contain">
    <div class="index">
      <div class="fittings-box">
        <div class="title-box weight">Top Grade</div>
        <img src="/imgs/Product/Steel_plate/Steel_plates.png" />
        <div class="text-box">
          Our major products include heavy steel plates, high-strength low alloy
          (HSLA), abrasion-resistant steel plates, high- and low-carbon
          nonstructural steel plates, offshore and marine steel plates, pressure
          vessel steel plates (PQ), etc. Our steel plates are pivotal in various
          industries, ensuring structural integrity amid challenging conditions.
        </div>
      </div>
      <!-- <img
        src="/imgs/Main_page/read_more.png"
        style="margin-top: 2rem"
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
  // background-size: cover;
  // background-image: url("/imgs/Product/Steel_plate/product_steelplate_bkg_01.jpg");
  overflow-y: auto;
  .index {
    position: relative;
    height: 120vh;
    background-size: cover;
    background-image: url("/imgs/Product/Steel_plate/Steel_plates_head_bkg.png");
    background-color: #ededed;
  }
  .fittings-box {
    top: 25vh;
    position: absolute;
    width: 50vw;
    height: 50vh;
    // padding-top: 30vh;
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
