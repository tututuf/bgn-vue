<template>
  <div class="contain">
    <div>
      <img src="/imgs/Main_page/main_02.png" style="width: 100%" />
    </div>
    <div>
      <span class="weight">Committed to Quality</span>
      <div class="font">
        Our unwavering commitment to quality and customer satisfaction is at the
        very core of everything we do. Whether it is material selection or the
        fabrication process, we ensure that every detail meets the highest
        standards of quality and excellence.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  position: relative;
  // height: 110vh;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-color: white;
  overflow-y: auto;

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
    font-size: 1.4rem;
    margin: 0 auto;
    color: rgb(102, 102, 102);
    width: 40rem;
    text-align: left;
  }
}
</style>
