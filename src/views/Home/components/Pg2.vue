<template>
  <div class="contain pg">
    <div class="img">
      <img src="/imgs/Main_page/main01.png" style="width: 100%" />
    </div>
    <div class="text">
      <span class="weight"
        >Bridging continents, uniting quality and affordability</span
      >
      <div class="font">
        Since 2015, BNG (Bohemian National Grade) has been a trusted
        manufacturer and supplier of top-quality industrial piping components
        for leading companies in the renewable energy, oil, gas, and mining
        sectors. As a family-run business, we prioritize maintaining Czech
        quality standards and service and strive to meet our customers' rigorous
        demands and requirements. BNG looks forward to working with you and
        continuing to be a pioneer in the industry.
      </div>
    </div>
    <router-link to="/who_we_are" class="readme"
      ><img src="/imgs/Main_page/read_more.png" style="margin-top: 1rem"
    /></router-link>
  </div>
</template>

<script setup lang="ts">
// function scrollPg2(event) {
//   console.log("到第二页");
//   console.log(event.target.scrollTop);

//   setTimeout(() => {
//   }, 1000) // 停顿1秒钟
// }
</script>

<style lang="scss" scoped>
.contain {
  position: relative;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-color: white;
  overflow-y: auto;
  overflow: hidden;

  .text {
    // width: 100%;
    span {
      position: absolute;
      left: 50%;
      top: 36rem;
      width: 50rem;
      margin-left: -25rem;
      font-size: 1.8rem;
      color: rgb(102, 102, 102);
      display: block;
    }
    .font {
      font-size: 1.1rem;
      margin: 0 auto;
      color: rgb(102, 102, 102);
      width: 45rem;
      text-align: left;
    }
  }
}
</style>
