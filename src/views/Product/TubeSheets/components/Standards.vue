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
              <div class="text-title">
                •EN 13445 -European Standard for Unfired Pressure Vessels
              </div>
              <div class="text-title">
                •BPVC-ASME- Boiler and Pressure Vessel Code
              </div>
              <div class="text-title">
                •AD Merkblatter -German Standard for Pressure Vessels
              </div>
              <div class="text-title">•PED-Pressure Equipment Directive</div>
              <div class="text-title">
                •ISO-International Organization for Standardization
              </div>
              <div class="text-title">
                •ASTM-American Society for Testing and Materials
              </div>
              <div class="text-title">
                •NACE-National Association of Corrosion Engineers
              </div>
              <div class="text-title">
                •TEMA-Tubular Exchanger Manufacturers Association
              </div>
              <div style="margin-top: 1rem">
                Note: The exact standards used can vary depending on the
                specific application, industry, and jurisdiction, so it is
                important to consult with experts for specific requirements
                before making any decisions.
              </div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Tube_sheet/standard_01.png" />
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
          font-family: bolder_Swis;
          font-size: 1.2rem;
          color: rgb(77, 77, 77);
        }

        img {
          width: 110%;
          margin-top: -4rem;
        }
      }
    }
  }
}</style>
