<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Fittings/Application.png" alt="" />
        </div>
        <div class="text">
          BNG offer valves for a wide range of applications, including:
        </div>
        <div>
          <el-row class="type-row">
            <el-col :span="6">
              <img src="/imgs/Product/Valve/Application01.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Valve/Application02.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Valve/Application03.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Valve/Application04.jpg"
            /></el-col> </el-row
          ><el-row class="type-row">
            <el-col :span="6">
              <img src="/imgs/Product/Valve/Application05.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Valve/Application06.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Valve/Application07.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Valve/Application08.jpg"
            /></el-col>
          </el-row>
        </div>
      </div>
      <div style="width: 100%; margin-top: 10rem">
        <img
          src="/imgs/Product/Valve/Valves_bkg03.png"
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  // padding-top: 10rem;
  .box {
    // height: 100vh;
    margin-top: 10rem;

    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;
        margin-bottom: 1rem;

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
          transition: 0.5s all ease;

          &:hover {
            filter: grayscale(1);
          }
        }
      }
    }

    .text {
      width: 100%;
      text-align: left;
      color: rgb(102, 102, 102);
    }
  }
}
</style>
