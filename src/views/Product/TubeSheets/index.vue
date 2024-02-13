<template>
  <div class="contain">
    <div class="index">
      <div class="Tube_sheet-box">
        <div class="title-box weight">Precision That Matters</div>
        <img src="/imgs/Product/Tube_sheet/tube_sheets_text.png" />
        <div class="text-box">
          Our tube sheets play a pivotal role in industrial heat exchangers and
          boilers, providing crucial support for tubes while enhancing
          structural integrity. We provide solutions according to the
          requirements of the clients in a flexible, quick, and appropriate way.
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
  // position: relative;
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;

  overflow-y: auto;
  .index {
    position: relative;
    height: 120vh;
    background-size: cover;
    background-image: url("/imgs/Product/Tube_sheet/Tube_sheets_head_bkg.png");
    background-color: #ededed;
  }
  .Tube_sheet-box {
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
      margin-bottom: 1rem;
    }

    .text-box {
      width: 37vw;
      font-size: 1.5rem;
    }
  }
}
</style>
