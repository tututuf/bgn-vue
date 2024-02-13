<template>
  <div class="contain" style="background: #ededed">
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
        Piping spools are classified based on their end connection type and the
        type of fabrication they undergo. The end connection types include
        flanged and bolted, threaded ,and socket welded.
      </div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Piping_spool/piping_spools_01.png"
                  alt=""
                  @click="dialogTableVisible = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Flanged Piping Spools</div>
                    </div>
                    <div class="product-text">
                      A flanged piping connection is one of the commonly used
                      types of piping connections. The main components of a
                      flanged connection are flanges, bolts and gaskets. It can
                      be dismantle and assemble easily for maintenance purposes,
                      but could be less effective in the system with vibration.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Flanged Piping Spools</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Piping_spool/piping_spools_02.png"
                  alt=""
                  @click="dialogTableVisible2 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Threaded Piping Spools</div>
                    </div>
                    <div class="product-text">
                      One of the oldest methods of connection in piping systems.
                      It is only used for small size pipe sizes (generally 2” NB
                      or less) and suitable for low pressure and low temperature
                      applications. It is low cost and can be installed more
                      efficiently.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Threaded Piping Spools</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <div class="img-item">
                <img
                  src="/imgs/Product/Piping_spool/piping_spools_03.png"
                  alt=""
                  @click="dialogTableVisible3 = true"
                />
              </div>
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Socket-Weld Piping Spools</div>
                    </div>
                    <div class="product-text">
                      This type of connection allows fittings to join pipes
                      permanently, as the components are fused together by means
                      of heat application. Due to its high integrity, it can
                      better prevent leaks, even in piping systems that prone to
                      vibration, but it requires high skills for making perfect
                      weld joints.
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Socket-Weld Piping Spools</span></div>
            </div>
          </el-col>
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
</script>

<style lang="scss" scoped>
.contain {
  // min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  overflow-y: auto;

  .type-box {
    width: 70%;
    margin: auto;
    margin-top: 10rem;

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
        background-image: url("/imgs/Product/Piping_spool/Piping_spools_01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Piping_spool/Piping_spools_02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Piping_spool/Piping_spools_03.jpg");
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
            font-family: "bolder_Swis";
            text-align: center;
            width: 15rem;
            // height: 6rem;
            font-size: 2rem;
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
      font-family: "bolder_Swis";

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
          font-size: 2.2rem;
          color: rgb(93, 93, 93);
        }
      }
    }
  }
}
</style>
