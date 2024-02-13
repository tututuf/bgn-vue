<template>
  <div class="contain" style="background: #ededed">
    <!-- <img
      src="/imgs/Product/Pipe_Tube/pipe&tube_bkg_02.png"
      style="width: 100%"
    /> -->
    <div class="type-box" style="margin-top: 2rem">
      <div class="title-box">
        <img src="/imgs/Product/Flanges/Types.png" alt="" />
      </div>
      <div class="type-text-box">
        Pipes and tubes are cylindrical structures that are used to transport
        fluids and gases. They are classified based on their shape, size, and
        material. Some common classifications include seamless, welded, and
        spiral-welded.
      </div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_01.png"
                alt=""
                @click="dialogTableVisible = true"
              />
              <el-dialog v-model="dialogTableVisible" top="10rem">
                <div class="product product1">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Seamless Pipes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Seamless Pipes</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_02.png"
                alt=""
                @click="dialogTableVisible2 = true"
              />
              <el-dialog v-model="dialogTableVisible2" top="10rem">
                <div class="product product2">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Welded Pipes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Welded Pipes</span></div>
              <div class="small-text"><span>ERW,DSAW,SSAW,LSAW</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_03.png"
                alt=""
                @click="dialogTableVisible3 = true"
              />
              <el-dialog v-model="dialogTableVisible3" top="10rem">
                <div class="product product3">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Exhaust Tubes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Exhaust Tubes</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_04.png"
                alt=""
                @click="dialogTableVisible4 = true"
              />
              <el-dialog v-model="dialogTableVisible4" top="10rem">
                <div class="product product4">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Square Tubes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Square Tubes</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_05.png"
                alt=""
                @click="dialogTableVisible5 = true"
              />
              <el-dialog v-model="dialogTableVisible5" top="10rem">
                <div class="product product5">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Rectangle Tubes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Rectangle Tubes</span></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="img-box">
              <img
                src="/imgs/Product/Pipe_Tube/pipe&tube_06.png"
                alt=""
                @click="dialogTableVisible6 = true"
              />
              <el-dialog v-model="dialogTableVisible6" top="10rem">
                <div class="product product6">
                  <div class="product-box">
                    <div class="product-title">
                      <div>Decorative Tubes</div>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </div>
            <div class="text-box">
              <div><span>Decorative Tubes</span></div>
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
    width: 62%;
    margin: auto;

    .title-box {
      text-align: left;

      img {
        width: 20%;
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
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_01.jpg");
      }

      .product2 {
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_02.jpg");
      }

      .product3 {
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_03.jpg");
      }

      .product4 {
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_04.jpg");
      }

      .product5 {
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_05.jpg");
      }

      .product6 {
        background-image: url("/imgs/Product/Pipe_Tube/Pipes_&_Tubes_06.jpg");
      }

      .product {
        margin: 0;
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        padding-top: 11rem;

        .product-box {
          height: 20rem;
          width: 100%;
          padding-left: 32rem;

          .product-title {
            text-align: center;
            width: 15rem;
            height: 6rem;
            font-size: 2.3rem;
            color: #fff;
            font-family: "bolder_Swis";
          }
        }
      }
    }

    .text-box {
      font-family: bolder_Swis;
      margin-top: -1.5rem;
      text-align: center;

      span {
        color: rgb(93, 93, 93);
        font-size: 1.6rem;
      }

      .small-text {
        span {
          font-size: 1.3rem;
        }
      }
    }

    span {
      font-size: 1.8rem;
      font-weight: 500;
      color: rgb(102, 102, 102);
    }
  }

  .type-text-box {
    color: rgb(102, 102, 102);
    text-align: left;
    font-size: 0.9rem;
  }
}
</style>
