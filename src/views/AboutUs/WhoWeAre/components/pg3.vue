<template>
  <div class="contain">
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="img-item"><img src="/imgs/AboutUs/WhoWeAre/text02.png" /></div>
          <div class="text">
            To ensure the quality of our products, we have invested in a flange
            mill in Northern China and a machine shop in the EU. We also
            implement a collaborative supplier management approach and strict
            qualification procedures to select our partner manufacturers (BNG
            internal AML procedure).
          </div>
        </el-col>
        <el-col :span="12"
          ><img src="/imgs/AboutUs/WhoWeAre/image02.jpg" style="width: 100%"
        /></el-col>
      </el-row>
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

    .img-item {
      margin-bottom: 3rem;
      text-align: left;

      img {
        width: 100%;
      }
    }

    .text {
      font-size: 1.6rem;
      color: rgb(77, 77, 77);
      text-align: left;
    }
  }
}
</style>
