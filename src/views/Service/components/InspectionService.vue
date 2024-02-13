<template>
  <div class="service-page">
    <!-- <transition name="el-fade-in-linear" mode="out-in"> -->
    <div
      class="contain"
      style="
        background-image: url('/imgs/Services/Inspection/inspection_bkg.jpg');
        width: 100vw;
        height: 100vh;
        /* align-items: flex-end; */
      "
    >
      <div class="half-mask">
        <img src="/imgs/Main_page/Inspection_icon.png" />
        <p style="font-size: 1.8rem" >
          Quality is paramount to our team of well-trained international
          inspectors who have a deep understanding and knowledge of the
          industry. We go above and beyond to ensure client satisfaction and
          meet industry requirements.
        </p>
        <div>
          <!-- <el-icon>
            <CaretBottom />
          </el-icon> -->
          <img
            src="/imgs/Services/readmore.png"
            class="readmore-btn"
            @click="readmore(1, 'scroll-box1')"
            style="margin-left: -8rem"
          />
        </div>
      </div>
    </div>

    <div v-show="showMore" style="background: white" id="scroll-box1">
      <div class="whole-mask step1">
        <div class="question-box">
          <div class="question">
            <div class="title">
              <!-- <p class="red-tag"></p>
              Why use our inspection services? -->
              <img src="/imgs/Services/Inspection/inspection_icon_02.png" />
            </div>
            <div class="text" >
              When working with overseas suppliers, it is essential to protect
              your products, customers, and reputation by ensuring the
              agreed-upon specifications are met. BNG Inspection Services offers
              a reliable solution to mitigate risks and ensure quality control.
              With our expertise, you can navigate the global marketplace
              confidently and safeguard your business interests.
            </div>
          </div>
          <!-- <div class="question">
            <div class="title">
              <p class="red-tag"></p>
              24 hour Inspection Reports
            </div>
            <div class="text">
              Inspection reports are delivered within 24 hoursafter actual
              inspection at the vendor's facilities and locations.
            </div>
          </div>
          <div class="question">
            <div class="title">
              <p class="red-tag"></p>
              Quality Control
            </div>
            <div class="text">
              All tests are carried out rigorously before they aresent fromport,
              they include:
            </div>
            <div class="text">
              - Establish quality standards for product andby a company.
            </div>
            <div class="text">
              - Write documents to outline all
              standardscreatingclearly,references for employees.
            </div>
            <div class="text">
              - Work with management-level employyees fo ensure they are
              compliance with all maintaining any newstandards andrelevant
              regulations.
            </div>
            <div class="text">
              - Perform randomquality inspection checksproductsonoservices to
              assess quality levels.
            </div>
          </div> -->
        </div>
        <div class="question-box">
          <div class="question">
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Comprehensive coverage of the entire production process
            </div>
            <!-- <div>Quality Limit).</div> -->
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Assurance of product quality and compliance with industry
              standards and your specific requirements
            </div>
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Timely identification and resolution of potential issues
            </div>
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Enhanced communication between clients and manufacturers
            </div>
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Cost-effective solutions for maintaining product quality
            </div>
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Enhanced decision-making before final shipping
            </div>
            <div class="text weight" style="margin-bottom: 1.2rem">
              <span
                ><img src="/imgs/Services/Inspection/check_icon.png"
              /></span>
              Prevention of unexpected issues upon product arrival
            </div>
          </div>
          <!-- <div class="question">
            <div class="title">
              <p class="red-tag"></p>
              Inspection reports are provided for
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Pre-Production Inspection
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - During Production Inspection
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Piece-by-Piece Inspections
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Quantity, size and visual aspects of the products inspection.
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Pre-Shipment Inspection Everything is packaged correctly.
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Document completion: Testing report certificates and other
              documents.
            </div>
            <div class="text">
              - Quantity,size and visualWe make sure your aspects.product's
              surface has no visual defects
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              (scratches, paint, dents, bumps, cracks, weld burn marks).
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Pre-Shipment Inspection Everything is packaged correctly.
            </div>
            <div class="text" style="margin-bottom: 0.2rem">
              - Container Loading/Loading Supervision (LS)
            </div>
          </div> -->
        </div>
      </div>
      <div style="width: 100vw">
        <!-- <div class="whole-mask" style="padding: 0; height: 90vh"> -->
        <img src="/imgs/Services/Inspection/service.png" style="width: 100%" />
        <!-- </div> -->
      </div>

      <div class="whole-mask">
        <div class="item">
          <img
            class="product-icon"
            src="/imgs/Services/Inspection/inspection_A.png"
          />
          <div
            class="weight"
            style="font-size: 2rem; height: 7rem; font-family: Swis721_BlkCn_BT"
          >
            Quality Inspection
            <br />
            Services
          </div>
          <p class="service-sentence">
            Experience peace of mind with our Quality Inspection Services, your
            dedicated safety net overseeing the entire production process
            between overseas clients and Asian manufacturers, guaranteeing
            top-notch results.
          </p>
          <!-- <el-icon>
            <CaretBottom />
          </el-icon> -->
          <img
            src="/imgs/Services/readmore.png"
            class="readmore-btn"
            @click="readmore(2, 'scroll-box2', 'VendorAssessment')"
          />
        </div>
        <div class="item">
          <img
            class="product-icon"
            src="/imgs/Services/Inspection/inspection_B.png"
          />
          <div
            class="weight"
            style="font-size: 2rem; height: 7rem; font-family: Swis721_BlkCn_BT"
          >
            Vendor <br />
            Assessment
          </div>
          <p class="service-sentence">
            Our team of inspectors will carry out a vendor audit of all
            potential suppliers and make recommendations if needed to meet
            your's and our assessment criteria. We also offer a complete quality
            control audit including an assessment of suppliers' internal quality
            management systems. Our vendor audits are usually conducted in four
            phases.
          </p>
          <!-- <el-icon>
            <CaretBottom />
          </el-icon> -->
          <img
            src="/imgs/Services/readmore.png"
            class="readmore-btn"
            @click="readmore(2, 'scroll-box1', 'PSspection')"
          />
        </div>
        <div class="item">
          <img
            class="product-icon"
            src="/imgs/Services/Inspection/inspection_C.png"
          />
          <div
            class="weight"
            style="font-size: 2rem; height: 7rem; font-family: Swis721_BlkCn_BT"
          >
            Factory<br />
            Compliance<br />
            Audit
          </div>
          <p class="service-sentence">
            We provide a comprehensive array of factory acceptance testing
            services to both our clients and manufacturers.
          </p>
          <!-- <el-icon>
            <CaretBottom />
          </el-icon> -->
          <img
            src="/imgs/Services/readmore.png"
            class="readmore-btn"
            @click="readmore(2, 'scroll-box1', 'FactoryComplianceAudit')"
          />
        </div>
      </div>
    </div>
    <!-- <transition name="el-fade-in-linear" mode="out-in"> -->
    <div v-if="curComponent === 'PSspection'">
      <div class="whole-mask step2">
        <VendorAssessment></VendorAssessment>
      </div>
    </div>
    <div v-else-if="curComponent === 'VendorAssessment'">
      <div class="whole-mask step2">
        <PSspection></PSspection>
      </div>
    </div>
    <div v-else-if="curComponent === 'FactoryComplianceAudit'">
      <div class="whole-mask step2">
        <FactoryComplianceAudit></FactoryComplianceAudit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FactoryComplianceAudit from "./FactoryComplianceAudit.vue";
import PSspection from "./PSspection.vue";
import VendorAssessment from "./VendorAssessment.vue";
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
    const tarEl = document?.querySelector(
      ".step" + curPage.value
    ) as HTMLElement;
    tarEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
    align-items: center;
    padding: 0 10rem;
    height: 100%;
    width: 50vw;
    background: linear-gradient(to left, #111, transparent);

    img {
      margin-bottom: 1rem;
      width: 100%;
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
    min-height: 100vh;
    width: 100%;
    // background: #11111177;
    background: #fff;
    align-items: center;
    padding: 4rem;
    position: relative;
    overflow: hidden;

    .item {
      display: inline-block;
      flex: 1;
      margin: 0 2rem;
      color: rgb(102, 102, 102);

      .product-icon {
        height: 10rem;
      }

      p {
        text-align: left;
        height: 10rem;
        margin: 0;
        margin-bottom: 1rem;
      }
    }
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

.bottom-detail {
  position: absolute;
  background-color: #111;
  bottom: 0;
}

.readmore-btn {
  // position: absolute;
  // bottom: 5rem;
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

.service-page .question-box {
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
    height: 12rem;
    object-fit: cover;
  }
  // .weight {
  //   font-family: Swis721_BlkCn_BT !important;
  // }
}


// #scroll-box1,
// #scroll-box2 {
//   position: relative;
//   flex-direction: column;
// }
</style>
