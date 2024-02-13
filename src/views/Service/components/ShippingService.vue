<template>
  <div class="service-page" style="align-items: flex-end">
    <div
      style="
        background-image: url('/imgs/Services/Shipping/shipping_bkg.jpg');
        height: 100vh;
      "
    >
      <div class="half-mask">
        <img src="/imgs/Services/Shipping/Shipping_Service_Icon.png" />
        <p style="font-size: 1.2rem; color: #fff">
          At BNG Shipping, we have a vast network of partnerships with ship
          owners and shipping agents throughout China. This allows us to gather
          the most favorable offers from our trusted solution partners for your
          specific needs. Our partners provide top-quality, safe services and
          offer the most competitive pricing options for every destination.
        </p>
        <div>
          <el-icon>
            <CaretBottom />
          </el-icon>
          <img
            src="/imgs/Services/readmore.png"
            class="readmore-btn"
            @click="readmore(1, 'scroll-box2')"
          />
        </div>
      </div>
    </div>

    <div v-show="showMore">
      <div class="whole-mask step1" style="background-color: #f5f5f5">
        <div class="question-box" style="padding: 0 6rem">
          <img
            src="/imgs/Services/Shipping/shipping_icon_02.png"
            style="margin-bottom: 1rem; height: 10rem"
          />
          <div style="font-size: 1.2rem">
            <p style="margin-bottom: 1rem">
              We have a vast network of partnerships with ship owners and
              shipping agents throughout China. This allows us to gather the
              most favorable offers from our trusted solution partners for your
              specific needs. Our partners provide top-quality and safe services
              and offer the most competitive pricing options for every
              destination.
            </p>
            <!-- <p>BNG shipping provides logistics organization</p> -->
          </div>
        </div>
        <div class="question-box" style="padding: 0 6rem">
          <div>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Sea, air and railway shipping </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> 100+ partner agents in BNG shipping network </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Efficient, reliable and cost-effective </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> One-on-one follow up by experienced team </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Transportation,handling and warehousing </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Extensive experience in international shipping </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Instant tracking at every stage </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Customer-focused services </span>
            </p>
          </div>
          <div style="font-size: 1.2rem; margin-top: 2rem">
            <p style="margin-bottom: 1rem">
              Whether you are shipping a partial shipment or a full container,
              BNG Shipping has the expertise and resources to handle all your
              international shipping needs. Contact us today to learn more about
              our services and to request a quote.
            </p>
          </div>
        </div>
      </div>
      <div class="whole-mask step2" style="background-color: #fff">
        <div class="question-box" style="padding: 0 5rem">
          <img
            src="/imgs/Services/Shipping/sea_freight.png"
            class="center-img"
            style="margin-bottom: 2rem; margin-left: 3rem"
          />
          <p style="margin: 0" class="weight">Reliable and efficient</p>
          <p
            style="margin: 0; font-size: 4rem; margin-bottom: 1rem"
            class="weight-plus"
          >
            Sea Freight
          </p>
          <p style="margin: 0">
            BNG shipping provides a wide range of sea freight options, including
            Full Container Load (FCL) and Less than Container Load (LCL)
            services.
          </p>
        </div>
        <div class="question-box" style="padding: 0 2rem">
          <div>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Full Container Load (FCL) Ocean Freight Forwarding </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span>
                Less-than-Container Load (LCL) Ocean Freight Forwarding
              </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Break-Bulk Service (non-containerized loads) </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Consolidation Services </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> From China to all over the world </span>
            </p>
          </div>
          <div style="font-size: 1.2rem; margin-top: 2rem">
            <p style="margin-bottom: 1rem">
              Our experienced logistics team will work with you to determine the
              best sea freight solution for your specific needs, whether you're
              shipping large volumes or small consignments.
            </p>
          </div>
        </div>
      </div>
      <div class="whole-mask step2" style="background-color: #fff">
        <div class="question-box" style="padding: 0 3rem">
          <img
            src="/imgs/Services/Shipping/air_freight.png"
            class="center-img"
            style="margin-bottom: 2rem; margin-left: 3rem"
          />
          <p style="margin: 0" class="weight">Speedy and secure</p>
          <p
            style="margin: 0; font-size: 4rem; margin-bottom: 3rem"
            class="weight-plus"
          >
            Air Freight
          </p>
          <p style="margin: 0">
            When time is of the essence, BNG Shipping's air freight services
            provide the perfect solution for your international shipping needs.
            We provide fast and reliable air transportation, ensuring that your
            cargo arrives at its destination on time.
          </p>
        </div>
        <div class="question-box" style="padding: 0 2rem">
          <div>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Import and export for conventional freight </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Consolidation/hubs </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> General cargo </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> From China to all over the world </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Project cargo, whatever the weight or configuration </span>
            </p>
          </div>
          <div style="font-size: 1.2rem; margin-top: 2rem">
            <p style="margin-bottom: 1rem">
              Our experienced logistics team will work closely with you to
              develop a customized air freight solution that meets your specific
              requirements, including transit times, routing, and packaging.
            </p>
          </div>
        </div>
      </div>
      <div
        class="whole-mask step2"
        style="background-color: #fff; height: 90vh"
      >
        <div class="question-box" style="padding: 0 3rem">
          <img
            src="/imgs/Services/Shipping/rail_freight.png"
            class="center-img"
            style="margin-bottom: 2rem; margin-left: 1rem"
          />
          <p style="margin: 0" class="weight">Cost-effective and efficient</p>
          <p
            style="margin: 0; font-size: 4rem; margin-bottom: 3rem"
            class="weight-plus"
          >
            Rail Freight
          </p>
          <p style="margin: 0">
            BNG Shipping also offers FCL and LCL shipping from China to
            countries around the world by Rail. This service is an efficient,
            cost-effective alternative to sea or air freight shipping cargo from
            China to EU countries.
          </p>
        </div>
        <div class="question-box" style="padding: 0 2rem">
          <div>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Secure and fast service between China and the world </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Shorter transit times than sea freight </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Intermodal transportation network </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Rail Direct Less-than-Container Load (LCL) </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Rail Direct Full Container Load (FCL) </span>
            </p>
            <p class="check-box-text">
              <img src="/imgs/Services/Inspection/check_icon.png" />
              <span> Final mile delivery </span>
            </p>
          </div>
          <div style="font-size: 1.2rem; margin-top: 2rem">
            <p style="margin-bottom: 1rem">
              Our rail freight services ensure that your goods are delivered
              promptly, safely, and securely. Our team of experts will work
              closely with you to develop a customized rail freight solution
              that meets vour specific requirements, including transit times,
              routing, and packaging.
            </p>
          </div>
        </div>
      </div>
      <div style="width: 100%; height: 10vh; background: #fff">
        <router-link to="/ship_form">
          <img
            src="/imgs/ContactUs/get_a_quote_button.png"
            style="width: 15%"
          />
        </router-link>
      </div>
      <!-- <div class="whole-mask step2" style="background-color: #000022">
        <div
          style="
            color: #fff;
            margin: auto;
            margin-top: 3rem;
            font-size: 3rem;
            font-family: bolder_plus_Swis;
          "
        >
          Submit your request here!
          <div style="margin: 3rem auto">
            <el-form
              status-icon
              ref="ruleForm"
              class="demo-ruleForm"
              :inline="true"
            >
              <el-form-item
                prop="pass"
                style="margin-left: 0; margin-right: 0; width: 50%"
              >
                <el-input placeholder="Name"></el-input>
              </el-form-item>
              <el-form-item
                prop="checkPass"
                style="width: 45%; margin-left: 0; margin-right: 0; width: 50%"
              >
                <el-input placeholder="Email"></el-input>
              </el-form-item>
            </el-form>
            <el-form status-icon ref="ruleForm" class="demo-ruleForm">
              <el-form-item prop="pass">
                <el-input placeholder="Subject"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                  type="textarea"
                  placeholder="Tell us more about your shippment here..."
                ></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input placeholder="CBM(Cubic Meters-Valume)"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input placeholder="Total Weight"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input placeholder="inconterms(FOB,CIF,DAP,etc.)"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input
                  placeholder="Type of transpotation(Trucking,Airfreight,Seafreight,Railway)"
                ></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input
                  placeholder="Pick up Adress or Port of Loading"
                ></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input
                  placeholder="Address or Port of Final Destination"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" style="width: 100%">Submit</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div> -->
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
    // const scrollBox = document.querySelector("#" + id);
    const tarEl = document.querySelector(
      ".step" + curPage.value
    ) as HTMLElement;
    tarEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // console.dir(tarEl, curPage.value);
  });
}
</script>

<style lang="scss" scoped>
// #service-page {
// height: 100vh;
// width: 100vw;
// background: #ddd;
// overflow: auto;

.ditail-box {
  content: "";
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to left, #000, transparent);
  opacity: 0;
  transition: all 0.5s ease;
}

.ditail-box-whole {
  // background: rgba($color: #000000, $alpha: 0.2)
}

.ditail-box[data-state="active"] {
  opacity: 1;
  width: 35vw;
}

.ditail-box[data-state="deactive"] {
  opacity: 0;
  width: 0;
}

.ditail-box-whole[data-state="active"] {
  opacity: 1;
  width: 100vw;
}

// }

// .service {
//   // position: sticky;
//   // display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: 100vh;
//   // height: 100vh;
//   width: 100vw;
//   z-index: 100;
//   color: #fff;
//   background-size: cover;
// }

.detail-btn {
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 0.5rem;

  .btn-icon {
    display: block;
    margin: auto;
    margin-bottom: 0.3rem;
    cursor: pointer;
  }

  .more-btn {
    display: inline-block;
    background-color: red;
    color: #fff;
    padding: 0 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;

    &::before {
      content: "";
    }
  }
}

#app #main-layout .service-page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #111;
  background-size: cover;
  overflow-y: auto;

  .img-msg-box {
    height: inherit;
    width: inherit;
    background: #fff;
    color: #6b6b6b;
    text-align: left;

    img {
      width: inherit;
      height: 75vh;
    }

    div {
      display: block;
      margin: 0.6rem auto;
      font-size: 1.1rem;
      width: 40vw;
    }
  }

  .half-mask {
    float: right;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    padding: 0 10rem;
    height: 100%;
    width: 50vw;
    background: linear-gradient(to left, #111, transparent);

    img {
      margin-bottom: 1rem;
      width: 70%;
    }

    p {
      text-align: left;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .whole-mask {
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    width: 100%;
    background: #11111177;
    align-items: center;
    padding: 4rem;

    .item {
      display: inline-block;
      flex: 1;
      margin: 0 2rem;

      .product-icon {
        height: 10rem;
      }

      p {
        text-align: left;
        height: 6rem;
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  }

  .title {
    font-size: 3rem;
    font-weight: 600;
  }

  .text {
    font-size: 1.5rem;
  }
}

.bottom-detail {
  position: absolute;
  background-color: #111;
  bottom: 0;
}

.readmore-btn {
  display: block;
  width: 10rem !important;
  margin: auto;
  cursor: pointer;
}
</style>

<style lang="scss">
.sub-page {
  display: flex;
  height: 100%;
  width: 100%;

  .l_box,
  .r_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 4rem 0;
  }

  .l_box {
    margin-right: 2rem;

    .content {
      padding-left: 15rem;
      text-align: left;
    }
  }

  .content {
    text-align: left;
  }

  .r_box {
    text-align: left;
    // padding-right: 15rem;
    width: 50%;
    margin-left: 2rem;

    p {
      margin: 0.5rem 0;
    }

    .title {
      font-size: 1.3rem;
      margin: 0;
    }

    .content {
      padding-right: 15rem;
      text-align: left;
    }
  }
}

.image-box {
  position: relative;
  text-align: left;
  display: inline-block;
  width: 23rem;
  height: 18rem;
  margin-bottom: 2rem;

  img {
    float: right;
    width: 50%;
  }

  span {
    position: absolute;
    bottom: 0;
    font-size: 4rem;
    line-height: 1;
  }
}

.page .question-box {
  flex: 1;
  padding: 0 2rem;
  text-align: left;

  .red-tag {
    display: inline-block;
    background: #bc0004;
    margin: 0;
    height: 2rem;
    width: 1rem;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .title {
    font-size: 1.2rem;
  }

  .text {
    margin-left: 2rem;
  }

  .question {
    margin-bottom: 1rem;
  }

  .center-img {
    display: block;
    margin: auto;
    // height: 12rem;
    object-fit: cover;
  }
}
.check-box-text {
  font-family: bolder_Swis;
  img {
    width: 1.8rem;
    vertical-align: middle;
  }
  span {
    font-weight: bolder;
    font-size: larger;
    vertical-align: middle;
  }
}

#scroll-box1,
#scroll-box2 {
  position: relative;
}

.weight-plus {
  font-family: Swis721_BlkCn_BT;
}
</style>
