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
              <div style="margin-bottom: 1rem">
                BNG offer valves that meet the following international and
                industry-specific standards:
              </div>
              <div class="text-title">•API - American Petroleum Institute</div>
              <div class="text-title">
                •ASME - American Society of Mechanical Engineers
              </div>
              <div class="text-title">
                •AWWA - American Water Works Association
              </div>
              <div class="text-title">
                •CSA - Canadian Standards Association
              </div>
              <div class="text-title">
                •DIN - German Institute for Standardization
              </div>
              <div class="text-title">•CSN - Czech technical standard</div>
              <div class="text-title">•EN - European Standards</div>
              <div class="text-title">•BS - British Standards</div>
              <div class="text-title">
                •ISO - International Organization for Standardization
              </div>
              <div class="text-title">
                •MSS - The Manufacturers Standardization Society of the
                &nbsp;Valve and Valve Industry
              </div>
              <div class="text-title">
                •JIS - Japanese Standards Association
              </div>
              <div class="text-title">
                •GOST - Government Standards of Russia
              </div>
              <div class="text-title">
                •AS/NZS - Australian/New Zealand Standard
              </div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/Valve/Stardard_page_image.png" />
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
          width: 180%;
          margin-top: -4rem;
          margin-left: -8rem;
        }
      }
    }
  }
}
</style>
