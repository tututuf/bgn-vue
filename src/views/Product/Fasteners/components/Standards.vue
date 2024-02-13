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
              <div class="text-title weight">
                •ASTM - American Society of Mechanical Engineers
              </div>
              <div class="text-title weight">
                •ANSI - The American National Standards Institute
              </div>
              <div class="text-title weight">
                •SAE - Society of Automotive Engineers Standards
              </div>
              <div class="text-title weight">
                •ISO - International Organization for Standardization
              </div>
              <div class="text-title weight">
                •DIN - German Institute for Standardization
              </div>
              <div style="margin-top: 1rem">
                Note: BNG may also follow custom specifications or design
                standards according to the customer requirements.
              </div>
            </el-col>
            <el-col :span="12"
              ><img src="/imgs/Product/Fasteners/standard_page_01.png" />
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
    margin-top: 15rem;
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
          font-size: 1.2rem;
          color: rgb(93, 93, 93);
        }
        img {
          width: 120%;
        }
      }
    }
  }
}
</style>
