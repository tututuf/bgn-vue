<template>
  <div class="contain">
    <div class="index">
      <div class="fittings-box">
        <div class="title-box weight">Bolt It With Confidence</div>
        <img src="/imgs/Product/Fasteners/fasteners_text.png" />
        <div class="text-box">
          Fasteners play a crucial role in joining and securing components
          within piping systems across various industries. We have a
          comprehensive choice of fasteners, ranging in types, shapes, sizes,
          and materials. Our standard and customized fastener solutions are
          meticulously designed to align with the distinctive requirements of
          our clients.
        </div>
      </div>
      <!-- <img
        src="/imgs/Main_page/read_more.png"
        style="margin-top: 3rem"
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
    background-image: url("/imgs/Product/Fasteners/Fasteners_head_bkg.png");
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
