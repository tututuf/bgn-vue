<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Fittings/Application.png" alt="" />
        </div>
        <div>
          <el-row >
            <el-col :span="6">
              <img src="/imgs/Product/Piping_spool/applications_01.jpg"
            /></el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Piping_spool/applications_02.jpg" />
            </el-col>
            <el-col :span="6"
              ><img src="/imgs/Product/Piping_spool/applications_03.jpg" />
            </el-col>
            <el-col :span="6">
              <img src="/imgs/Product/Piping_spool/applications_04.jpg"
            /></el-col>
          </el-row>
        </div>
      </div>
      <div style="width: 100%">
        <img
          src="/imgs/Product/Piping_spool/Piping_Spool_bkg_03.png"
          style="width: 100%; position: absolute; left: 0; bottom: 0"
        /><router-link to="/quote">
          <img
            src="/imgs/ContactUs/get_a_quote_button.png"
            style="
              width: 15rem;
              position: absolute;
              bottom: 2rem;
              left: 50%;
              margin-left: -7.5rem;
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
    margin-bottom: 20rem;

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
