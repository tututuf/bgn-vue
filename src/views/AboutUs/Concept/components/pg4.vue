<template>
  <div class="contain">
    <div class="box">
      <div class="title">
        <img src="/imgs/AboutUs/Concept/Strateically.png" alt="" />
      </div>
      <div class="img"><img src="/imgs/AboutUs/Concept/map.png" alt="" /></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background: #fff;
  overflow-y: auto;

  .box {
    width: 70vw;
    // height: 80vh;
    // background: pink;
    margin: auto;
    margin-top: 10rem;

    .title {
      text-align: left;

      img {
        width: 50%;
      }
    }

    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>
