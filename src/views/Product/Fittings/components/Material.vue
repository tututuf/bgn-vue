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
              <div class="text-title weight">Carbon Steel</div>
              <div>ASTM A105, A106, A420, A234 WPB WPL6, S235JR...</div>
              <div class="text-title weight">Stainless Steel</div>
              <div>AASTM A182-F304, F304L, F316, F316Ti, F321...</div>
              <div class="text-title weight">Duplex Stainless Steel</div>
              <div>ASTM A182-2205, 2507...</div>
              <div class="text-title weight">Alloy stee</div>
              <div>ASTM A182-F11, F22, F91...</div>
              <div class="text-title weight">Nickel alloys</div>
              <div>
                ASTM A182-Alloy 20 (F20, N08020), ASTM B564 200 (N02200), 201
                (N02201), 600 (N06600), 400 (N04400), C276 (N10276)...
              </div>
              <div class="text-title weight">Aluminum</div>
              <div>6061-T6,5083</div>
              <div class="text-title weight">Copper and copper alloys</div>
              <div>C12200, C26000</div>
              <div class="text-title weight">Brass</div>
              <div>C36000</div>
              <div class="text-title weight">Malleable iron</div>
              <div>ASTM A197</div>
              <div style="margin-top: 0.2rem">
                Note: The selection of the material depends on the service
                conditions, including temperature, pressure, and the type of
                fluid or gas being conveyed. The choice of material may also be
                influenced by environmental and regulatory requirements.
              </div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Fittings/Material_01.png" />
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
          margin-top: 0.2rem;
          font-size: 1.3rem;
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
