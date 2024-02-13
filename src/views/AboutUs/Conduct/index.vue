<template>
  <div class="contain">
    <div class="box">
      <div class="title">
        <img src="/imgs/AboutUs/Conduct/Policy.png" alt="" />
      </div>
      <div class="text">
        <div class="text1">
          BNG Flange Group is committed to ensuring the safety and protection of
          people worldwide. We support ending the violence and human rights
          violations in the mining of certain minerals by complying with:
        </div>
        <div class="text2">
          - Regulation (EU) 2017/821 of the European Parliament and of the
          Council of 17 May 2017 laying down supply chain due diligence
          obligations for Union importers of tin, tantalum and tungsten, their
          ores, and gold originating from conflict-affected and high-risk areas.
        </div>
        <div class="text3">
          - The U.S. Securities and Exchange Commission adopted final rules to
          implement reporting and disclosure requirements related to "conflict
          minerals," as directed by the Dodd-Frank Wall Street Reform and
          Consumer Protection Act of 2010. The U.S. Secretary of State may
          designate other minerals in the future. We support these requirements
          to further the humanitarian goal of ending violent conflict in
          designated regions, which has been partially financed by the
          exploitation and trade of "conflict minerals"
        </div>
        <div class="text-title weight">Our Commitment:</div>
        <div class="text4">
          1. Support the aims and objectives of the legislation on the supply of
          "conflict minerals".
        </div>
        <div class="text5">
          2. Do not knowingly procure specified materials that originate in the
          "conflict region".
        </div>
        <div class="text6">
          3. Ensure compliance with these requirements and demand our suppliers
          to undertake reasonable due diligence with their supply chains to
          assure that specified metals are not being sourced from conflict
          regions.
        </div>
        <div class="text7">
          In case that we discover the use of these minerals in products we sell
          to be "non-conflict free", in any material, parts or components we
          procure, we will take appropriate actions to transition products to be
          "conflict free".
        </div>
        <div class="text8">Shenzhen, April 2023</div>
        <div class="text9">GM of BNG Flange Group</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background: #fff;
  overflow-y: auto;

  .box {
    width: 70vw;
    // height: 80vh;
    // background: pink;
    margin: auto;
    margin-top: 10rem;

    .title {
      text-align: left;
      margin-bottom: 2rem;

      img {
        width: 50%;
      }
    }

    .text {
      font-size: 1.2rem;
      color: rgb(77, 77, 77);
      text-align: left;

      .text-title {
        font-size: 1.4rem;
        color: rgb(44, 44, 44);
        margin: 0.5rem 0;
      }

      .text7 {
        margin: 1.5rem 0;
      }
    }
  }
}
</style>
