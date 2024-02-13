<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Application.png" alt="" />
        </div>
        <div>
          <el-row>
            <el-col :span="6">
              <img src="/imgs/Product/Flanges/Application01.jpg" /></el-col>
            <el-col :span="6"><img src="/imgs/Product/Flanges/Application02.jpg" />
            </el-col>
            <el-col :span="6"><img src="/imgs/Product/Flanges/Application03.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Flanges/Application04.jpg" /></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div style="width: 100%">
      <img src="/imgs/Product/Pipe_Tube/pipe&tube_bkg_03.png"
        style="width: 100%; position: absolute; left: 0; bottom: 0" /><router-link to="/quote">
        <img src="/imgs/ContactUs/get_a_quote_button.png" style="
            width: 15rem;
            position: absolute;
            bottom: 2rem;
            left: 50%;
            margin-left: -7.5rem;
          " />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  position: relative;
  min-height: 80vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  // padding-top: 10rem;
  .box {
    margin-top: 7rem;
    margin-bottom: 20vh;

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
