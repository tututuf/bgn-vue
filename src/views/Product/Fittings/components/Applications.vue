<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Fittings/Application.png" alt="" />
        </div>
        <div>
          <el-row class="type-row">
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application01.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application02.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application03.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application04.jpg"
            /></el-col> </el-row
          ><el-row class="type-row">
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application05.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application06.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application07.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application08.jpg"
            /></el-col>
          </el-row>
          <el-row class="type-row">
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application09.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application10.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Fittings/Application11.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Fittings/Application12.jpg"
            /></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div style="width: 100%; margin-top: 10rem">
      <img
        src="/imgs/Product/Fittings/Fittings_bkg_03.png"
        style="width: 100%; position: absolute; left: 0; bottom: 0"
      /><router-link to="/quote">
        <img
          src="/imgs/ContactUs/get_a_quote_button.png"
          style="
            position: absolute;
            bottom: 2rem;
            width: 15rem;
            left: -7.5rem;
            margin-left: 50%;
          "
        />
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  // padding-top: 10rem;
  .box {
    margin-top: 3rem;

    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;
        // margin-bottom: 1rem;

        img {
          width: 30%;
        }
      }

      .el-row {
        margin-top: 1rem;
        height: 11rem;

        .el-col {
          padding: 0.5rem;
        }

        img {
          width: 100%;
          transition: all 0.5s ease;

          &:hover {
            filter: grayscale(1);
          }
        }
      }
    }
  }
}
</style>
