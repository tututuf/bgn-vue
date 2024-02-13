<template>
  <div
    class="page"
    style="
      background-image: url('/imgs/Product/Valve/product_valve_bkg_02.jpg');
    "
  >
    <div class="page-content">
      <div class="text-page">
        <div style="width: 50%; margin-bottom: 3rem" class="text-box">
          <div class="title" style="line-height: 1; margin-bottom: 1rem">
            VALVES
          </div>
          <div>
            Valves are utilized for a variety of functions to perform including
            fluidcontrol and regulating the pressure and flow of a fluid in
            piping system, controlling the flow direction, throttling flow
            system, and improving the system safety in different industries. BNG
            serve major types of valves based on their industrial importance and
            usage.
          </div>
        </div>
      </div>
      <div class="text-page" style="height: auto">
        <div
          class="title"
          style="line-height: 1; margin-bottom: 1rem; font-size: 5rem"
        >
          TYPES
        </div>
        <div class="types-box">
          <div class="type" v-for="(item, index) in typesList" :key="index">
            <img :src="item.imgPath" />
            <div v-html="item.name" class="bloder-title" />
            <div class="small-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="text-page" style="padding: 1rem 13rem">
        <div style="width: 50%; margin-bottom: 2rem" class="text-box">
          <div class="title" style="line-height: 1; font-size: 5rem">
            MATERIAL
          </div>
          <div>
            BNG typically offer valves in a wide range of materials, including:
          </div>
          <ul>
            <li>Carbon Steel: ASTM A105, A350 LF2, A234 WPB</li>
            <li>Stainless Steel: ASTM A182 F304, F316, F317, F321, F347</li>
            <li>Alloy Steel: ASTM A182 F11F22, F91</li>
            <li>Duplex Stainless Steel: ASTM A182 F51, F53, F55</li>
            <li>Nickel Alloys: Monel, Inconel, Hastelloy</li>
            <li>Bronze: ASTM B62, B61, B584</li>
            <li>Cast Iron: ASTM A126, EN 1561</li>
            <li>Plastic: PVC, CPVC, PP HDPE</li>
          </ul>
        </div>
        <div style="width: 50%" class="text-box">
          <div class="title" style="line-height: 1; font-size: 5rem">
            APPLICATIONS
          </div>
          <div>
            BNG offer valves for a wide range of applications, including:
          </div>
          <ul>
            <li>
              <span>Oil and Gas: </span>
              <span
                >Pipelines, production platforms, refineries, and petrochemical
                plants.</span
              >
            </li>
            <li>
              <span>Power Generation: </span>
              <span
                >Thermal power plants, nuclear power plants,and renewable energy
                plants.</span
              >
            </li>
            <li>
              <span>Water and Wastewater Treatment:</span>
              <span>Treatment plants, pipelines,and pumping stations.</span>
            </li>
            <li>
              <span>Mining and Minerals: </span>
              <span>
                Ore processing, tailings management, and slurry
                transportation.</span
              >
            </li>
            <li>
              <span>Chemical and Pharmaceutical: </span>
              <span>Process plants, storage tanks,and pipelines.</span>
            </li>
            <li>
              <span>HVAC: </span>
              <span>
                Heating,ventilation, air conditioning,and refrigeration
                systems.</span
              >
            </li>
            <li>
              <span>Food and Beverage:</span>
              <span>
                Processing plants, bottling lines, and storage tanks.</span
              >
            </li>
            <li>
              <span>Marine: </span>
              <span> Offshore platforms, ships, and docks.</span>
            </li>
            <li>
              <span>Fire Protection:</span>
              <span>Sprinkler systems, standpipes, and foam systems.</span>
            </li>
            <li>
              <span>General Industry: </span>
              <span>Manufacturing plants, pipelines, and storage tanks.</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-page" style="padding: 1rem 13rem">
        <div style="margin-bottom: 15rem; width: 50%">
          <div
            class="title"
            style="line-height: 1; margin-bottom: 1rem; font-size: 5rem"
          >
            STANDARDS
          </div>
          <div>
            BNG offer valves that meet the following international and
            industry-specific standards:
          </div>
          <ul>
            <li>
              API (American Petroleum Institute): API 6D,API 600, API 607, API
              594, API 6FA
            </li>
            <li>
              ASME(American Society of Mechanical Engineers): ASME B16.34, ASME
              B16.5, ASME B16.25ASME B31.1, ASME B31.3
            </li>
            <li>
              BS(British Standards): BS 1873, BS 5352, BS EN 12516-1, BS EN
              1092-1, BS 2080
            </li>
            <li>
              DIN (Deutsches Institut fur Normung): DIN 3202, DIN 2501, DIN EN
              1092-1, DIN EN 12627, DIN EN 558-1
            </li>
            <li>
              EN (European Standards): EN 1092-1, EN 12266-1, EN 558-1, EN ISO
              15848-1, EN ISO 15848-2
            </li>
            <li>
              ISO (nternational Organization for Standardization): ISO 15848-1,
              ISO 15848-2, 1SO 9001, S0 14001, OHSAS 18001
            </li>
          </ul>
        </div>
      </div>
      <LayoutBottom></LayoutBottom>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutBottom from "@/Layout/LayoutBottom.vue";
import { ref } from "vue";
interface typesInter {
  imgPath: string;
  name: string;
  text: string;
}
const typesList = ref<Array<typesInter>>([
  {
    imgPath: "/imgs/Product/Valve/valve_01.jpg",
    name: "BALL VALVES",
    text: "Full-bore and reduced-bore, floating and trunnion-mounted, and two-piece,three-piece, and multi-piece design.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_02.jpg",
    name: "BUTTERFLY<br/>VALVES",
    text: "Wafer, lug,and double-flanged design,with lever,gear pneumatic,and electric actuators.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_03.jpg",
    name: "CHECK VALVES",
    text: "Swing,lift, dualplate, and ball-check design,in cast iron,carbon steel, stainless steel, and other materials.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_04.jpg",
    name: "GLOBE VALVES",
    text: "Angled and straight-pattern design, with hand wheel,gear,pneumatic,and electric actuators.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_05.jpg",
    name: "GATE VALVES",
    text: "Wedge-shaped and parallel-slab design,in cast iron,carbon steel,stainless steel,and other materials.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_06.jpg",
    name: "DIAPHRAGM<br/>VALVES",
    text: "Pneumatic and electric actuated, with metal and elastomeric diaphragms.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_07.jpg",
    name: "NEEDLES VALVES",
    text: "Precision control valves for highpressure and high-temperature applications.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_08.jpg",
    name: "PLUG VALVES",
    text: "Lubricated and non-lubricated design,with various materials and actuators.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_09.jpg",
    name: "SAFETY VALVES",
    text: "Relief valves for overpressure protection,with spring-loaded, bellows,and pilot-operated design.",
  },
  {
    imgPath: "/imgs/Product/Valve/valve_10.jpg",
    name: "SOLENOID<br/>VALVES",
    text: "Direct-acting, pilot-operated, and proportional design, with various materials and voltages.",
  },
]);
</script>

<style lang="scss" scoped></style>
