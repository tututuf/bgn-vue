<template>
  <div
    class="page"
    style="
      background-image: url('/imgs/Product/Piping_spool/product_piping_spool_bkg_02.jpg');
    "
  >
    <div class="page-content">
      <div class="text-page">
        <div class="title" style="line-height: 1; margin-bottom: 1rem">
          PIPING<br />SPOOLS
        </div>
        <div class="text">
          Piping spools are essentially pipe sections that are manufactured ina
          fabrication facility and then transported to the construction
          sitewhere they are assembled together to form the final pipeline
          system.This process reduces the amount of welding that needs to be
          doneon site, thereby reducing the cost and time associated with
          theinstallation of pipelines.
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="text-page">
        <div style="width: 60%" class="text-box">
          <div class="title" style="line-height: 1">CLASSIFICATION</div>
          <div>
            Piping spools are classified based on their end connection type and
            the type of fabrication they undergo. The end connection types
            include <span class="wight-text">flanged, threaded</span> ,and
            <span class="wight-text">socket welded,</span> while the fabrication
            types include
            <span class="wight-text"> butt-weld, socket-weld,</span> and
            <span class="wight-text">threaded.</span>
          </div>
        </div>

        <div style="width: 60%" class="text-box">
          <div class="title" style="line-height: 1">MATERIAL</div>
          <div>
            Piping spools at BNG are typically made from a variety of materials
            including carbon steel, stainless steel, and aluminum. The choice of
            material depends on the type of fluid or gas being transported, the
            temperature and pressure conditions of the pipeline, and the
            corrosive environment. For example, stainless steel is often used in
            pipelines that carry corrosive fluids, while carbon steel is used
            for pipelines that carry non-corrosive fluids.
          </div>
        </div>

        <div style="width: 60%" class="text-box">
          <div class="title" style="line-height: 1">APPLICATIONS</div>
          <div>
            Not only limited to oil and gas industry, BNG have a wide range of
            applications for piping spools in various industries, including:
          </div>
          <ul class="bloder-title" style="margin-top: 0">
            <li>Petrochemical</li>
            <li>Oil and Gas</li>
            <li>Power Generation</li>
            <li>Water Treatment Industries</li>
          </ul>
          <div>
            They are used in the construction of pipelines for transporting oil,
            gas, water, and chemicals, as well as in the construction of piping
            systems for power plants and industrial processes.
          </div>
        </div>
      </div>
      <div
        class="text-page"
        style="justify-content: flex-start; padding-top: 3rem"
      >
        <div style="width: 70%" class="text-box">
          <div class="title" style="line-height: 1; margin-bottom: 1rem">
            STANDARDS
          </div>
          <div>
            Certainly, here are the standards for piping spools available at BNG
            FLANGE GROUP:
          </div>
          <div style="margin-bottom: 1rem">
            <div v-for="(item, index) in standardsInfo" :key="index">
              <div>
                {{ index + 1 }}.&nbsp;
                <span class="wight-text standards-title">{{ item.title }}</span>
              </div>
              <ul style="margin: 0 1rem">
                <li v-for="(msg, i) in item.detail" :key="i">{{ msg }}</li>
              </ul>
            </div>
          </div>
          <div>
            These standards ensure that piping spools are designed and
            fabricated to meet the specific requirements of each application,
            ensuring the reliability and performance of the final pipeline
            system.
          </div>
        </div>
      </div>
      <LayoutBottom></LayoutBottom>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutBottom from "@/Layout/LayoutBottom.vue";
import { ref } from "vue";
interface standardsInfoInter {
  title: string;
  detail: Array<string>;
}
const standardsInfo = ref<Array<standardsInfoInter>>([
  {
    title: "American Society of Mechanical Engineers (ASME) B31.3:",
    detail: [
      "Specifies the design, construction, and testing requirements for piping systems used in the petrochemical, oil and gas, and nuclear industries.",
      "Covers the materials, fabrication, assembly, and inspection of piping spools.",
      "Sets standards for welding, pressure testing, and the use of supports,anchors,and restraints.",
    ],
  },
  {
    title: "American Society of Mechanical Engineers (ASME) B31.1:",
    detail: [
      "Specifies the design and construction requirements for power piping systems.",
      "Includes requirements for piping spools used in the power generation industry.",
      "Covers the materials, fabrication, assembly, and inspection of piping spools.",
    ],
  },
  {
    title: "American Society of Mechanical Engineers (ASME) B31.4:",
    detail: [
      "Specifies the design and construction requirements for liquid pipeline systems.",
      "Includes requirements for piping spools used in the transportation of liquids.",
      "Covers the materials, fabrication, assembly, and inspection of piping spools.",
    ],
  },
  {
    title: "American Petroleum Institute (API)1104:",
    detail: [
      "Specifies the welding requirements for pipelines and piping systems used in the oil and gas industry.",
      "Sets standards for welding procedures, welder qualifications, and the inspection of welds.",
      "Includes requirements for piping spools used in oil and gas pipelines.",
    ],
  },
]);
</script>

<style lang="scss" scoped>
.wight-text {
}

.title {
  font-size: 5rem !important;
}

.text-box + .text-box {
  margin-top: 3rem !important;
}

.standards-title {
  font-size: 1.2rem;
}
</style>
