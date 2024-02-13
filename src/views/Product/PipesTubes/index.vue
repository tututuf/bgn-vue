<template>
  <div class="contain">
    <div class="index">
      <div class="flanges-box">
        <div class="title-box weight">Precision Pipes</div>
        <img src="/imgs/Product/Pipe_Tube/pipesNtubes.png" />
        <div class="text-box">
          Explore our extensive selection of pipes and tubes, designed for
          diverse applications. We offer not only a variety of materials and
          standards, but also value-added services like cutting, coating,
          fabrication, and inspection. Experience seamless integration and
          enhanced performance with our tailored solutions.
        </div>
      </div>
      <!-- <img
        src="/imgs/Main_page/read_more.png"
        style="margin-top: 5rem"
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
    background-image: url("/imgs/Product/Pipe_Tube/PipesNTubes_head_bkg.png");
    background-color: #ededed;
  }
  .flanges-box {
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
      width: 60%;
      margin-bottom: 1rem;
    }

    .text-box {
      width: 37vw;
      font-size: 1.5rem;
    }
  }
}
</style>
