<template>
  <div class="contain">
    <div class="text-box">
      <div class="img-box">
        <img src="/imgs/Main_page/Inspection_icon.png" />
      </div>
      Quality is paramount to our team of well-trained international inspectors
      who have a deep understanding and knowledge of the industry. We go above
      and beyond to ensure client satisfaction and meet industry requirements.
      <div style="text-align: center; margin-top: 2rem">
        <router-link to="/service/SteelPlates" class="readme">
          <img src="/imgs/Main_page/read_more.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  // height: 110vh;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-image: url("/imgs/Main_page/inspection_bkg.jpg");
  overflow-y: auto;

  .img-box {
    margin-top: 10rem;
    margin-bottom: 2rem;
    // img {
    //   margin-left: -33rem;
    //   width: 35%;
    // }
  }

  .text-box {
    text-align: left;
    margin-top: 2rem;
    width: 36rem;
    font-size: 1.8rem;
    margin-left: 16rem;
    margin-bottom: 2rem;
  }
}
</style>
