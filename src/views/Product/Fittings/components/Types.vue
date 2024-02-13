<template>
  <div class="contain" style="background: #ededed">
    <!-- <img src="/imgs/Product/Fittings/Fittings_bkg_02.png" style="width: 100%" /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Fittings/Type_Icon.png" alt="" />
      </div>
      <div>
        <el-row class="row-one" style="margin-bottom: 2rem">
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fittings/fittings_01.jpg"
                  alt=""
                  @click="dialogTableVisible = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title">
                      <div class="weight">Butt-weld</div>
                    </div>
                    <div class="product-text">
                      Butt weld is to connect fittings or pipe ends by welding,
                      which makes the joints stronger and more leak-proof. It
                      also gives out a smooth surface and offers gradual
                      direction changes with minimum turbulence.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Butt-weld</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fittings/fittings_02.jpg"
                  alt=""
                  @click="dialogTableVisible2 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title">
                      <div class="weight">Socket-Weld</div>
                    </div>
                    <div class="product-text">
                      Socket-weld fittings are used to connect pipes or other
                      components permanently by inserting them into a recessed
                      area of a pipe, valve, or flange. It has a lower risk of
                      leakage than threaded fittings and is easy to install, but
                      is not able to handle the high pressure of some
                      applications.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Socket-Weld</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fittings/fittings_03.jpg"
                  alt=""
                  @click="dialogTableVisible3 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title">
                      <div class="weight">Screwed</div>
                    </div>
                    <div class="product-text">
                      Also called threaded fittings. They are easy to install
                      and have lower additional costs as they have a threaded
                      end to connect with a threaded pipe or fitting. They are
                      suitable for non-critical systems.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Screwed</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fittings/fittings_04.jpg"
                  alt=""
                  @click="dialogTableVisible4 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title">
                      <div class="weight">Flanged</div>
                    </div>
                    <div class="product-text">
                      Flanged fittings are used to join the pipe section
                      together with other fluid control components like valves.
                      They provide stronger connections that reduce the chance
                      of components becoming loose.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Flanged</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row class="product-row">
          <el-col :span="1"> </el-col>
          <el-col :span="6">
            <div class="product-row-title weight">
              <div class="span">Pressure</div>
              <div class="span">Rating</div>
            </div>
            <el-divider style="margin: 0.2rem 0" />
            <div class="product-row-text">
              <div class="span">Class 150</div>
              <div class="span">Class 300</div>
              <div class="span">Class 600</div>
              <div class="span">Class 1500</div>
              <div class="span">Others</div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="product-row-title">
              <div class="span weight" style="line-height: 6rem">Type</div>
            </div>
            <el-divider style="margin: 0.2rem 0" />
            <div class="product-row-text">
              <div class="span">Elbow</div>
              <div class="span">Tee</div>
              <div class="span">Reducer</div>
              <div class="span">Cap</div>
              <div class="span">Coupling</div>
              <div class="span">Cross</div>
              <div class="span">Nipple</div>
              <div class="span">Bushing</div>
              <div class="span">Union</div>
              <div class="span">Others</div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="product-row-title">
              <div class="span weight" style="line-height: 6rem">Shape</div>
            </div>
            <el-divider style="margin: 0.2rem 0" />
            <div class="product-row-text">
              <div class="span">Long Radius</div>
              <div class="span">Short Radius</div>
              <div class="span">Concentric</div>
              <div class="span">Eccentric</div>
              <div class="span">Others</div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="product-row-title">
              <div class="span weight" style="line-height: 6rem">Size</div>
            </div>
            <el-divider style="margin: 0.2rem 0" />
            <div class="product-row-text">
              <div class="span">Nominal Pipe Size(NPS)</div>
              <div class="span">Outside Diameter</div>
              <div class="span">Others</div>
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

    // margin-top: -2rem;
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
        background-image: url("/imgs/Product/Fittings/fittings01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Fittings/fittings02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Fittings/fittings03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Fittings/fittings04.jpg");
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
      // margin-top: 2rem;
      text-align: left;
      // .el-col {
      //   height: 10rem;
      // }

      span {
        display: inline-block;
      }

      .product-row-title {
        height: 5rem;

        .span {
          font-size: 2rem;
          color: rgb(93, 93, 93);
        }
      }

      .product-row-text {
        .span {
          font-size: 1.6rem;
          color: rgb(93, 93, 93);
        }
      }
    }
  }
}
</style>
