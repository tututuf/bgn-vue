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
              <div style="margin-bottom: 1.5rem">
                BNG typically offer valves in a wide range of materials,
                including:
              </div>
              <div class="text-title">Carbon Steel</div>
              <div>ASTM A105, A350 LF2, A234 WPB</div>
              <div class="text-title">Stainless Steel</div>
              <div>ASTM A182 F304, F316, F317, F321, F347</div>
              <div class="text-title">Alloy stee</div>
              <div>ASTM A182 F11F22, F91</div>
              <div class="text-title">Duplex Stainless Steel</div>
              <div>ASTM A182 F51, F53, F55</div>

              <div class="text-title">Nickel alloys</div>
              <div>Monel, Inconel, Hastelloy</div>
              <div class="text-title">Bronze</div>
              <div>ASTM B62, B61, B584</div>
              <div class="text-title">Cast Iron</div>
              <div>ASTM A126, EN 1561</div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Valve/Material_page_image.png" />
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
  // height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  //   padding-top: 10rem;
  .box {
    margin-top: 15rem;

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
          font-family: bolder_Swis;
          margin-top: 0.2rem;
          font-size: 1.3rem;
          color: rgb(93, 93, 93);
        }

        img {
          width: 120%;
          margin-top: -4rem;
        }
      }
    }
  }
}</style>
