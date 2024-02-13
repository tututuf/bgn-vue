<template>
  <div class="contain">
    <div class="flanges-box">
      <div class="title-box">Simplicity, Reliabillty, And Adaptabillty</div>
      <img src="/imgs/Product/Flanges/Flanges.png" />
      <div class="text-box">
        BNG offers solutions for easily connecting and disconnecting joints by
        utilizing a wide range of flanges in stock or by order from our factory
        and approved manufacturers. These flanges are designed to attach pipes
        to various mechanical equipment such as valves, fittings, and other
        components in a piping system configuration.
      </div>
    </div>
    <img src="/imgs/Main_page/read_more.png" @click="detail = true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const detail = ref<Boolean>(false);
</script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-image: url("/imgs/Product/Flanges/product_flanges_bkg.jpg");
  overflow-y: auto;
  .flanges-box {
    width: 50vw;
    height: 50vh;
    margin-top: 30vh;
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
