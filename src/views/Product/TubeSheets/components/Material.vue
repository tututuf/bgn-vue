<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Material.png" alt="" />
        </div>
        <div class="text-box">
          <el-row>
            <el-col :span="12" style="margin-right: 0rem">
              <div style="margin-bottom: 0.4rem">
                The choice of material depends on the operating conditions and
                the type of fluid being used in the heat exchanger or pressure
                vessel. Factors such as temperature, pressure, and corrosion
                resistance are considered when selecting the appropriate
                material for a specific application. Tube sheets are commonly
                manufactured using the following materials at BNG Flange Group
                by keeping the above parameters in knowledge:
              </div>
              <div class="text-title">Carbon Steel</div>
              <div>ASTM A105, ASTM 350Gr. LF2, LF3...</div>
              <div class="text-title">Stainless Steel</div>
              <div>ASTM A182 - F304(L), F316(L), F316LN, F317L...</div>
              <div class="text-title">Duplex Stainless Steel</div>
              <div>
                ASTM A182 - 2205 (F51, S31803/F60, S32205), 2507(F53, S32750)...
              </div>
              <div class="text-title">Nickel Alloys</div>
              <div>ASTM B162 - 200 (N02200), 201(N02201)...</div>
              <div class="text-title">Copper Alloys</div>
              <div>Admiralty brass, Aluminum bronze...</div>
              <div class="text-title">Titanium</div>
              <div>ASTM B265 - 2, 5 (Ti6AI4V), 7...</div>
              <div class="text-title">Aluminum</div>
              <div>1100,2014, 2024, 5454...</div>
              <div style="margin-top: 0.2rem">
                Note: The selection of the material depends on the service
                conditions, including temperature, pressure, and the type of
                fluid or gas being conveyed. The choice of material may also be
                influenced by environmental and regulatory requirements.
              </div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Tube_sheet/material_01.png" />
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

      .text-box {
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
            width: 110%;
            margin-left: 2rem;
          }
        }
      }
    }
  }
}</style>
