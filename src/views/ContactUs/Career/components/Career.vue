<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="12">
          <div class="img-item">
            <img src="/imgs/ContactUs/Carrer_with_us.png" />
          </div>
          <div class="text">
            Want to join us at the BNG family? Please fill in the details below.
          </div>
        </el-col>
        <el-col :span="12"><img src="/imgs/ContactUs/career_with_us_2.jpg"
            style="width: 100%; margin-left: 2rem;" /></el-col>
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
        width: 50%;
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
