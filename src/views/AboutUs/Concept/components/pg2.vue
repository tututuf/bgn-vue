<template>
  <div class="contain">
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="img-item">
            <img src="/imgs/AboutUs/Concept/8_point_system.png" />
          </div>
          <div class="text">
            We uphold rigorous standards in our factory operations, and the same
            level of scrutiny applies when selecting partner factories to
            utilize their tools for order fulfillment. Our comprehensive
            criteria encompasses the following considerations:
          </div>
        </el-col>
        <el-col :span="12"
          ><img src="/imgs/AboutUs/Concept/image02.png" style="width: 100%"
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
