<template>
  <div class="contain" style="background: #ededed">
    <!-- <img src="/imgs/Product/Flanges/Flanges_bkg2.png" style="width: 100%" /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Flanges/Types.png" alt="" />
      </div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_01.png"
                alt=""
                @click="dialogTableVisible = true"
              />
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Slip-on</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges slide over the end of a pipe and are
                      typically used for low-pressure applications.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Slip-on</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_02.png"
                alt=""
                @click="dialogTableVisible2 = true"
              />
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Weld-Neck</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges have a long-tapered hub that is welded to
                      the pipe, making them suitable for high-pressure
                      applications.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Weld-Neck</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_03.png"
                alt=""
                @click="dialogTableVisible3 = true"
              />
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Threaded</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges have threads on the inside that allow them
                      to be screwed onto the end of a pipe.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Threaded</span></div>
              <div><span>Flanges</span></div>
            </div> </el-col
          ><el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_04.png"
                alt=""
                @click="dialogTableVisible4 = true"
              />
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Blind</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges are used to seal the end of a piping system
                      and do not have a bore.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Blind</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_05.png"
                alt=""
                @click="dialogTableVisible5 = true"
              />
              <el-dialog v-model="dialogTableVisible5" top="10rem">
                <div class="product product5">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Socket-Weld</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges are similar to Slip-On flanges but have a
                      smaller bore and are designed to be socket welded to the
                      pipe.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Socket-Weld</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_06.png"
                alt=""
                @click="dialogTableVisible6 = true"
              />
              <el-dialog v-model="dialogTableVisible6" top="10rem">
                <div class="product product6">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Lap Joint</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges are used in conjunction with a stub end and
                      are commonly used in low-pressure applications. and for
                      those systems which have limited physical space.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Lap Joint</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_07.png"
                alt=""
                @click="dialogTableVisible7 = true"
              />
              <el-dialog v-model="dialogTableVisible7" top="10rem">
                <div class="product product7">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Orifice</div>
                      <div>Flanges</div>
                    </div>
                    <div class="product-text">
                      These flanges are used for flow measurement in pipelines
                      and have an opening (orifice) for the insertion of an
                      orifice plate.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Orifice</span></div>
              <div><span>Flanges</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Flanges/Flanges_08.png"
                alt=""
                @click="dialogTableVisible8 = true"
              />
              <el-dialog v-model="dialogTableVisible8" top="10rem">
                <div class="product product8">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Vessel</div>
                      <div>Nozzles</div>
                    </div>
                    <div class="product-text">
                      A pressure vessel nozzle is an opening in the pressure
                      vessel that allows fluid to enter or exit the vessel.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box weight">
              <div><span>Pressure</span></div>
              <div><span>Vessel Nozzles</span></div>
            </div>
          </el-col>
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
</script>

<style lang="scss" scoped>
.contain {
  // min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;
  padding: 5rem 0;

  .type-box {
    width: 70%;
    margin: auto;

    .title-box {
      text-align: left;

      img {
        width: 18%;
      }
    }

    .img-box {
      padding: 0;

      img {
        width: 100%;
        margin: 0;

        &:hover {
          filter: contrast(50%);
        }
      }

      .product1 {
        background-image: url("/imgs/Product/Flanges/flanges_01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Flanges/flanges_02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Flanges/flanges_03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Flanges/flanges_04.jpg");
      }

      .product5 {
        background-image: url("/imgs/Product/Flanges/flanges_05.jpg");
      }

      .product6 {
        background-image: url("/imgs/Product/Flanges/flanges_06.jpg");
      }

      .product7 {
        background-image: url("/imgs/Product/Flanges/flanges_07.jpg");
      }

      .product8 {
        background-image: url("/imgs/Product/Flanges/flanges_08.jpg");
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
            text-align: center;
            width: 15rem;
            height: 6rem;
            font-size: 2.1rem;
            color: #fff;
          }

          .product-text {
            margin-top: 0.5rem;
            width: 15rem;
            height: 6rem;
            font-size: 1rem;
            color: #fff;
            text-align: left;
          }
        }
      }

      // .img-box2 {
      //   padding: 0;
      //   img {
      //     width: 100%;
      //     margin: 0;
      //   }
      //   .product2 {
      //     // background: pink;
      //     margin: 0;
      //     width: 100%;
      //     height: 100%;
      //     background-image: url("public/imgs/Product/Flanges/flanges 02.jpg");
      //     background-size: 100%;
      //     background-repeat: no-repeat;
      //     padding-top: 7rem;
      //     .product2-box {
      //       height: 20rem;
      //       width: 100%;
      //       padding-left: 32rem;
      //       .product2-title {
      //         text-align: center;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 2.5rem;
      //         color: #fff;
      //       }
      //       .product2-text {
      //         margin-top: 0.5rem;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 1rem;
      //         color: #fff;
      //       }
      //     }
      //   }
      // }
      // .img-box3 {
      //   padding: 0;
      //   img {
      //     width: 100%;
      //     margin: 0;
      //   }
      //   .product3 {
      //     // background: pink;
      //     margin: 0;
      //     width: 100%;
      //     height: 100%;
      //     background-image: url("public/imgs/Product/Flanges/flanges 03.jpg");
      //     background-size: 100%;
      //     background-repeat: no-repeat;
      //     padding-top: 7rem;
      //     .product3-box {
      //       height: 20rem;
      //       width: 100%;
      //       padding-left: 32rem;
      //       .product3-title {
      //         text-align: center;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 2.5rem;
      //         color: #fff;
      //       }
      //       .product3-text {
      //         margin-top: 0.5rem;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 1rem;
      //         color: #fff;
      //       }
      //     }
      //   }
      // }
      // .img-box4 {
      //   padding: 0;
      //   img {
      //     width: 100%;
      //     margin: 0;
      //   }
      //   .product4 {
      //     // background: pink;
      //     margin: 0;
      //     width: 100%;
      //     height: 100%;
      //     background-image: url("public/imgs/Product/Flanges/flanges 04.jpg");
      //     background-size: 100%;
      //     background-repeat: no-repeat;
      //     padding-top: 7rem;
      //     .product4-box {
      //       height: 20rem;
      //       width: 100%;
      //       padding-left: 32rem;
      //       .product4-title {
      //         text-align: center;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 2.5rem;
      //         color: #fff;
      //       }
      //       .product4-text {
      //         margin-top: 0.5rem;
      //         width: 15rem;
      //         height: 6rem;
      //         font-size: 1rem;
      //         color: #fff;
      //       }
      //     }
      //   }
      // }
    }

    .text-box {
      margin-top: -2.5rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: rgb(102, 102, 102);

      span {
        font-size: 1.6rem;
        font-weight: 500;
        color: rgb(102, 102, 102);
      }
    }
  }
}
</style>
