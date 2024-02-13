<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Material.png" alt="" />
        </div>
        <div>
          <el-row>
            <el-col :span="12">
              <div style="margin-bottom: 1rem">
                The materials used to make pipes and tubes at BNG Group include
                carbon steel, stainless steel, alloy steel, aluminum and copper.
              </div>
              <div class="text-title">Carbon Steel</div>
              <div>
                ASTM A106, API 5L X 42toX70,etc., PSL - 1/PSL - 2, ASTM A106 B,
                ASTM A53 B, ASTM A252 Grade 3....
              </div>
              <div class="text-title">Stainless Steel</div>
              <div>304, 304L, 316, 316L, 316 Ti...</div>
              <div class="text-title">Duplex Stainless Steel</div>
              <div>2205, 2750...</div>
              <div class="text-title">Alloy stee</div>
              <div>ASTM A335-P11, P12, P22, P91, ASTM A213-T11, T12,T91...</div>
              <div class="text-title">Aluminum</div>
              <div>1100,2014, 2024,5052,5454...</div>
              <div class="text-title">Copper Alloy</div>
              <div>Brass, Aluminum bronze, Admiralty brass...</div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Pipe_Tube/Material_image_01.jpg" />
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

  //   padding-top: 10rem;
  .box {
    margin-top: 10rem;

    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;
        margin-bottom: 1rem;

        img {
          width: 20%;
        }
      }

      .el-row {
        text-align: left;
        color: rgb(102, 102, 102);

        .text-title {
          font-family: "bolder_Swis";
          margin-top: 0.2rem;
          font-size: 1.3rem;
          color: rgb(93, 93, 93);
        }

        img {
          width: 150%;
          margin-top: -6rem;
        }
      }
    }
  }
}</style>
