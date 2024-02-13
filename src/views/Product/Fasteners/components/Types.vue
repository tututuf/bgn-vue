<template>
  <div class="contain" style="background: #ededed">
    <!-- <img
      src="/imgs/Product/Fasteners/fasteners_bkg_02.png"
      style="width: 100%"
    /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Flanges/Types.png" alt="" />
      </div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fasteners/fasteners_01.png"
                  alt=""
                  @click="dialogTableVisible = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Bolts & Nuts</div>
                    </div>
                    <div class="product-text">
                      One of the most common types of fasteners for industrial
                      use. Bolts have a threaded shank and a head, and they are
                      often used in applications that require higher strength
                      and load-bearing capacity. Together with nut use typically
                      to create a secure joint. We supplier bolts and nuts of a
                      wide variety of types.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Bolts & Nuts</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fasteners/fasteners_02.png"
                  alt=""
                  @click="dialogTableVisible2 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Washer</div>
                    </div>
                    <div class="product-text">
                      A washer is a flat circular disc with an opening in the
                      center. Washers are often added in between a bolt and a
                      nut to distribute the load of a threaded fastener and
                      prevent damage to the material. Common types include flat
                      washers, lock washers, and spring washers.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Washer</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fasteners/fasteners_03.png"
                  alt=""
                  @click="dialogTableVisible3 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Rods & Studs</div>
                    </div>
                    <div class="product-text">
                      Rods and studs are elongated, threaded fasteners used in
                      various applications. Rods have threads on both ends,
                      while studs have threads throughout their length, offering
                      secure connections and stability.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Rods & Studs</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fasteners/fasteners_04.png"
                  alt=""
                  @click="dialogTableVisible4 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Screws</div>
                    </div>
                    <div class="product-text">
                      Screws are threaded fasteners for joining materials,
                      tightened into pre-drilled holes. They offer secure
                      connections in various shapes, sizes, and materials for
                      diverse applications. They are available in different head
                      types (flat, round, pan, countersunk) and drive types
                      (flet, phillips, hex, torx).
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Screws</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Fasteners/fasteners_05.png"
                  alt=""
                  @click="dialogTableVisible5 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible5" top="10rem">
                <div class="product product5">
                  <div class="product-box">
                    <div class="product-title weight">
                      <div>Rivets</div>
                    </div>
                    <div class="product-text">
                      Rivets are permanent fasteners used to join two or more
                      materials together by deforming the end of the rivet after
                      passing it through pre-drilled holes. They are commonly
                      used in applications where a strong, vibration-resistant
                      joint is required.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span class="weight">Rivets</span></div>
            </div>
          </el-col>
          <el-col :span="6"> </el-col>
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
        width: 20%;
      }
    }

    .img-box {
      padding: 0;

      // text-align: center;

      .img-item {
        width: 100%;
        // margin: 1rem;

        img {
          width: 100%;

          // margin: 2rem;
          &:hover {
            filter: contrast(50%);
          }
        }
      }

      .product1 {
        background-image: url("/imgs/Product/Fasteners/Fasteners_01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Fasteners/Fasteners_02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Fasteners/Fasteners_03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Fasteners/Fasteners_04.jpg");
      }

      .product5 {
        background-image: url("/imgs/Product/Fasteners/Fasteners_05.jpg");
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
            font-size: 2.5rem;
            color: #fff;
          }

          .product-text {
            margin-top: 0.5rem;
            width: 15rem;
            height: 6rem;
            font-size: 1rem;
            color: #fff;
          }
        }
      }
    }

    .text-box {
      margin-top: -1.5rem;

      span {
        color: rgb(93, 93, 93);
      }
    }

    span {
      font-size: 1.6rem;
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
          font-size: 2.4rem;
          color: rgb(93, 93, 93);
        }
      }
    }
  }
}
</style>
