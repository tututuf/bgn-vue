<template>
  <div class="contain">
    <div class="index">
      <div class="Piping_spool-box">
        <div class="title-box weight">Industrial Ingenuity</div>
        <img src="/imgs/Product/Piping_spool/piping_spools.png" />
        <div class="text-box">
          At BNG, our piping spools are pre-fabricated at one of our sites and
          then transported to the construction site, where they are assembled
          together to form the final pipeline system. This process reduces the
          amount of welding that needs to be done on site, thereby reducing the
          cost and time associated with the installation of pipelines.
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
    background-image: url("/imgs/Product/Piping_spool/Piping_spools_head_bkg.png");
    background-color: #ededed;
  }
  .Piping_spool-box {
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
      width: 50%;
    }

    .text-box {
      width: 37vw;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
}
</style>
