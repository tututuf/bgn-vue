<template>
  <div class="contain" style="background: #ededed">
    <!-- <img src="/imgs/Product/CNC/CNC_bkg_02.png" style="width: 100%" /> -->
    <div class="type-box">
      <div class="title-box" style="margin-bottom: 2rem">
        <img src="/imgs/Product/CNC/CNC_Why.png" />
      </div>
      <div>
        <el-row>
          <el-col :span="12">
            <div>
              <span class="text-title weight">•Quality Control: </span>
              Navigating by rigorous quality control standards and profound
              expertise, BNG engineering team ensures that all parts meet the
              desired specifications and quality standards.
            </div>
            <div>
              <span class="text-title weight">•Regulatory Compliance: </span>
              A better understanding of international regulations and compliance
              requirements can be crucial for products intended for global
              markets, which is exactly what we are good at.
            </div>
            <div>
              <span class="text-title weight">•Expertise and Innovation: </span>
              We bring unique expertise, innovation, and design capabilities
              that can help improve product performance or enhance cost savings.
            </div>
            <div>
              <span class="text-title weight"
                >•Intellectual Property Protection: :
              </span>
              Does it ever happen to you that you send a drawing to suppliers,
              only to find the exact same product at your competitor’s
              warehouse? Well, with BNG, this will not happen to you, because we
              take business ethics very seriously.
            </div>
            <div>
              <span class="text-title weight"
                >•Communication and Collaboration:
              </span>
              BNG engineering team help facilitate easier communication, making
              language barriers, problem solving and other working style
              differences less challenging than working directly with non
              English-speaking vendors, especially when it comes to
              high-precision products.
            </div>
            <div>
              <span class="text-title weight">•Risk Diversification: </span>
              By working with BNG team, you can spread your supply chain risks,
              reducing the impact of disruptions in a single location.
            </div>
          </el-col>
          <el-col :span="12"
            ><img src="/imgs/Product/CNC/Why_01.png" />
          </el-col>
        </el-row>
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
  overflow-y: auto;

  .type-box {
    width: 70%;
    margin: auto;

    .title-box {
      text-align: left;
      color: rgb(77, 77, 77);

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
</style>
