<template>
  <div class="contain" style="background: #ededed">
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/AboutUs/Concept/8_point_system_2.png" alt="" />
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/1.png" alt="" />
            </div>
            <div class="text-box">
              With our own engineers on site, we ensure that partners have a
              well-established quality control system in place to ensure that
              the products meet industry standards.
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/2.png" alt="" />
            </div>
            <div class="text-box">
              We only choose a factory/mill that has the right equipment,
              technology, and expertise to manufacture client products
              efficiently and effectively.
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/3.png" alt="" />
            </div>
            <div class="text-box">
              The location of the factory can affect logistics, transportation
              costs, and lead times, so we consider proximity to material
              sources, our customer's markets and shipping routes when choosing
              partners.
            </div> </el-col
          ><el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/4.png" alt="" />
            </div>
            <div class="text-box">
              We look for partners with relevant certifications, such as ISO
              9001, to ensure their quality management system meets
              international standards, as well as certifications required by our
              clients.
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 1rem">
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/5.png" alt="" />
            </div>
            <div class="text-box">
              We ensure our partners have enough experience in the industry to
              provide valuable insights and guidance to improve the product and
              the manufacturing process.
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/6.png" alt="" />
            </div>
            <div class="text-box">
              Communication is critical for a successful partnership, so we look
              for partners that are responsive, transparent, and easy to work
              with.
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/7.png" alt="" />
            </div>
            <div class="text-box">
              Our partners must have a positive reputation in the industry and
              among their clients. We look for reviews, testimonials, and
              referrals from others in the industry to ensure a partner's
              reputation speaks highly of their quality and reliability.
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img src="/imgs/AboutUs/Concept/8.png" alt="" />
            </div>
            <div class="text-box">
              We choose a partner that follows sustainable and ethical practices
              in their manufacturing process to align with our client's
              company's values and meet customer demands.
            </div>
          </el-col>
        </el-row>
      </div>
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
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  .type-box {
    width: 70%;
    margin: auto;
    margin-top: 6rem;

    .title-box {
      text-align: left;

      img {
        width: 30%;
      }
    }

    .img-box {
      padding: 0;
      height: 5rem;
      text-align: left;

      img {
        // width: 100%;
        margin: 0;
        height: 100%;
      }
    }

    .text-box {
      // margin-top: -2.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: rgb(102, 102, 102);
      text-align: left;
    }
  }
}
</style>
