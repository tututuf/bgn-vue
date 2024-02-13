<template>
  <div class="contain" style="background: #ededed">
    <!-- <img
      src="/imgs/Product/Tube_sheet/tubesheet_bkg_02.png"
      style="width: 100%"
    /> -->
    <div class="type-box">
      <div class="title-box">
        <img src="/imgs/Product/Flanges/Types.png" alt="" />
      </div>
      <div
        style="
          color: rgb(77, 77, 77);
          text-align: left;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        "
      >
        <!-- Pipes and tubes are cylindrical structures that are used to transport
        fluids and gases. They are classified based on their shape, size, and
        material. Some common classifications indude seamless, welded, and
        spira-welded. -->
      </div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet01.jpg"
                  alt=""
                  @click="dialogTableVisible = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Carbon Steel Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Carbon Steel Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet02.jpg"
                  alt=""
                  @click="dialogTableVisible2 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Stainless Steel Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Stainless Steel Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet03.jpg"
                  alt=""
                  @click="dialogTableVisible3 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Duplex Steel Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Duplex Steel Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet04.jpg"
                  alt=""
                  @click="dialogTableVisible4 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Nickel Alloy Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Nickel Alloy Tube Sheets </span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet05.jpg"
                  alt=""
                  @click="dialogTableVisible5 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible5" top="10rem">
                <div class="product product5">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Copper Alloy Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Copper Alloy Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet06.jpg"
                  alt=""
                  @click="dialogTableVisible6 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible6" top="10rem">
                <div class="product product6">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Aluminum Bronze Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Aluminum Bronze Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet07.jpg"
                  alt=""
                  @click="dialogTableVisible7 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible7" top="10rem">
                <div class="product product7">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Hastelloy Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Hastelloy Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet08.jpg"
                  alt=""
                  @click="dialogTableVisible8 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible8" top="10rem">
                <div class="product product8">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Monel Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Monel Tube Sheets </span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet09.jpg"
                  alt=""
                  @click="dialogTableVisible9 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible9" top="10rem">
                <div class="product product9">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Inconel Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Inconel Tube Sheets </span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Tube_sheet/tubesheet10.jpg"
                  alt=""
                  @click="dialogTableVisible10 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible10" top="10rem">
                <div class="product product10">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Titanium Tube Sheets</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Titanium Tube Sheets </span></div>
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
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_04.jpg");
      }

      .product5 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_05.jpg");
      }

      .product6 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_06.jpg");
      }

      .product7 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_07.jpg");
      }

      .product8 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_08.jpg");
      }

      .product9 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_09.jpg");
      }

      .product10 {
        background-image: url("/imgs/Product/Tube_sheet/tube_sheet_10.jpg");
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
            font-size: 1rem;
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
      font-size: 1.5rem;
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
