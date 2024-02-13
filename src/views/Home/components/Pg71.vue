<template>
  <div class="service-page">
    <div style="background: white">
      <div class="whole-mask">
        <div class="question-box">
          <div class="question">
            <div class="title">
              <img src="/imgs/Services/Shipping/shipping_icon_02.png" />
            </div>
            <div class="text">
              We have a vast network of partnerships with ship owners and
              shipping agents throughout China. This allows us to gather the
              most favorable offers from our trusted solution partners for your
              specific needs. Our partners provide top-quality, safe services
              and offer the most competitive pricing options for every
              destination.
            </div>
          </div>
        </div>
        <div class="question-box">
          <div class="question">
            <div class="text" style="margin-bottom: 0.2rem; font-size: 1.6rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Sea, air and railway shipping
            </div>
            <div class="text" style="margin-bottom: 0.2rem; font-size: 1.6rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              100+ partner agents in BNG shipping network
            </div>
            <div class="text" style="margin-bottom: 0.2rem; font-size: 1.6rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Efficient, reliable and cost-effective
            </div>
            <div class="text" style="margin-bottom: 0.2rem; font-size: 1.6rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              One-on-one follow up by experienced team
            </div>
            <div
              class="text"
              style="
                margin-bottom: 0.2rem;
                font-size: 1.6rem;
                /* color: rgb(77, 77, 77); */
              "
            >
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Transportation, handling and warehousing
            </div>
            <div
              class="text"
              style="
                margin-bottom: 0.2rem;
                font-size: 1.6rem;
                /* color: rgb(77, 77, 77); */
              "
            >
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Extensive experience in international shipping
            </div>
            <div
              class="text"
              style="
                margin-bottom: 0.2rem;
                font-size: 1.6rem;
                /* color: rgb(77, 77, 77); */
              "
            >
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Instant tracking at every stage
            </div>
            <div
              class="text"
              style="
                margin-bottom: 0.2rem;
                font-size: 1.6rem;
                /* color: rgb(77, 77, 77); */
              "
            >
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Customer-focused services
            </div>
            <div class="text" style="margin-top: 2rem">
              Whether you are shipping a partial shipment or a full container,
              BNG Shipping has the expertise and resources to handle all your
              international shipping needs. Contact us today to learn more about
              our services and to request a quote.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.service-page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
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
        width: 80%;
        margin-bottom: 4rem;
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
