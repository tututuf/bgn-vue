<template>
  <div
    class="page"
    style="
      background-image: url('/imgs/Product/Tube_sheet/product_tubesheet_bkg_02.jpg');
    "
  >
    <div class="page-content">
      <div class="text-page" style="width: 50%">
        <div class="title" style="line-height: 1; margin-bottom: 1rem">
          TUBE<br />SHEET
        </div>
        <div>
          Tube sheets are flat, circular plates used as a support structure in
          heat exchangers, boilers, and pressure vessels. Their purpose is to
          provide a stable and secure support for tubes in these systems,
          preventing leaks and ensuring proper heat transfer. Additionally, tube
          sheets can provide thermal insulation to protect the tubes from high
          temperatures and help to prevent fluid from leaking from one side of
          the heat exchanger to the other.
        </div>
      </div>
      <div class="text-page" style="height: auto">
        <div class="title" style="line-height: 1; margin-bottom: 1rem">
          TYPES
        </div>
        <div class="types-box">
          <div class="type" v-for="(item, index) in typesList" :key="index">
            <img :src="item.imgPath" />
            <div v-html="item.name" class="bloder-title" />
            <!-- <div class="small-text">{{ item.text }}</div> -->
          </div>
        </div>
      </div>
      <div class="text-page" style="width: 60%">
        <div class="title" style="line-height: 1; margin-bottom: 1rem">
          MATERIAL
        </div>
        <div>
          The choice of material depends on the operating conditions and the
          type of fluid being used in the heat exchanger or pressure vessel.
          Factors such as temperature, pressure, and corrosion resistance are
          considered when selecting the appropriate material for a specific
          application. Tube sheets are commonly manufactured using the following
          materials at BNG Flange Group by keeping the above parameters in
          knowledge:
        </div>
        <ul>
          <li>Carbon steel</li>
          <li>Stainless steel (304, 316L, etc.)</li>
          <li>Duplex stainless steel(2205, 2507, etc.)</li>
          <li>Nickel alloys (Inconel, Hastelloy, Monel, etc.)</li>
          <li>Copper alloys (Aluminum bronze, Admiralty brass, etc.)</li>
          <li>Titanium</li>
          <li>Aluminum</li>
        </ul>
        <div>
          Note: The selection of the material depends on the service conditions,
          including temperature, pressure, and the type of fluid or gas being
          conveyed. The choice of material may also be influenced by
          environmental and regulatory requirements.
        </div>
      </div>
      <div class="text-page" style="width: 60%">
        <div class="title" style="line-height: 1; font-size: 4rem">
          APPLICATIONS
        </div>
        <div style="margin-bottom: 1rem">
          Tube sheets available at BNG are widely used in a variety of
          applications, including:
        </div>
        <ul>
          <li v-for="(item, index) in applicationsList" :key="index">
            <span>{{ item.title }}</span>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
      <div class="text-page" style="width: 60%">
        <div style="margin-bottom: 20rem">
          <div class="title" style="line-height: 1; font-size: 4rem">
            STANDARDS
          </div>
          <ul>
            <li>EN 13445 (European Standard for Unfired Pressure Vessels)</li>
            <li>ASME Boiler and Pressure Vessel Code (BPVC)</li>
            <li>AD Merkblatter (German standard for pressure vessels)</li>
            <li>PED(Pressure Equipment Directive)</li>
            <li>ISO(International Organization for Standardization)</li>
            <li>ASTM (American Society for Testing and Materials)</li>
            <li>NACE(National Association of Corrosion Engineers)</li>
          </ul>
          <div>
            Note: The exact standards used can vary depending on the specific
            application, industry, and jurisdiction, so it is important to
            consult with the BNG Flange Group regulatory authority for specific
            requirements.
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
interface typesInter {
  imgPath: string;
  name: string;
}
const typesList = ref<Array<typesInter>>([
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet01.jpg",
    name: "CARBON STEEL<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet02.jpg",
    name: "STAINLESS STEEL<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet03.jpg",
    name: "DUPLEX<br/>STAINLESS STEEL<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet04.jpg",
    name: "NICKEL ALLOY<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet05.jpg",
    name: "COPPER ALLOY<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet06.jpg",
    name: "ALUMINIUM<br/>BRONZE<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet07.jpg",
    name: "HASTELLOY<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet08.jpg",
    name: "MONEL<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet09.jpg",
    name: "INCONEL<br/>TUBE SHEETS",
  },
  {
    imgPath: "/imgs/Product/Tube_sheet/tubesheet10.jpg",
    name: "TITANIUM<br/>TUBE SHEETS",
  },
]);
interface applicationInter {
  title: string;
  text: string;
}
const applicationsList = ref<Array<applicationInter>>([
  {
    title: "Heat exchangers:",
    text: "Tube sheets are used to support the tubes in heat exchangers, allowing heat to transfer efficiently between the two fluids flowing through the tubes.",
  },
  {
    title: "Boilers: In boilers: ",
    text: "tube sheets are used to hold the tubes in place and provide stability to the system, allowing the steam or hot water to circulate through the tubes.",
  },
  {
    title: "Pressure vessels: ",
    text: "Tube sheets are used in pressure vessels to support the tubes and prevent leaks. They are also used to separate fluids or gases from one another within the pressure vessel.",
  },
  {
    title: "Nuclear reactors: ",
    text: "Tube sheets are used in nuclear reactors to provide stability to the fuel rods and control the flow of coolant.",
  },
  {
    title: "Chemical processing: ",
    text: "Tube sheets are used in chemical processing to support the tubes in the reactor and control the flow of chemicals.",
  },
  {
    title: "Oil and gas production:",
    text: "Tube sheets are used in oil and gas production to support the tubes in pipelines, heat exchangers, and boilers.",
  },
  {
    title: "Refineries:",
    text: "Tube sheets are used in refineries to support the tubes in heat exchangers and boilers, and to separate different fluids and gases.",
  },
  {
    title: "Power generation: ",
    text: " Tube sheets are used in power generation to support the tubes in boilers, heat exchangers,and nuclear reactors.",
  },
]);
</script>

<style lang="scss" scoped></style>
