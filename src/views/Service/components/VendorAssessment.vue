<template>
  <div class="sub-page">
    <div class="l_box">
      <div class="content">
        <div class="image-box" style="font-family: Swis721_BlkCn_BT">
          <span
            >Vendor <br />
            Assessment</span
          >
          <img src="/imgs/Services/Inspection/inspection_B.png" />
        </div>
        <div class="title">Products</div>
        <div style="margin-bottom: 0.5rem">
          Our team of inspectors will carry out a vendor audit, of all potential
          suppliers. and make recommendations if needed to meet your's and our
          assessment criteria.
        </div>
        <div>
          We also offer a complete quality control audit including an assessment
          of suppliers' internal qualit ymanagement systems. Our vendor audits
          are usually conducted in four phases
          <!-- <span style="font-family: tt0144m"> 4 phases.</span> -->
        </div>
      </div>
    </div>
    <div class="r_box">
      <div class="content">
        <div v-for="(item, index) in vendorDetail" :key="index">
          <p class="title">
            {{ item.title }}
          </p>
          <p class="info">{{ item.msg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface vendorInfo {
  title: string;
  msg: string;
}
const vendorDetail = ref<Array<vendorInfo>>([
  {
    title: "Preparation",
    msg: "We make sure that each supplier receives a detailed questionnaire. This includes information about their company and references. They are also required to provide a list of detailed specifications that will help us build an accurate company profile of their products and services.",
  },
  {
    title: "Assessment",
    msg: "Our audit teams thoroughly plan and coordinate the on-site inspections, audits and assessments of suppliers and subcontractors.",
  },
  {
    title: "Evaluation",
    msg: "We create a supplier evaluation matrix according to the outcome of the vendor audits, focusing on their strengths and weaknesses and highlighting areas where they may have difficulties or bottlenecks.",
  },
  {
    title: "Conclusion",
    msg: "Our team creates builds a evaluation matrix which enables us to build a global short list of best suppliers. This helps us identify companies that are operating at desired levels, as well as those performing at substandard levels. It is even possible to make recommendations on how to improve their processes so that they can reach and perform their operations at the highest standards.",
  },
]);
</script>

<style lang="scss" scoped>
.sub-page {
  // background: #fff;
  color: rgb(102, 102, 102);
  .title {
    font-family: bolder_Swis;
    font-size: 1.3rem;
  }
}
</style>
