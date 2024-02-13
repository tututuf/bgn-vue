<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Standard.png" alt="" />
        </div>
        <div>
          <el-row>
            <el-col :span="12"
              ><div style="margin-bottom: 1rem">
                BNG manufactures fittings according to industry standards such
                as:
              </div>
              <div class="text-title weight">
                •API - American Petroleum Institute
              </div>
              <div class="text-title weight">
                •ASME - American Society of Mechanical Engineers
              </div>
              <div class="text-title weight">
                •AWWA - American Water Works Association
              </div>
              <div class="text-title weight">
                •CSA - Canadian Standards Association
              </div>
              <div class="text-title weight">
                •DIN - German Institute for Standardization
              </div>
              <div class="text-title weight">
                •CSN - Czech technical standard
              </div>
              <div class="text-title weight">•EN - European Standards</div>
              <div class="text-title weight">•BS - British Standards</div>
              <div class="text-title weight">
                •ISO - International Organization for Standardization
              </div>
              <div class="text-title weight">
                •MSS - The Manufacturers Standardization Society of the
                &nbsp;Valve and Fittings Industry
              </div>
              <div class="text-title weight">
                •JIS - Japanese Standards Association
              </div>
              <div class="text-title weight">
                •GOST - Government Standards of Russia
              </div>
              <div class="text-title weight">
                •AS/NZS - Australian/New Zealand Standard
              </div>
              <div style="margin-top: 1rem">
                Note: BNG may atso follow custom speclication or design standerd
                according to the customer requirements.
              </div>
            </el-col>
            <el-col :span="12"
              ><img src="/imgs/Product/Fittings/Standard_01.png" />
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
    margin-top: 10rem;
    .type-box {
      width: 70%;
      margin: auto;
      margin-top: 15rem;
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
          font-size: 1.2rem;
          color: rgb(93, 93, 93);
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
