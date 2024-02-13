<template>
  <div
    class="page"
    style="
      background-image: url('/imgs/Product/Fittings/product_fittings_bkg_02.jpg');
    "
  >
    <div class="page-content">
      <div class="text-page" style="align-items: flex-end">
        <div style="width: 40rem">
          <div class="title">FITTINGS</div>
          <div class="text">
            BNG has achieved the title of being master at providing the
            tailoredsolutions to theofittings problems for safe, clever, and
            globalconnections. We provide the solutions according to the
            requirementsof the clients in a flexible, quick, and appropriate
            way.
          </div>
        </div>
      </div>
      <div class="text-page">
        <div class="title">TYPES</div>
        <div class="row-box">
          <div
            class="item"
            v-for="(item, index) in fittings"
            :key="index"
            style="margin: 0 1rem"
          >
            <img :src="item.imgPath" style="width: 100%" />
            <div class="bloder-title" style="font-size: 2rem">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="table-box">
          <p class="head">
            <span class="cell" style="font-size: 1.5rem">
              PRESSURE<br />RATING
            </span>
            <span class="cell" style="font-size: 1.5rem"> FUNCTION </span>
            <span class="cell" style="font-size: 1.5rem"> SHAPE </span>
            <span class="cell" style="font-size: 1.5rem"> SIZE </span>
          </p>
          <div class="row" v-for="(array, index) in fittingsData" :key="index">
            <span class="cell" v-for="(item, i) in array" :key="i">{{
              item
            }}</span>
          </div>
        </div>
      </div>
      <div class="text-page">
        <div style="width: 60%" class="text-box">
          <div class="title" style="line-height: 1">MATERIAL</div>
          <ul class="bloder-title" style="margin-top: 0">
            <li>Carbon Steel: A105, A234 WPB</li>
            <li>Stainless Steel: 304, 316, 317L, 321, 347</li>
            <li>Alloy Steel: F11, F22, F91</li>
            <li>Duplex Stainless Steel: 2205,2507</li>
            <li>Nickel Alloys: Monel, Inconel, Hastelloy</li>
            <li>Aluminum: 6061-T6,5083</li>
            <li>Copper and Copper Alloys: C12200, C26000</li>
            <li>Brass: C36000</li>
            <li>Plastic: PVC，CPVC，PP HDPE</li>
            <li>Malleable lron: ASTM A197</li>
          </ul>
          <div>
            Note: The selection of the material depends on the service
            conditions, including temperaturepressure, and the type of fluid or
            gas being conveyed. The choice of material may also beinfluenced by
            environmental and regulatory requirements.
          </div>
        </div>
        <div style="width: 60%" class="text-box">
          <div class="title" style="margin-top: 0; line-height: 1">
            APPLICATIONS
          </div>
          <div>
            The specific type of fiing used depends on the pressure,
            temperature, material,andconnection requirements of the application.
            Fittings are commonly used to connect, branchterminate, and change
            the direction of pipes and tubes in various systems. Fittings by BNG
            arecommonly used in a variety of applications:
          </div>
          <ul class="bloder-title" style="margin-bottom: 0">
            <li>
              Piping systems for oil and gas, chemical, water treatment,andpower
              generation industries
            </li>
            <li>Pressure vessel and heat exchanger connections</li>
            <li>Plumbing and HVAC systems</li>
            <li>Fire protection systems</li>
            <li>Mining and minerals processing</li>
            <li>Marine and offshore applications</li>
            <li>Process and plant piping</li>
            <li>Construction and infrastructure projects</li>
            <li>Food and beverage processing</li>
            <li>Pharmaceutical and medical industries.</li>
          </ul>
        </div>
      </div>
      <div
        class="text-page"
        style="padding-top: 3rem; justify-content: flex-start"
      >
        <div style="width: 60%" class="text-box">
          <div class="title">STANDARDS</div>
          <div>
            BNG manufactures flanges according to industry standards such as:
          </div>
          <ul class="bloder-title">
            <li>
              ASME B16.9 - Factory-Made Wrought Steel Buttwelding Fittings
            </li>
            <li>MSS SP-75 - High Test Wrought Welding Fittings</li>
            <li>
              ASTM A234 - Piping Fittings of Wrought Carbon Steel and AlloySteel
              for Moderate and High Temperature Service
            </li>
            <li>EN 10253 - Butt-Welding Pipe Fittings</li>
            <li>
              BS 1640 - Specification for Steel Pipe Fittings,Screwed
              andSocket-welding for the Petroleum Industry
            </li>
            <li>ASME B31.3 - Process Piping</li>
            <li>CSA Z245.1 - Steel Pipe, Tubing, Fittings and Flanges</li>
            <li>
              BS 21 - Pipe Threads for Tubes and Fittings where Pressuretight
              Joints are required.
            </li>
          </ul>
          <div>
            Note: BNG may also follow custom specificationsdesign standards
            according to theorcustomer requirements.
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
interface fittingInter {
  imgPath: string;
  name: string;
}
const fittings = ref<Array<fittingInter>>([
  { imgPath: "/imgs/Product/Fittings/fittings_01.jpg", name: "BUTT-WELD" },
  { imgPath: "/imgs/Product/Fittings/fittings_02.jpg", name: "SOCKET-WELD" },
  { imgPath: "/imgs/Product/Fittings/fittings_03.jpg", name: "SCREWED" },
  { imgPath: "/imgs/Product/Fittings/fittings_04.jpg", name: "FLANGED" },
]);

const fittingsData = ref<Array<[string, string, string, string]>>([
  ["Class 150", "Elbow", "Long Radius", "Nominal Pipe Size (NPS)"],
  ["Class 300", "Tee", "Short Radius", "Outside Diameter (OD)"],
  ["Class 600", "Reducer", "Concentric", "Others"],
  ["Class 900", "Cap", "Eccentric", ""],
  ["Class 1500", "Coupling", "Others", ""],
  ["Others", "Cross", "", ""],
  ["", "Nipple", "", ""],
  ["", "Bushing", "", ""],
  ["", "Union", "", ""],
  ["", "Others", "", ""],
]);
</script>

<style lang="scss" scoped></style>
