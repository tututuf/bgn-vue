<template>
  <div class="contain" style="background: #ededed">
    <!-- <img src="/imgs/Product/Valve/Valves_bkg02.png" style="width: 100%" /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Flanges/Types.png" alt="" />
      </div>
      <div style="margin-bottom: 6rem; margin-top: 2rem">
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item" style="overflow: hidden">
                <img
                  src="/imgs/Product/Valve/valves01.jpg"
                  alt=""
                  style="height: 15.5rem; width: auto"
                  @click="dialogTableVisible = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Ball valves</div>
                    </div>
                    <div class="product-text">
                      Full-bore and reduced-bore, floating and trunnion-mounted,
                      and two-piece, three-piece, and multi-piece design.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Ball valves</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_02.jpg"
                  alt=""
                  @click="dialogTableVisible2 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Butterfly valves</div>
                    </div>
                    <div class="product-text">
                      Wafer, lug,and double-flanged design, with lever, gear
                      pneumatic, and electric actuators.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Butterfly valves</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_03.jpg"
                  alt=""
                  @click="dialogTableVisible3 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Check valves</div>
                    </div>
                    <div class="product-text">
                      Swing,lift, dualplate, and ball-check design, in cast
                      iron, carbon steel, stainless steel, and other materials.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Check valves </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_04.jpg"
                  alt=""
                  @click="dialogTableVisible4 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Globe valves</div>
                    </div>
                    <div class="product-text">
                      Angled and straight-pattern design, with hand wheel, gear,
                      pneumatic, and electric actuators.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Globe valves </span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_05.jpg"
                  alt=""
                  @click="dialogTableVisible5 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible5" top="10rem">
                <div class="product product5">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Gate valves</div>
                    </div>
                    <div class="product-text">
                      Wedge-shaped and parallel-slab design, in cast iron,
                      carbon steel, stainless steel, and other materials.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Gate valves </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_06.jpg"
                  alt=""
                  @click="dialogTableVisible6 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible6" top="10rem">
                <div class="product product6">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Diaphragm valves</div>
                    </div>
                    <div class="product-text">
                      Pneumatic and electric actuated, with metal and
                      elastomeric diaphragms.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Diaphragm valves </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_07.jpg"
                  alt=""
                  @click="dialogTableVisible7 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible7" top="10rem">
                <div class="product product7">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Needles valves</div>
                    </div>
                    <div class="product-text">
                      Precision control valves for high-pressure and
                      high-temperature applications.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Needles valves </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_08.jpg"
                  alt=""
                  @click="dialogTableVisible8 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible8" top="10rem">
                <div class="product product8">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Plug valves</div>
                    </div>
                    <div class="product-text">
                      Lubricated and non-lubricated design, with various
                      materials and actuators.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Plug valves </span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_09.jpg"
                  alt=""
                  @click="dialogTableVisible9 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible9" top="10rem">
                <div class="product product9">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Safety valves</div>
                    </div>
                    <div class="product-text">
                      Relief valves for over pressure protection, with
                      spring-loaded, bellows, and pilot-operated design.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Safety valves </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Valve/valve_10.jpg"
                  alt=""
                  @click="dialogTableVisible10 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible10" top="10rem">
                <div class="product product10">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Solenoid valves</div>
                    </div>
                    <div class="product-text">
                      Direct-acting, pilot-operated, and proportional design,
                      with various materials and voltages.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Solenoid valves </span></div>
            </div>
          </el-col>
          <el-col :span="6"> </el-col>
          <el-col :span="6"> </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialogTableVisible = ref<Boolean>(false);
const dialogTableVisible2 = ref<Boolean>(false);
const dialogTableVisible3 = ref<Boolean>(false);
const dialogTableVisible4 = ref<Boolean>(false);
const dialogTableVisible5 = ref<Boolean>(false);
const dialogTableVisible6 = ref<Boolean>(false);
const dialogTableVisible7 = ref<Boolean>(false);
const dialogTableVisible8 = ref<Boolean>(false);
const dialogTableVisible9 = ref<Boolean>(false);
const dialogTableVisible10 = ref<Boolean>(false);
</script>

<style lang="scss" scoped>
.contain {
  // height: 150vh;
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
        width: 20%;
      }
    }

    .img-box {
      padding: 0;

      // text-align: center;

      .img-item {
        // width: 80%;
        margin: 1rem;

        img {
          width: 100%;

          // margin: 2rem;
          &:hover {
            filter: contrast(50%);
          }
        }
      }

      .product1 {
        background-image: url("/imgs/Product/Valve/valves01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Valve/valves02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Valve/valves03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Valve/valves04.jpg");
      }

      .product5 {
        background-image: url("/imgs/Product/Valve/valves05.jpg");
      }

      .product6 {
        background-image: url("/imgs/Product/Valve/valves06.jpg");
      }

      .product7 {
        background-image: url("/imgs/Product/Valve/valves07.jpg");
      }

      .product8 {
        background-image: url("/imgs/Product/Valve/valves08.jpg");
      }

      .product9 {
        background-image: url("/imgs/Product/Valve/valves09.jpg");
      }

      .product10 {
        background-image: url("/imgs/Product/Valve/valves10.jpg");
      }

      .product {
        // background: pink;
        margin: 0;
        width: 100%;
        height: 100%;

        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: 7rem;

        .product-box {
          height: 20rem;
          width: 100%;
          padding-left: 32rem;

          .product-title {
            font-family: bolder_Swis;
            text-align: center;
            width: 15rem;
            // height: 6rem;
            font-size: 2.3rem;
            color: #fff;
          }

          .product-text {
            margin-top: 0.5rem;
            width: 15rem;
            height: 6rem;
            font-size: 0.9rem;
            color: #fff;
          }
        }
      }
    }

    .text-box {
      font-family: bolder_Swis;
      margin-top: -0.5rem;

      span {
        color: rgb(93, 93, 93);
      }
    }

    span {
      font-size: 1.8rem;
      font-weight: 500;
      color: rgb(102, 102, 102);
    }

    .product-row {
      margin-top: 2rem;
      text-align: left;
      // .el-col {
      //   height: 10rem;
      // }

      span {
        display: inline-block;
      }

      .product-row-title {
        height: 6rem;

        span {
          font-size: 2.2rem;
          color: rgb(93, 93, 93);
        }
      }
    }
  }
}
</style>
