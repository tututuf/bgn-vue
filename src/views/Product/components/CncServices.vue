<template>
  <div
    class="page"
    style="background-image: url('/imgs/Product/CNC/product_CNC_bkg_02.jpg')"
  >
    <div class="page-content">
      <div class="text-page">
        <div style="width: 50%" class="text-box">
          <div class="title" style="line-height: 1; margin-bottom: 1rem">
            CNC<br /><span style="font-size: 4rem">SERVICES</span>
          </div>
          <div>
            We cooperate with manufacturers who have spare capacity on a high
            precision CNC five-axis machining centers, with the ability to
            machine continuously in five axes even complex products such as
            impeller blades. This technology enables fast,complex and precise
            chip machining of semi-finished products to a minimum number of
            fixtures. BNG quality control starting from incoming material.With
            our experience in metal machining and understanding that every
            detail of the machining process will effect precaution and quality
            of clients products. BNG is using strict quality control for
            incoming material, sampling，prototyping, trial production, pilot
            run & mass production process. This is the reason why BNG is able to
            deliver parts in requirement quality.
          </div>
        </div>
      </div>
      <div class="text-page">
        <div style="width: 50%" class="text-box">
          <div
            class="title"
            style="line-height: 1; margin-bottom: 1rem; font-size: 5rem"
          >
            PROCESS
          </div>
          <ul>
            <li>3D modeling,adjusting of the model</li>
            <li>Raw material (inspection,storage)</li>
            <li>Casting/forging</li>
            <li>CNC machining (facing, grooving)</li>
            <li>Heat treatment</li>
            <li>Surface finish (grinding, polishing)</li>
            <li>Thread rolling</li>
            <li>Coating to prevent rust (coating)</li>
            <li>Form, fit & finish</li>
            <li>Dimensional & final inspection</li>
            <li>Rework (if it's needed)</li>
            <li>Packaging</li>
            <li>Warehousing</li>
          </ul>
          <div class="process-box">
            <div>
              <div class="item">
                Production<br />Part<br />Approval<br />Process
              </div>
              <el-icon style="margin: 0.5rem 0">
                <CaretBottom />
              </el-icon>
            </div>
            <div>
              <div style="display: inline-block">
                <div class="item">Mass<br />Production<br />Installation</div>
                <el-icon style="margin: 0.5rem 0">
                  <CaretTop />
                </el-icon>
              </div>
              <el-icon
                style="
                  display: inline-block;
                  line-height: 5rem;
                  margin: 0 0.5rem;
                  height: 100%;
                  vertical-align: bottom;
                "
              >
                <CaretRight />
              </el-icon>
            </div>
            <div>
              <div class="item">Quality<br />Assurance</div>
              <el-icon style="margin: 0.5rem 0">
                <CaretBottom />
              </el-icon>
            </div>
            <div>
              <div class="item">Material<br />Receiving</div>
              <el-icon style="margin: 0.5rem 0">
                <CaretBottom />
              </el-icon>
            </div>
            <div>
              <div class="item">Sample<br />Inspection &<br />Confrmation</div>
              <el-icon style="margin: 0.5rem 0">
                <CaretTop />
              </el-icon>
            </div>

            <div>
              <div class="item">Packaging<br />Method<br />Confirmation</div>
              <el-icon style="margin: 0.5rem 0">
                <CaretBottom />
              </el-icon>
            </div>
            <div>
              <div class="item" style="display: inline-flex">
                Inspection<br />of Incoming<br />Material
              </div>
              <el-icon
                style="
                  display: inline-block;
                  line-height: 5rem;
                  height: 100%;
                  margin: 0 0.5rem;
                  vertical-align: bottom;
                "
              >
                <CaretRight />
              </el-icon>
            </div>
            <div>
              <div class="item">Production<br />of Sample</div>
            </div>
            <div>
              <div class="item">Shipping &<br />Delivery</div>
            </div>
          </div>
        </div>
      </div>
      <LayoutBottom></LayoutBottom>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutBottom from "@/Layout/LayoutBottom.vue";
</script>

<style lang="scss" scoped>
.process-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: inherit;
  text-align: center;

  > div {
    width: max-content;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff2e5f;
    border-radius: 1rem;
    text-align: center;
    width: 8rem;
    height: 5rem;
  }
}
</style>
