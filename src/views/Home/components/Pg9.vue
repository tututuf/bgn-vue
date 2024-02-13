<template>
  <div class="contain">
    <el-row>
      <el-col :span="8" class="detail-box">
        <div><img src="/imgs/Main_page/main_icon_05.jpg" /></div>
        <div class="title-box">United in Diversity</div>
        <div class="text-box">
          We treasure the cultural diversity that defines our company. Our core
          values and mission are rooted in cultivating a vibrant, inclusive
          workplace that thrives on the unique perspectives and talents of all
          employees. This rich tapestry of backgrounds and perspectives fuels
          innovation, fosters collaboration, and drives our success. Join us in
          celebrating our collective strength, and let's build a brighter future
          together.
        </div></el-col
      >
      <el-col :span="8" class="detail-box"
        ><div><img src="/imgs/Main_page/main_icon_06.jpg" /></div>
        <div class="title-box">Suppliers & Partners</div>
        <div class="text-box">
          Service providers and suppliers rank amongst our most crucial
          developmental partners. Together we can, develop and grow our
          companies while looking for creative, ethical, and sustainable ways to
          do it. We manufacture at volume, so timing, quality and efficiency are
          critical. We are always looking for the right partners who share our
          values, our aspirations and goals.
        </div></el-col
      >
      <el-col :span="8" class="detail-box">
        <div><img src="/imgs/Main_page/main_icon_07.jpg" /></div>
        <div class="title-box">Career with Us</div>
        <div class="text-box">
          Our goal is to improve contribute in a meaningful way to people's
          lives. We wish to make a significant difference to our present and
          future team members. We embrace diversity and make inclusiveness a top
          priority. Where are you headed? Follow your strengths and start a
          career with us.
        </div></el-col
      >
    </el-row>
    <LayoutBottom />
  </div>
</template>

<script setup lang="ts">
import LayoutBottom from "@/Layout/LayoutBottom.vue";
</script>

<style lang="scss" scoped>
.contain {
  // height: 80vh;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-color: white;
  overflow-y: auto;

  .el-row {
    margin: auto auto;
    margin-top: 5rem;
    width: 80%;
    height: 70%;
    img {
      width: 55%;
    }
    .title-box {
      font-family: bolder_Swis;
      margin-top: 1.5rem;
      font-size: 2.5rem;
      text-align: center;
      color: rgb(102, 102, 102);
    }
    .text-box {
      margin: 1.5rem 2rem;
      font-size: 1.1rem;
      color: rgb(102, 102, 102);
      text-align: left;
    }
  }
}
</style>
