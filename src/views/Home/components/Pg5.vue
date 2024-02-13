<template>
  <div class="contain">
    <el-row class="box">
      <el-col
        class="weight"
        :span="9"
        style="font-size: 6rem; text-align: left"
      >
        <div>Core</div>
        <div>Products</div>
      </el-col>
      <el-col :span="13" class="right">
        <el-row class="row-img">
          <el-col :span="8">
            <router-link to="/flanges/SteelPlates">
              <div
                class="img1"
                @mouseenter="img1 = true"
                @mouseleave="img1 = false"
              >
                <span v-if="img1"
                  ><img
                    src="/imgs/Main_page/main_product_01B.png"
                    style="width: 104%"
                /></span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/fittings/SteelPlates">
              <div
                class="img2"
                @mouseenter="img2 = true"
                @mouseleave="img2 = false"
              >
                <span v-if="img2"
                  ><img
                    src="/imgs/Main_page/main_product_02B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/values/SteelPlates">
              <div
                class="img3"
                @mouseenter="img3 = true"
                @mouseleave="img3 = false"
              >
                <span v-if="img3"
                  ><img
                    src="/imgs/Main_page/main_product_03B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <el-row class="row-text">
          <el-col :span="8"><span>Flanges</span> </el-col>
          <el-col :span="8"><span>Fittings</span> </el-col>
          <el-col :span="8"><span>Valves</span> </el-col>
        </el-row>
        <el-row class="row-img">
          <el-col :span="8">
            <router-link to="/pipes_tubes/SteelPlates">
              <div
                class="img4"
                @mouseenter="img4 = true"
                @mouseleave="img4 = false"
              >
                <span v-if="img4"
                  ><img
                    src="/imgs/Main_page/main_product_04B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>Pipes & Tubes</span>
          </el-col>
          <el-col :span="8">
            <router-link to="/piping_spools/SteelPlates">
              <div
                class="img5"
                @mouseenter="img5 = true"
                @mouseleave="img5 = false"
              >
                <span v-if="img5"
                  ><img
                    src="/imgs/Main_page/main_product_05B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>Piping Spools</span>
          </el-col>
          <el-col :span="8">
            <router-link to="/tube_sheets/SteelPlates">
              <div
                class="img6"
                @mouseenter="img6 = true"
                @mouseleave="img6 = false"
              >
                <span v-if="img6"
                  ><img
                    src="/imgs/Main_page/main_product_06B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>Tube Sheets</span>
          </el-col>
        </el-row>
        <el-row class="row-text">
          <el-col :span="8"><span>Pipes & Tubes</span> </el-col>
          <el-col :span="8"><span>Piping Spools</span> </el-col>
          <el-col :span="8"><span>Tube Sheets</span> </el-col>
        </el-row>
        <el-row class="row-img">
          <el-col :span="8">
            <router-link to="/steel_plates/SteelPlates">
              <div
                class="img7"
                @mouseenter="img7 = true"
                @mouseleave="img7 = false"
              >
                <span v-if="img7"
                  ><img
                    src="/imgs/Main_page/main_product_07B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>Steel Plates</span>
          </el-col>
          <el-col :span="8">
            <router-link to="/cnc/SteelPlates">
              <div
                class="img8"
                @mouseenter="img8 = true"
                @mouseleave="img8 = false"
              >
                <span v-if="img8"
                  ><img
                    src="/imgs/Main_page/main_product_08B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>CNC</span>
          </el-col>
          <el-col :span="8">
            <router-link to="/fasteners/SteelPlates">
              <div
                class="img9"
                @mouseenter="img9 = true"
                @mouseleave="img9 = false"
              >
                <span v-if="img9"
                  ><img
                    src="/imgs/Main_page/main_product_09B.png"
                    style="width: 104%"
                  />
                </span>
              </div>
            </router-link>

            <span>Fasteners</span>
          </el-col>
        </el-row>
        <el-row class="row-text">
          <el-col :span="8"><span>Steel Plates</span> </el-col>
          <el-col :span="8"><span>CNC</span> </el-col>
          <el-col :span="8"><span>Fasteners</span> </el-col>
        </el-row>
        <!-- <img src="public/imgs/Main_page/main product 01.png" />
        <img src="public/imgs/Main_page/main product 02.png" />
        <img src="public/imgs/Main_page/main product 03.png" />
        <img src="public/imgs/Main_page/main product 04.png" />
        <img src="public/imgs/Main_page/main product 05.png" />
        <img src="public/imgs/Main_page/main product 06.png" />
        <img src="public/imgs/Main_page/main product 07.png" />
        <img src="public/imgs/Main_page/main product 08.png" />
        <img src="public/imgs/Main_page/main product 09.png" /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const img1 = ref<Boolean>(false);
const img2 = ref<Boolean>(false);
const img3 = ref<Boolean>(false);
const img4 = ref<Boolean>(false);
const img5 = ref<Boolean>(false);
const img6 = ref<Boolean>(false);
const img7 = ref<Boolean>(false);
const img8 = ref<Boolean>(false);
const img9 = ref<Boolean>(false);
function toImg1enter() {}
</script>

<style lang="scss" scoped>
.contain {
  // height: 110vh;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-image: url("/imgs/Main_page/main_product_bkg.png");
  overflow-y: auto;

  .box {
    margin: 5rem auto;
    width: 80%;
    height: 70%;

    .right {
      margin-left: 6rem;
      .row-img {
        .el-col {
          // background: pink;
          height: 15rem;
          overflow: hidden;
          // margin-top: 1rem;
        }
      }
      .row-text {
        font-family: bolder_Swis;
        margin-top: -1rem;
      }
      .el-row {
      }

      // span {
      //   color: #fff;
      // }

      .img1 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_01.png");
        overflow: hidden;
      }

      .img2 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_02.png");
        overflow: hidden;
      }

      .img3 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_03.png");
        overflow: hidden;
      }

      .img4 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_04.png");
        overflow: hidden;
      }

      .img5 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_05.png");
        overflow: hidden;
      }

      .img6 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_06.png");
        overflow: hidden;
      }

      .img7 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_07.png");
        overflow: hidden;
      }

      .img8 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_08.png");
        overflow: hidden;
      }

      .img9 {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-image: url("/imgs/Main_page/main_product_09.png");
        overflow: hidden;
      }

      span {
        // padding: 0.6rem;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
