<template>
  <div class="contain">
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="img-item"><img src="/imgs/AboutUs/WhoWeAre/text01.png" /></div>
          <div class="text">
            Since 2015, BNG (Bohemian National Grade) has been a trusted
            manufacturer and supplier of top-quality pipes, flanges, and
            fittings for leading companies in the oil, gas, renewable energy,
            and mining sectors. As a family-run business, we prioritize
            maintaining Czech quality standards and service and strive to meet
            our customers' rigorous demands and requirements.
          </div>
        </el-col>
        <el-col :span="12"
          ><img src="/imgs/AboutUs/WhoWeAre/image01.jpg" style="width: 100%"
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
