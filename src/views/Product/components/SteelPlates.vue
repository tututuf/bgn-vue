<template>
  <div
    class="page"
    style="
      background-image: url('/imgs/Product/Steel_plate/product_steelplate_bkg_02.jpg');
    "
  >
    <div class="page-content">
      <div class="text-page" style="padding: 0 17rem">
        <div class="title" style="line-height: 1; margin-bottom: 1rem">
          STEEL<br />PLATES
        </div>
        <div style="display: flex">
          <div style="flex: 1; margin-right: 3rem">
            <p>
              How We Can Choose Materials and Suppliers for Materials Ranging
              from Small Quantities to Bulk Orders
            </p>
            <p>
              Material selection is a key aspect in design process for all
              physical products and material selection along with its
              identification and evaluation is an open-ended problem-solving
              process which has more than one solution which implicates that
              finding the most suitable and optimum material for a design
              product is not an easy task. And the material selection process
              actually presents the reflection of the whole design process which
              starts with the deep screening of all the possible materials
              available for your design product and then ranking and comparing
              these materials with the available alternate materials and finally
              selecting the optimum material having all the design requirements
              and human-centered attributes. Similarly, those suppliers keep
              accountability for the quality issues and verify their production
              capabilities as well as have expertise in their product type and
              target market are considered
            </p>
          </div>
          <div style="flex: 1; margin-left: 3rem">
            <p>
              right suppliers as they assure the customer satisfaction and
              provision of quality products as well.
            </p>
            <p>
              Explanation of Available Material Range and Their Applications
            </p>
            <p>
              Here at BNG Flange Group more than forty steel grades are
              available ranging from structural steel with grade ASTM A36 and
              ASTM A514 to all major specialty grades. Our major products
              include heavy steel plates, high strength low alloy
              (HSLA),abrasion resistant steel plates,high/low carbon
              non-structural steel plates, offshore and marine steel plates, and
              pressure vessel steel plates (PVQ). These steel plates materials
              are applicable across all major fields of wind, oil, and gas
              industries. Other than that, these steel plates are being utilized
              in construction industry, industrial manufacturing,
              infrastructure, storage tanks, transmission, and for road plates
              applications.
            </p>
          </div>
        </div>
      </div>
      <div class="text-page">
        <div style="width: 60%; margin-bottom: 3rem" class="text-box">
          <div class="title" style="line-height: 1; font-size: 5rem">SIZE</div>
          <div>
            Following table carries the size ranges of different steel plates
            available at BNG.
          </div>
          <div class="table-box" style="width: 35rem">
            <p class="head" style="margin: 0.5rem 0; padding-bottom: 0.5rem">
              <span class="cell" style="font-size: 1rem"> Material </span>
              <span class="cell" style="font-size: 1rem"> Thickness </span>
              <span class="cell" style="font-size: 1rem"> Width </span>
              <span class="cell" style="font-size: 1rem"> Length </span>
            </p>
            <div
              class="row"
              v-for="(array, index) in fittingsData"
              :key="index"
            >
              <span class="cell" v-for="(item, i) in array" :key="i">{{
                item
              }}</span>
            </div>
          </div>
        </div>
        <div style="width: 60%" class="text-box">
          <div class="title" style="line-height: 1; font-size: 5rem">
            MATERIAL
          </div>
          <div>
            Here are some common steel plate classifications available at BNG
          </div>
          <ul>
            <li>Carbon Steel plates</li>
            <li>Stainless Steel plates</li>
            <li>Alloy Steel plates</li>
            <li>Tool Steel plates</li>
            <li>Boiler Steel plates</li>
            <li>High strength low alloy (HSLA) steel plates</li>
            <li>Quenched and tempered steel plates</li>
            <li>Ship building steel plates</li>
            <li>Weathering steel plates</li>
            <li>Pressure vessel steel plates</li>
          </ul>
        </div>
      </div>
      <div class="text-page">
        <div style="width: 50%; margin-bottom: 13rem" class="text-box">
          <div class="title" style="line-height: 1; font-size: 5rem">
            PROCESSING
          </div>
          <div>
            The most common type of plate processing services that BNG offers
            includes following processes:
          </div>
          <ul>
            <li>Shot blasting for the removal of mill scale.</li>
            <li>Flame cutting</li>
            <li>Oxy fuel cutting</li>
            <li>Plasma cutting</li>
            <li>Drilling</li>
            <li>Tapping</li>
            <li>Chamfering</li>
            <li>Beveling</li>
            <li>Plate rolling</li>
          </ul>
          <div>
            We provide all sorts of cutting services for steel plates including
            flame cutting which is used for cutting the hard and thick steel
            plates with the help of heat source. Plasma cutting technique is
            utilized to cut into steel materials using a compressed and
            electrically ionized gas. lt is useful for applications in cutting
            thinner materials precisely and accurately. Laser cutting is also
            done using a combination of electric current and a gas to cut into
            materials and water jet cutting uses water and abrasive for cutting
            into materials.
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
const fittingsData = ref<Array<[string, string, string, string]>>([
  ["A36", '3/16"-18"', '48"-120"', 'Up to 480"'],
  ["A572G50", '3/16"-18"', '48"-120"', 'Up to 480"'],
  ["A709GR50", '3/16"-18"', '48"-120"', 'Up to 480"'],
  ["A588 All Grades", '3/16"-18"', '48"-120"', 'Up to 480"'],
  ["A606", '3/16"-3/4"', '48"-96"', 'Up to 480"'],
  ["A633", '1/4"-6"', '48"-120"', 'Up to 480"'],
  ["AR600", '3/16"-3/4"', '48"-96"', 'Up to 480"'],
]);
</script>

<style lang="scss" scoped>
.cell {
  margin: 0;
  text-align: left;
}
</style>
