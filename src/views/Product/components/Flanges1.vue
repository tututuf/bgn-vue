<template>
  <div class="page" style="background-image: url('/imgs/Product/Flanges/product_flanges_bkg.jpg')">
    <div class="page-content">
      <div class="text-page">
        <div class="title">FLANGES</div>
        <div class="text">BNG provides solution to the connecting and dismantling joints withavailable stock of flanges
          for attaching purgoges of a pipe to anymechanical equipment, valves, fittings, or any other component
          withinpiping configuration. Flanges are used to maintain the flexibility to thepiping system by ensuring for
          easier disassembling and improving theaccess to the system components. Flanges are classified into
          subcategorize as well on the basis of their ability to withstand thetfemperafure and pressure.</div>
      </div>
      <div class="text-page">
        <div class="title">TYPES</div>
        <div class="types-box">
          <div v-for="(item, index) in typesList" :key="index" class="type">
            <img :src="item.imgPath" />
            <div class="bloder-title" v-html="item.title"></div>
            <div class="small-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="text-page">
        <div style="width: 50%;" class="text-box">
          <div class="title">MATERIAL</div>
          <div class="">BNG provides a vast variety of materials for flange manufacturing according to thecustomers'
            requirements as given below:</div>
          <ul class="bloder-title">
            <li>Stainless steel</li>
            <li>Carbon steel</li>
            <li>Duplex stainless steel</li>
            <li>Alloy steel</li>
            <li>Monel</li>
            <li>Monel 400</li>
            <li>Ductile iron</li>
          </ul>
        </div>
        <div style="width: 60%;" class="text-box">
          <div class="title">APPLICATIONS</div>
          <div class="small-text" style="font-size: 1rem">Flanges from BNG are commonly used in a variety of
            applications, <br />induding:</div>
          <ul class="bloder-title">
            <li>Piping systems for oil and gas, chemical, waterfreatment and power generation industries</li>
            <li>Pressure vessel and heat exchanger connections</li>
            <li>Duplex stainless steel</li>
            <li>Valves and pump connections</li>
            <li>Structural and mechanical engineering</li>
            <li>Process and plant piping</li>
            <li>Fire protection systems</li>
            <li>Mining and minerals processing</li>
            <li>Marine and offshore applications</li>
            <li>HVAC systems</li>
            <li>Construction and infrastructure projects</li>
          </ul>
          <div class="small-text" style="font-size: 1rem">Note: The specific type of flange used depends on the
            pressure, temperature, material,
            and connection requirements of the application.</div>
        </div>
      </div>
      <div class="text-page" style="padding-top: 3rem; justify-content: flex-start;">
        <div style="width: 60%;" class="text-box">
          <div class="title">STANDARDS</div>
          <div>BNG manufactures flanges according to industry standards such as:</div>
          <ul class="bloder-title">
            <li>ANSI B16.5 - Pipe flanges and flanged fittings</li>
            <li>API 6A - Specification for Wellhead and Christmas Tree Equipment</li>
            <li>MSS SP-44 - Steel Pipeline Flanges</li>
            <li>ASME B16.47 Large Diameter Steel Flanges, NPS 26 through NPS 60</li>
            <li>EN 1092-1 - European Standard for Steel Flanges</li>
            <li>DIN 2632-2638 - German Standard for Weld Neck Flanges and Slip-On Flanges</li>
            <li>JIS B2220 - Japanese Industrial Standard for Steel Pipe Flanges</li>
            <li>BS 4504 - British Standard for Steel Flanges.</li>
          </ul>
          <div>Note: BNG may also follow custom specifications or design standards according to the customer
            requirements.</div>
        </div>
      </div>
      <LayoutBottom></LayoutBottom>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LayoutBottom from '@/Layout/LayoutBottom.vue';
interface typeInter {
  imgPath: string,
  title: string,
  text: string
}
const typesList = ref<Array<typeInter>>([
  { imgPath: '/imgs/Product/Flanges/flanges_01.jpg', title: 'SLIP-ON</br>FLANGES', text: 'These flanges slide over the end of a pipe and are typically used for low-pressure applications.' },
  { imgPath: '/imgs/Product/Flanges/flanges_02.jpg', title: 'WELD-NECK</br>FLANGES', text: 'These flanges have a long-tapered hub that is welded to the pipe, making them suitable for high-pressure applications.' },
  { imgPath: '/imgs/Product/Flanges/flanges_03.jpg', title: 'THREADED</br>FLANGES', text: 'These flanges have threads on the inside that allow them to be screwed onto the end of a pipe.' },
  { imgPath: '/imgs/Product/Flanges/flanges_04.jpg', title: 'BLIND</br>FLANGES', text: 'These flanges are used to seal the end of a piping system and do not have a bore.' },
  { imgPath: '/imgs/Product/Flanges/flanges_05.jpg', title: 'SOCKET-WELD</br>FLANGES', text: 'These flanges are similar to Slip-On flanges but have a smaller bore and are designed to be socket welded to the pipe.' },
  { imgPath: '/imgs/Product/Flanges/flanges_06.jpg', title: 'LAP JOINT</br>FLANGES', text: 'These flanges are used in conjunction with a stub end and are commonly used in low-pressure applications. and for those systems which have limited physical space.' },
  { imgPath: '/imgs/Product/Flanges/flanges_07.jpg', title: 'ORIFICE</br>FLANGES', text: 'These flanges are used for flow measurement in pipelinesand have an opening (orifice) for the insertion of an orifice plate.' },
])
</script>

<style lang="scss" scoped></style>