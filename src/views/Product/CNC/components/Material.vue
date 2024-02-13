<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <!-- <img src="/imgs/Product/Flanges/Material.png" alt="" /> -->
          <img src="/imgs/Product/CNC/CNC_FAQ.png" style="width: 13%" />
        </div>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="text-title weight">
                Will I get finishing certificates when my CNC parts are made in
                China?
              </div>
              <div>
                Yes, every BNG part comes with a MTC certificate. Other
                certificates and documents may be varied depending on different
                standards and requirements.
              </div>
              <div class="text-title weight">
                Is there any quality difference between BNG CNC parts and parts
                that are manufactured by regular suppliers in Asia?
              </div>
              <div>
                Yes. We understand that having good machines alone is not enough
                to achieve optimal performance. At BNG, we have zero tolerance
                for potential hazards. This is why we pay attention to details
                such as machine calibration, machine maintenance, etc. Our
                engineers also know how to properly inspect parts and what
                testing equipment is appropriate to use for different parts and
                areas to measure.
              </div>
              <div>
                To guarantee exceptional results, we assign only our experienced
                European engineers to handle each CNC project. These engineers
                possess advanced proficiency in CAD, CAM software and more,
                which are integral to the CNC machining process, allowing us to
                deliver unparalleled precision and efficiency.
              </div>
              <div class="text-title weight">Does BNG inspect parts?</div>
              <div>
                All finished parts are manufactured and inspected in accordance
                with Material & Manufacturing Standards, and our Inspection &
                Sampling Plan, and in addition to your specifications if
                provided.
              </div>
            </el-col>
            <el-col :span="12"><img src="/imgs/Product/CNC/FAQ_01.png" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div style="width: 100%; margin-top: 10rem">
        <img src="/imgs/Product/CNC/CNC_bkg_03.png"
          style="width: 100%; position: absolute; left: 0; bottom: 0;" /><router-link to="/quote">
          <img src="/imgs/ContactUs/get_a_quote_button.png"
            style="position: absolute; bottom: 2rem; width: 15rem;left: -7.5rem;margin-left: 50%;" />
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
        font-size: 1rem;

        .text-title {
          margin-top: 0.2rem;
          font-size: 1.3rem;
          color: rgb(93, 93, 93);
        }

        img {
          width: 120%;
          margin-left: 2rem;
        }
      }
    }
  }
}
</style>
