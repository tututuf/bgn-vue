<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Standard.png" alt="" />
        </div>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="text-title">•EN - European Standards</div>
              <div class="text-title">
                •DIN - German Institute for Standardization
              </div>
              <div class="text-title">•BS - British Standards</div>
              <div class="text-title">
                •ISO - International Organization for Standardization
              </div>
              <div class="text-title">•CSN - Czech technical standard</div>
              <div class="text-title">
                •API - American Petroleum Institute (API) Standards
              </div>
              <div class="text-title">
                •ASTM - American Society for Testing and Materials
              </div>
              <div class="text-title">
                •ANSI - The American National Standards Institute
              </div>
              <div class="text-title">
                •ASME - The American Society of Mechanical Engineers
              </div>
              <div class="text-title">
                •GOST - Government Standards of Russia
              </div>
              <div class="text-title">
                •JIS - Japanese Standards Association
              </div>
              <div class="text-title">
                •AWWA - American Water Works Association
              </div>
            </el-col>
            <el-col :span="12"
              ><img src="/imgs/Product/Pipe_Tube/Standard_page_image_01.png" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;
  // padding-top: 10rem;
  .box {
    margin-top: 10rem;
    .type-box {
      width: 70%;
      margin: auto;
      .title-box {
        text-align: left;
        margin-bottom: 1rem;
        img {
          width: 24%;
        }
      }
      .el-row {
        text-align: left;
        color: rgb(102, 102, 102);

        .text-title {
          font-family: bolder_Swis;
          font-size: 1.2rem;
          color: rgb(93, 93, 93);
        }
        img {
          width: 120%;
          margin-top: -4rem;
        }
      }
    }
  }
}
</style>
