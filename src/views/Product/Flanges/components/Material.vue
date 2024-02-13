<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Material.png" alt="" />
        </div>
        <div class="row">
          <el-row>
            <el-col :span="10">
              <div>
                BNG provides a vast variety of materials for flange
                manufacturing according to the customers' requirements as given
                below:
              </div>
              <div class="text-title weight">Carbon Steel</div>
              <div class="texts">ASTM A105, ASTM 350Gr. LF2, LF3...</div>
              <div class="text-title weight">Stainless Steel</div>
              <div class="texts">
                ASTM A182 - F304(L), F316(L), F316LN, F317L...
              </div>
              <div class="text-title weight">Duplex Stainless Steel</div>
              <div class="texts">
                ASTM A182 - 2205 (F51, S31803/F60, S32205), 2507(F53, S32750)...
              </div>
              <div class="text-title weight">Alloy Steel</div>
              <div class="texts">ASTM A182 - F5, F9, F11, F12, F22, F91...</div>
              <div class="text-title weight">Monel</div>
              <div class="texts">ASTM B564 - 400 (N0440), 500 (N05500)...</div>
              <div class="text-title weight">Ductile Iron</div>
              <div class="texts">ASTM A395, ASTM A536...</div>
            </el-col>
            <el-col :span="14"><img src="/imgs/Product/Flanges/Material_01.jpg" />
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
    margin: auto;

    .type-box {
      width: 70%;
      margin: auto;
      margin-top: 15rem;

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
          margin-top: 1rem;
          font-size: 1.3rem;
          color: rgb(93, 93, 93);
        }

        .texts {}

        img {
          width: 170%;
          margin-top: -3rem;
          margin-left: 0rem;
        }
      }
    }
  }
}
</style>
