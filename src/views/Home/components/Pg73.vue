<template>
  <div class="service-page">
    <div style="background: white">
      <div class="whole-mask step1">
        <div class="question-box">
          <div class="question">
            <div class="title">
              <img src="/imgs/Services/Shipping/air_freight.png" />
            </div>
            <div
              style="
                font-size: 2rem;
                height: 2rem;
                color: #6b6b6b;
                margin-left: 2rem;
              "
            >
              Speedy and secure
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
              Air Freight
            </div>
            <div class="text">
              When time is of the essence, BNG Shipping's air freight services
              provide the perfect solution for your international shipping
              needs. We provide fast and reliable air transportation, ensuring
              that your cargo arrives at its destination on time.
            </div>
          </div>
        </div>
        <div class="question-box">
          <div class="question">
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Import and export for conventional freight
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Consolidation/hubs
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              General cargo
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              From China to all over the world
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Project cargo, whatever the weight or configuration
            </div>

            <div class="text" style="margin-top: 2rem">
              Our experienced logistics team will work closely with you to
              develop a customized air freight solution that meets your specific
              requirements, including transit times, routing, and packaging.
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
        width: 45%;
        margin-bottom: 1rem;
        margin-left: 3rem;
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
