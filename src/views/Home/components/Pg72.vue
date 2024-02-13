<template>
  <div class="service-page">
    <div style="background: white">
      <div class="whole-mask step1">
        <div class="question-box">
          <div class="question">
            <div class="title">
              <img src="/imgs/Services/Shipping/sea_freight.png" />
            </div>
            <div
              style="
                font-size: 2rem;
                height: 2rem;
                color: #6b6b6b;
                margin-left: 2rem;
              "
            >
              Reliable and efficient
            </div>
            <div
              style="
                font-size: 4rem;
                height: 4rem;
                color: rgb(77, 77, 77);
                margin-left: 2rem;
                margin-bottom: 1rem;
              "
            >
              Sea Freight
            </div>
            <div class="text">
              BNG shipping provides a wide range of sea freight options,
              including Full Container Load (FCL) and Less than Container Load
              (LCL) services.
            </div>
          </div>
        </div>
        <div class="question-box">
          <div class="question">
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Full Container Load (FCL) Ocean Freight Forwarding
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Less-than-Container Load (LCL) Ocean Freight Forwarding
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Break-Bulk Service (non-containerized loads)
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Consolidation Services
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              From China to all over the world
            </div>

            <div class="text" style="margin-top: 2rem">
              Our experienced logistics team will work with you to determine the
              best sea freight solution for your specific needs, whether you're
              shipping large volumes or small consignments.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
let curComponent = ref<string>("");
let curPage = ref<number>(0);
let showMore = ref<boolean>(false);
function readmore(page: number, id: string, selectedComponent?: string) {
  curComponent.value = selectedComponent
    ? selectedComponent
    : curComponent.value;
  curPage.value = page;
  showMore.value = true;
  nextTick(() => {
    const scrollBox = document.querySelector("#" + id);
    console.dir(scrollBox);
    const tarEl = scrollBox?.querySelector(
      ".step" + curPage.value
    ) as HTMLElement;

    scrollBox?.scrollTo({ top: tarEl.offsetTop, behavior: "smooth" });
  });
}
</script>

<style lang="scss" scoped>
.service-page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  overflow-y: auto;

  .question-box {
    flex: 1;
    padding: 0 2rem;
    text-align: left;

    .title {
      font-size: 1.2rem;
      img {
        width: 60%;
        margin-bottom: 2rem;
        margin-left: 6rem;
      }
    }

    .text {
      margin-left: 2rem;
    }

    .question {
      margin-bottom: 1rem;
    }
  }

  .whole-mask {
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    width: 100%;
    // background: #11111177;
    background: #fff;
    align-items: center;
    padding: 4rem;
    position: relative;
    overflow: hidden;
  }

  .title {
    font-size: 3rem;
    font-weight: 600;

    img {
      margin-left: 2rem;
      width: 100%;
    }
  }

  .text {
    font-size: 1.5rem;
    color: rgb(102, 102, 102);

    img {
      width: 5%;
    }
  }
}
</style>
