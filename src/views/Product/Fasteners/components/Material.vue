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
              <div class="text-title weight">Carbon Steel</div>
              <div>ASTM A105, ASTM 350Gr. LF2, LF3...</div>
              <div class="text-title weight">Stainless Steel</div>
              <div>ASTM A182 - F304(L), F316(L), F316LN, F317L...</div>
              <div class="text-title weight">Duplex Stainless Steel</div>
              <div>
                ASTM A182 - 2205 (F51, S31803/F60, S32205), 2507(F53, S32750)...
              </div>
              <div class="text-title weight">Alloy Steel</div>
              <div>Grade A, C, 5, G (zinc plated)...</div>
              <div class="text-title weight">Titanium</div>
              <div>
                Grade 1 (R50250), Grade 2 (R50400), Grade 4 (R50700), Grade 5
                (R56400)...
              </div>
            </el-col>
            <el-col :span="12"
              ><img src="/imgs/Product/Fasteners/material_page_01.png" />
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
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  //   background-color: rgb(102, 102, 102) !important;
  overflow-y: auto;
  //   padding-top: 10rem;
  .box {
    margin-top: 15rem;
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
      .el-row {
        text-align: left;
        color: rgb(102, 102, 102);
        .text-title {
          margin-top: 0.2rem;
          font-size: 1.5rem;
          color: rgb(93, 93, 93);
        }
        img {
          width: 120%;
          margin-top: -7rem;
        }
      }
    }
  }
}
</style>
