<template>
  <div class="contain">
    <div class="index">
      <div class="fittings-box">
        <div class="title-box weight">Dynamic Pressure</div>
        <img src="/imgs/Product/Valve/Valves.png" />
        <div class="text-box">
          Valves are utilized for a variety of functions, including fluid
          control, regulating the pressure and flow of a fluid in a piping
          system, controlling the flow direction, throttling flow systems, and
          improving system safety in different industries. We supply major types
          of valves based on their industrial importance and usage.
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

  overflow-y: auto;
  .index {
    position: relative;
    height: 120vh;
    background-size: cover;
    background-image: url("/imgs/Product/Valve/Valves_head_bkg.png");
    background-color: #ededed;
  }
  .fittings-box {
    top: 25vh;
    position: absolute;
    width: 50vw;
    height: 50vh;
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
