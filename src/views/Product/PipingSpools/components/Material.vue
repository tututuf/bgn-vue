<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Flanges/Material.png" alt="" />
        </div>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="text">
                Piping spools at BNG are typically made from a variety of
                materials including carbon steel, stainless steel, and aluminum.
                The choice of material depends on the type of fluid or gas being
                transported, the temperature and pressure conditions of the
                pipeline, and the corrosive environment. For example, stainless
                steel is often used in pipelines that carry corrosive fluids,
                while carbon steel is used for pipelines that carry
                non-corrosive fluids.
              </div>
            </el-col>
            <el-col :span="12"
              ><img src="/imgs/Product/Piping_spool/Material_01.png" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  // min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;

  //   padding-top: 10rem;
  .box {
    margin-top: 20rem;

    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;
        margin-bottom: 1rem;

        img {
          width: 20%;
        }
      }

      .text {
        color: rgb(77, 77, 77);
        font-size: 1.3rem;
        text-align: left;
        margin-top: 1rem;
        margin-right: 4rem;
      }

      img {
        width: 100%;
        margin-top: -4rem;
      }
    }
  }
}
</style>
