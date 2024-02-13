<template>
  <div class="table-box">
    <p class="head">
      <span class="cell weight" style="font-size: 1.5rem"> ABOUT US </span>
      <span class="cell weight" style="font-size: 1.5rem"> PRODUCTS </span>
      <span class="cell weight" style="font-size: 1.5rem"> SERVICES </span>
      <span class="cell weight" style="font-size: 1.5rem"> CONTACT US </span>
      <span class="cell weight" style="font-size: 1.5rem">
        OFFICIAL CHANNELS
      </span>
    </p>
    <div class="row" v-for="(array, index) in detailData" :key="index">
      <a
        class="cell"
        v-for="(item, i) in array"
        :key="i"
        :href="typeof item !== 'string' ? item.href : undefined"
        target="_blank"
      >
        {{ typeof item !== "string" ? item.text : item }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface BottomLink {
  text: string;
  href: string;
}
type Link = BottomLink | string;
const detailData = ref<Array<[Link, Link, Link, Link, Link]>>([
  [
    {
      text: "Who we are?",
      href: "/#/who_we_are",
    },
    {
      text: "Flanges",
      href: "/#/flanges/SteelPlates",
    },
    {
      text: "Inspections Services",
      href: "#/service/SteelPlates",
    },
    {
      text: "Get a quote",
      href: "#/quote",
    },
    {
      text: "Linkedln",
      href: (window as any).websites.linkedin,
    },
    // {
    //   text: "Facebook",
    //   href: (window as any).websites.facebook,
    // },
  ],
  [
    {
      text: "Our manufacturing concept",
      href: "/#/concept",
    },
    {
      text: "Fittings",
      href: "/#/fittings/SteelPlates",
    },
    {
      text: "Shippings Services",
      href: "#/service/SteelPlates",
    },
    {
      text: "Become BNG Approved Vender",
      href: "#/bng",
    },
    {
      text: "Instagram",
      href: (window as any).websites.instagram,
    },
  ],
  [
    {
      text: "Supply chain code of conduct",
      href: "/#/conduct",
    },
    {
      text: "Valves",
      href: "/#/values/SteelPlates",
    },
    "",
    {
      text: "Career with us",
      href: "#/career",
    },
    {
      text: "Facebook",
      href: (window as any).websites.facebook,
    },
  ],
  [
    "",
    {
      text: "Pipes & Tubes",
      href: "/#/pipes_tubes/SteelPlates",
    },
    "",
    "",
    {
      text: "Twitter",
      href: (window as any).websites.twitter,
    },
  ],
  [
    "",
    {
      text: "Piping Spools",
      href: "/#/piping_spools/SteelPlates",
    },
    "",
    "",
    {
      text: "YouTube",
      href: (window as any).websites.youtube,
    },
  ],
  [
    "",
    {
      text: "Tube Sheets",
      href: "/#/tube_sheets/SteelPlates",
    },
    "",
    "",
    "",
  ],
  [
    "",
    {
      text: "Steel Plates",
      href: "/#/steel_plates/SteelPlates",
    },
    "",
    "",
    "",
  ],
  [
    "",
    {
      text: "CNC Services",
      href: "/#/cnc/SteelPlates",
    },
    "",
    "",
    "",
  ],
  [
    "",
    {
      text: "Fasteners",
      href: "/#/fasteners/SteelPlates",
    },
    "",
    "",
    "",
  ],
]);
</script>

<style lang="scss" scoped>
.table-box {
  margin-top: 0;
  width: 100%;
  background: rgb(102, 102, 102);
  color: #fff;
  padding: 2rem;

  .head {
    text-align: left;
    font-size: 2rem;
    display: flex;
    margin: 0;
    align-items: center;
    margin-bottom: 0.3rem;
  }

  .row {
    display: flex;
    margin-bottom: 0.3rem;
  }

  .cell {
    flex: 1;
    margin: 0 1rem;
    text-align: left;
  }
}
</style>
