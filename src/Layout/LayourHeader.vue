<template>
  <div id="header">
    <div class="left-box">
      <span class="menu-btn">
        <el-icon @click="drawer = true">
          <!-- <MoreFilled /> -->
          <Expand />
        </el-icon>
      </span>
      <!-- <span>
        <RouterLink to="/product/Flanges"> PRODUCT </RouterLink>
      </span>
      <span>
        <RouterLink to="/service"> SERVICES </RouterLink>
      </span>
      <span>
        <RouterLink to="/contact_us"> CONTACT US </RouterLink>
      </span> -->
    </div>
    <div class="logo">
      <RouterLink to="/home">
        <img
          src="/imgs/Main_page/logo_01.png"
          style="margin-top: 1rem; height: 3.5rem"
        />
      </RouterLink>
    </div>
    <div style="margin: 0 1rem">
      <div class="custom-input">
        <el-icon class="input-icon">
          <Search />
        </el-icon>
        <input placeholder="Search" v-model="keyword" />
      </div>
    </div>
    <el-drawer
      v-model="drawer"
      direction="ltr"
      size="100%"
      :show-close="false"
      class="drawer-box"
      style="height: 50%"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="drawer-title">
          <el-icon
            @click="close"
            style="float: left; cursor: pointer; margin-top: 0.8rem"
          >
            <Close />
          </el-icon>
          <RouterLink to="/home" @click="drawer = false">
            <img
              src="/imgs/Main_page/logo_02.png"
              style="height: 4rem; margin-top: 0.3rem"
            />
          </RouterLink>
        </div>
      </template>
      <div class="drawer-content">
        <el-row>
          <el-col :span="4">
            <div class="nav-box">
              <ul>
                <li @mouseenter="toProductImg()">Products</li>
                <li @mouseenter="toServicesImg()">Services</li>
                <li @mouseenter="toAboutImg()">About Us</li>
                <li @mouseenter="toContactImg()">Contact Us</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="img-box showScrollBar">
              <!-- <img
            v-for="(item, index) in imgList"
            :key="index"
            :src="item.imgPath"
            @click.stop="toProduct(item.to)"
          /> -->
              <div
                style="
                  display: inline-block;
                  height: 13rem;
                  width: 21rem;
                  overflow: hidden;
                  margin: 0 0.5rem;
                  border-radius: 0.5rem;
                "
                v-if="AboutImg"
                v-for="(item, index) in AboutImgList"
                :key="index"
              >
                <img
                  :src="item.imgPath"
                  @click.stop="toProduct(item.to)"
                  style="
                    height: 102%;
                    margin-top: -0.2rem;
                    margin-left: -0.1rem;
                  "
                />
              </div>

              <!-- <img
                  v-if="ProductImg"
                  v-for="(item, index) in ProductImgList"
                  :key="index"
                  :src="item.imgPath"
                  @click.stop="toProduct(item.to)"
                /> -->
              <div
                class="product"
                style="display: inline-block; height: 13rem"
                v-for="(item, index) in ProductImgList"
                :key="index"
                v-if="ProductImg"
                @click.stop="toProduct(item.to)"
              >
                <img :src="item.imgPath" style="height: 100%" />
                <div class="weight">
                  {{ item.msg }}
                </div>
              </div>
              <div
                style="
                  display: inline-block;
                  height: 13rem;
                  width: 21rem;
                  overflow: hidden;
                  margin: 0 0.5rem;
                  border-radius: 0.5rem;
                "
                v-if="ServicesImg"
                v-for="(item, index) in ServicesImgList"
                :key="index"
              >
                <img
                  :src="item.imgPath"
                  @click.stop="toProduct(item.to)"
                  style="
                    height: 102%;
                    margin-top: -0.2rem;
                    margin-left: -0.1rem;
                  "
                />
              </div>
              <div
                style="
                  display: inline-block;
                  height: 13rem;
                  width: 21rem;
                  overflow: hidden;
                  margin: 0 0.5rem;
                  border-radius: 0.5rem;
                "
                v-if="ContactImg"
                v-for="(item, index) in ContactImgList"
                :key="index"
              >
                <img
                  :src="item.imgPath"
                  @click.stop="toProduct(item.to)"
                  style="
                    height: 102%;
                    margin-top: -0.2rem;
                    margin-left: -0.1rem;
                  "
                />
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- <div class="menu-box">
          <div class="menu-item">
            <p class="title">SERVICES</p>
            <div class="sub-item">
              <p>Inspections</p>
              <p>Shippings</p>
            </div>
          </div>
          <div class="menu-item">
            <p class="title">CONTACT US</p>
            <div class="sub-item">
              <p>Work together</p>
              <p>Become Distributors</p>
              <p>Career with us</p>
              <p>World agent Map</p>
            </div>
          </div>
        </div> -->
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
const input = ref<String>("");
const drawer = ref<Boolean>(false);
const AboutImg = ref<Boolean>(false);
const ProductImg = ref<Boolean>(false);
const ServicesImg = ref<Boolean>(false);
const ContactImg = ref<Boolean>(false);
const keyword = ref<String>("");
interface routerInfo {
  name: string;
  param: string;
}
interface imgMsgInter {
  imgPath: string;
  msg: string;
  to: routerInfo;
}
interface imgInter {
  imgPath: string;
  to: routerInfo;
}
const AboutImgList = ref<Array<imgInter>>([
  {
    imgPath: "/imgs/Main_page/woweare.jpg",
    to: {
      name: "WhoWeAre",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/menu_aboutus_02.jpg",
    to: {
      name: "Concept",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/menu_aboutus_03.jpg",
    to: {
      name: "Conduct",
      param: "SteelPlates",
    },
  },
]);
const ProductImgList = ref<Array<imgMsgInter>>([
  {
    imgPath: "/imgs/Main_page/main_product_01.png",
    msg: `Flanges`,
    to: {
      name: "Flanges",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_02.png",
    msg: `Fittings`,
    to: {
      name: "Fittings",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_03.png",
    msg: `Valves`,
    to: {
      name: "Values",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_04.png",
    msg: `Pipes & Tubes`,
    to: {
      name: "PipesTubes",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_05.png",
    msg: `Piping Spools`,
    to: {
      name: "PipingSpools",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_06.png",
    msg: `Tube Sheets`,
    to: {
      name: "TubeSheets",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_07.png",
    msg: `Steel Plates`,
    to: {
      name: "SteelPlates",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_08.png",
    msg: `CNC`,
    to: {
      name: "CNC",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/main_product_09.png",
    msg: `Fasteners`,
    to: {
      name: "Fasteners",
      param: "SteelPlates",
    },
  },
]);
const ServicesImgList = ref<Array<imgInter>>([
  {
    imgPath: "/imgs/Main_page/menu_services_01.jpg",
    to: {
      name: "Service",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/menu_services_02.jpg",
    to: {
      name: "Service",
      param: "Shipping",
    },
  },
]);
const ContactImgList = ref<Array<imgInter>>([
  {
    imgPath: "/imgs/Main_page/menu_contact_01.jpg",
    to: {
      name: "Quote",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/menu_contact_02.jpg",
    to: {
      name: "BNG",
      param: "SteelPlates",
    },
  },
  {
    imgPath: "/imgs/Main_page/menu_contact_03.jpg",
    to: {
      name: "Career",
      param: "SteelPlates",
    },
  },
]);
function toProduct(to: routerInfo) {
  router.push({
    name: to.name,
    params: {
      type: to.param,
    },
  });
  drawer.value = false;
}
function toAboutImg() {
  ProductImg.value = false;
  ServicesImg.value = false;
  ContactImg.value = false;
  AboutImg.value = true;
}
function toProductImg() {
  AboutImg.value = false;
  ServicesImg.value = false;
  ContactImg.value = false;
  ProductImg.value = true;
}
function toServicesImg() {
  AboutImg.value = false;
  ProductImg.value = false;
  ContactImg.value = false;
  ServicesImg.value = true;
}
function toContactImg() {
  AboutImg.value = false;
  ProductImg.value = false;
  ServicesImg.value = false;
  ContactImg.value = true;
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  color: #fff;
  // background: linear-gradient(to bottom, #111, transparent);
  background-image: url("/imgs/Main_page/shade.png");

  .left-box {
    > span {
      cursor: pointer;
      margin-right: 0.6rem;
      vertical-align: middle;
    }

    .menu-btn {
      display: inline-flex;
      font-size: 1.5rem;
      margin: 0 2rem;
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .custom-input {
    color: #fff;

    .input-icon {
      font-size: 1.5rem;
      vertical-align: middle;
      margin: 0 0.5rem;
      cursor: pointer;
    }

    input {
      width: 5rem;
      background-color: transparent;
      border: none;
      vertical-align: middle;
      color: #fff;
      outline: none;
      padding: 0.3rem 0.5rem;
      transition: all 0.5s ease;
      // border: 1px solid;
      // border-color: transparent;
      border-radius: 0.5rem;

      &::-webkit-input-placeholder {
        color: #fff;
      }

      &:focus {
        width: 10rem;
        border-color: #213547;
      }
    }
  }

  .drawer-title {
    font-size: 2rem;
    color: #fff;
  }

  .drawer-content {
    .nav-box {
      width: 15rem;
      height: 100%;
      margin-top: -2.2rem;

      li {
        list-style-type: none;
        margin: 2.2rem 0.8rem;
        font-size: 1.5rem;
      }

      li:hover {
        color: red;
        cursor: default;
      }
    }

    .img-box {
      text-align: center;
      font-size: 1.8rem;
      white-space: nowrap;
      overflow-x: scroll;
      height: 100%;

      .ProductImg {
        text-align: left;
        white-space: nowrap;
        overflow-x: scroll;
        height: 100%;
      }

      img {
        height: 15rem;
        background: #111;
        border-radius: 0.3rem;
        cursor: pointer;
        margin-left: 1rem;
      }
    }

    .menu-box {
      border-top: 1px solid #222;
      border-bottom: 1px solid #222;

      .title {
        font-size: 1.5rem;
      }

      p {
        margin: 0;
      }

      .menu-item {
        padding: 0.3rem 0 0.3rem 4rem;
        text-align: left;

        + .menu-item {
          border-top: 1px solid #222;
        }
      }
    }
  }
}
// .product {
//   overflow: hidden;
//   img {
//     width: 105%;
//   }
// }
</style>
