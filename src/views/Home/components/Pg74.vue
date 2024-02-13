<template>
  <div class="service-page">
    <div style="background: white">
      <div class="whole-mask step1">
        <div class="question-box">
          <div class="question">
            <div class="title">
              <img src="/imgs/Services/Shipping/rail_freight.png" />
            </div>
            <div
              class="weight"
              style="
                font-size: 2rem;
                height: 2rem;
                color: #6b6b6b;
                margin-left: 2rem;
              "
            >
              Cost-effective and efficient
            </div>
            <div
              style="
                font-size: 4rem;
                height: 4rem;
                color: rgb(77, 77, 77);
                margin-left: 2rem;
                margin-bottom: 4rem;
              "
            >
              Rail Freight
            </div>
            <div class="text">
              BNG Shipping also offers FCL and LCL shipping from China to
              countries around the world by Rail. This service is an efficient,
              cost-effective alternative to sea or air freight shipping cargo
              from China to EU countries.
            </div>
          </div>
        </div>
        <div class="question-box">
          <div class="question">
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Secure and fast service between China and the world
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Shorter transit times than sea freight
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Intermodal transportation network
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Rail Direct Less-than-Container Load (LCL)
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Rail Direct Full Container Load (FCL)
            </div>
            <div class="text" style="margin-bottom: 1.2rem; font-size: 1.8rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Final mile delivery
            </div>
            <div class="text" style="margin-top: 2rem">
              Our rail freight services ensure that your goods are delivered
              promptly, safely, and securely. Our team of experts will work
              closely with you to develop a customized rail freight solution
              that meets your specific requirements, including transit times,
              routing, and packaging.
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
        width: 65%;
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
