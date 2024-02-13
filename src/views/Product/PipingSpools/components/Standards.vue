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
                Certainly, here are the standards for piping spools available at
                BNG FLANGE GROUP:
              </div>
              <div class="num-title">
                1. American Society of Mechanical Engineers (ASME) B31.3:
              </div>
              <div class="text-title">
                •Specifies the design, construction, and testing requirements
                for piping systems used in the petrochemical, oil and gas, and
                nuclear industries.
              </div>
              <div class="text-title">
                •Covers the materials, fabrication, assembly, and inspection of
                piping spools.
              </div>
              <div class="text-title">
                •Sets standards for welding, pressure testing, and the use of
                supports,anchors,and restraints.
              </div>
              <div class="num-title">
                2. American Society of Mechanical Engineers (ASME) B31.1:
              </div>
              <div class="text-title">
                •Specifies the design and construction requirements for power
                piping systems.
              </div>
              <div class="text-title">
                •Includes requirements for piping spools used in the power
                generation industry.
              </div>
              <div class="text-title">
                •Covers the materials, fabrication, assembly, and inspection of
                piping spools.
              </div>
              <div class="num-title">
                3. American Society of Mechanical Engineers (ASME) B31.4:
              </div>
              <div class="text-title">
                •Specifies the design and construction requirements for liquid
                pipeline systems.
              </div>
              <div class="text-title">
                •Includes requirements for piping spools used in the
                transportation of liquids.
              </div>
              <div class="text-title">
                •Covers the materials, fabrication, assembly, and inspection of
                piping spools.
              </div>
              <div class="num-title">
                4. American Petroleum Institute (API)1104:
              </div>
              <div class="text-title">
                •Specifies the welding requirements for pipelines and piping
                systems used in the oil and gas industry.
              </div>
              <div class="text-title">
                •Sets standards for welding procedures, welder qualifications,
                and the inspection of welds.
              </div>
              <div class="text-title">
                •Includes requirements for piping spools used in oil and gas
                pipelines.
              </div>
              <!-- <div class="text-title">
                •AS/NZS - Australian/New Zealand Standard
              </div> -->
              <div style="margin-top: 1rem">
                These standards ensure that piping spools are designed and
                fabricated to meet the specific requirements of each
                application, ensuring the reliability and performance of the
                final pipeline system.
              </div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="11"
              ><img src="/imgs/Product/Piping_spool/standard_01.png" />
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
  // min-height: 100vh;
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

        .num-title {
          font-family: bolder_Swis;
          font-size: 1.3rem;
          color: rgb(66, 66, 66) !important;
        }

        .text-title {
          font-size: 1.2rem;
          color: rgb(93, 93, 93) !important;
        }

        img {
          width: 120%;
        }
      }
    }
  }
}
</style>
