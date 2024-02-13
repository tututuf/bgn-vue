<template>
  <div class="contain" style="background: #ededed">
    <!-- <img src="/imgs/Product/Steel_plate/steelplate_bkg_02.png" style="width: 100%" /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Steel_plate/Material_&_Size.png" alt="" />
      </div>
      <div class="table">
        <div class="table1">
          <td>
          <th :style="thBorder"><span>Select Type</span><el-icon @click="toUnvisable()">
              <CaretTop v-if="visabletr"/><CaretBottom v-if="!visabletr"/>
            </el-icon></th>
          <tr @click="visable = true,visabletr = false,thBorder = 'border: none'" v-if="visabletr"><span>Structural Steel Plates</span></tr>
          <tr @click="visabletr = false,visable2 = true,thBorder = 'border: none'" v-if="visabletr"><span>High Strength And Low Alloy
              (HSLA)</span></tr>
          <tr @click="visabletr = false,visable3 = true,thBorder = 'border: none'" v-if="visabletr"><span>Abrasion-Resistant Steel
              Plates</span>
          </tr>
          <tr @click="visabletr = false,visable4 = true,thBorder = 'border: none'" v-if="visabletr"><span>High- And Low-Carbon Non-Structural
              Steel
              Plates
            </span></tr>
          <tr @click="visabletr = false,visable5 = true,thBorder = 'border: none'" v-if="visabletr"><span>Offshore And Marine Steel
              Plates</span></tr>
          <tr @click="visabletr = false,visable6 = true,thBorder = 'border: none'" v-if="visabletr"><span>Pressure Vessel Steel Plates
              (PQ)</span></tr>
          </td>
        </div>

        <div class="table-detail table1-detail" v-if="visable">
          <div class="table-title">Structural Steel Plates</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>ASTM A36</tr>
          <tr>ASTM A572 GR42,50,60,65,80</tr>
          <tr>ASTM A709</tr>
          <tr>ASTM A572 GR36, 50, 50W</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>3/16"-18"</tr>
          <tr>3/16"-18"</tr>
          <tr>3/16"-18"</tr>
          <tr>3/16"-18"</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48"-120"</tr>
          <tr>48"-120"</tr>
          <tr>48"-120"</tr>
          <tr>48"-120"</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480"</tr>
          <tr>Up to 480"</tr>
          <tr>Up to 480"</tr>
          <tr>Up to 480"</tr>
          </td>
        </div>
        <div class="table-detail table2-detail" v-if="visable2">
          <div class="table-title">High Strength And Low Alloy (HSLA)</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>CSA G40.21</tr>
          <tr>ASTM A606</tr>
          <tr>ASTM A871</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>1/4” – 4” </tr>
          <tr>3/16” – 3”/4”</tr>
          <tr>3/16" – 1 1/4"</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48” – 120”</tr>
          <tr>48” – 96”</tr>
          <tr>48” – 120”</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 650”</tr>
          </td>
        </div>
        <div class="table-detail table3-detail" v-if="visable3">
          <div class="table-title">Abrasion-Resistant Steel Plates</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>AR200/AR235</tr>
          <tr>AR400</tr>
          <tr>AR450/AR500</tr>
          <tr>AR600</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>0.1345" (10G) – 3/4"</tr>
          <tr>3/16" – 4"</tr>
          <tr>3/16" – 2"</tr>
          <tr>3/16”– 3”/4”</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48” – 120”</tr>
          <tr>48” – 120”</tr>
          <tr>48” – 96”</tr>
          <tr>48” – 96”</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          </td>
        </div>
        <div class="table-detail table4-detail" v-if="visable4">
          <div class="table-title">High- And Low-Carbon Non-Structural Steel Plates</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>ASTM A830-1045</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>1/4" – 3"</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48" – 120"</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480”</tr>
          </td>
        </div>
        <div class="table-detail table5-detail" v-if="visable5">
          <div class="table-title">Offshore And Marine Steel Plates</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>API 2H GR50</tr>
          <tr>ABS GR A, B, D, E</tr>
          <tr>ABS GR AH36</tr>
          <tr>ABS GR DH36</tr>
          <tr>ABS GR EH36</tr>
          <tr>ABS GR FH36</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>1/4" – 4"</tr>
          <tr>1/4" – 4"</tr>
          <tr>1/4" – 4"</tr>
          <tr>1/4" – 4"</tr>
          <tr>1/4" – 4"</tr>
          <tr>1/4" – 4"</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48" – 120"</tr>
          <tr>48" – 120"</tr>
          <tr>48" – 120"</tr>
          <tr>48" – 120"</tr>
          <tr>48" – 120"</tr>
          <tr>48" – 120"</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          </td>
        </div>
        <div class="table-detail table6-detail" v-if="visable6">
          <div class="table-title">Pressure Vessel Steel Plates (PQ)</div>
          <td style="width:30rem;">
          <th>Material</th>
          <el-divider />
          <tr>ASTM A516 GR55,60,65,70</tr>
          <tr>ASME SA516</tr>
          <tr>ASME SA537</tr>
          </td>
          <td style="width:15rem;">
          <th>Thickness</th>
          <el-divider />
          <tr>3/16” – 8”</tr>
          <tr>3/16" – 6"</tr>
          <tr>3/8" – 4"</tr>
          </td>
          <td style="width:15rem;">
          <th>Width</th>
          <el-divider />
          <tr>48” – 120”</tr>
          <tr>48” – 120”</tr>
          <tr>48” – 120”</tr>
          </td>
          <td>
          <th>Length</th>
          <el-divider />
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          <tr>Up to 480”</tr>
          </td>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visable = ref<boolean>(false)
const visable2 = ref<boolean>(false)
const visable3 = ref<boolean>(false)
const visable4 = ref<boolean>(false)
const visable5 = ref<boolean>(false)
const visable6 = ref<boolean>(false)
const visabletr = ref<boolean>(true)
const thBorder = ref<string>("border-bottom: 0.2rem rgb(225, 225, 225) solid")

function toUnvisable() {
  if (visabletr.value == true) {
    visabletr.value = false
    thBorder.value = "border: none"
  }
  else if (visabletr.value == false) {
    visable.value = false
    visable2.value = false
    visable3.value = false
    visable4.value = false
    visable5.value = false
    visable6.value = false
    visabletr.value = true
    thBorder.value = "border-bottom: 0.2rem rgb(225, 225, 225) solid"
  }
}
</script>

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

      img {
        width: 40%;
      }
    }
  }

  .table {
    width: 80vw;
    height: 50vh;
    // background: pink
    text-align: left;
    color: rgb(75, 75, 75);
    font-size: 1.5rem;

    .table1 {
      margin-top: 3rem;

      .el-icon {
        margin-left: 25rem;
      }

      td {
        width: 100%;
      }

      th {
        width: 100%;
        // border-bottom: 0.2rem rgb(225, 225, 225) solid;

        span {
          color: rgb(102, 102, 102);
          margin-left: 1.5rem;
        }
      }
      // .thBoderTure{
      //   border-bottom: 0.2rem rgb(225, 225, 225) solid;
      // }
      // .thBoderFalse{
      //   border: none;
      // }

      tr {
        height: 3rem;
        line-height: 3rem;

        span {
          margin-left: 1.5rem;
        }
      }

      td {
        width: 100%;
        border: 0.2rem rgb(225, 225, 225) solid;
      }

    }

    .table-detail {
      margin-top: 4rem;
      margin-left: 4rem;

      .table-title {
        font-family: bolder_Swis;
        font-size: 3rem;
        margin-bottom: 2rem;
      }

      th {
        font-family: bolder_Swis;
        font-size: 2.5rem;
        margin-top: 2rem;
      }

      tr {
        border: none;
      }

      .el-divider {
        margin: 0;
      }
    }
  }
}


// :deep(.ttt .cell) {
//   background: rgb(237, 237, 237);
//   width: 100rem;
//   padding: 0;
// }

:deep(.ttt .table-column .cell) {
  width: 100rem;
  padding: 0%;
  background: pink;
}
</style>
