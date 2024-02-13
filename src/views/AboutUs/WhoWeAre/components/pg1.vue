<template>
  <div class="contain weight-plus">
    <div class="box">
      <div class="title weight-plus">Who we are?</div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="img1">
            <img src="/imgs/AboutUs/WhoWeAre/01.jpg" alt="" />
            <div class="text">
              <div>
                Your Trusted Manufacturer and Supplier of Industrial Piping
                Components
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="img2">
            <img src="/imgs/AboutUs/WhoWeAre/02.jpg" alt="" />
            <div class="text">
              <div>Safeguarding Product Quality</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="img3">
            <img src="/imgs/AboutUs/WhoWeAre/03.jpg" alt="" />
            <div class="text">
              <div>Providing Customer-Centric Services</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="img4">
            <img src="/imgs/AboutUs/WhoWeAre/04.jpg" alt="" />
            <div class="text">
              <div>Forging Long-term Partnerships</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-image: url("/imgs/AboutUs/WhoWeAre/whoweare.jpg");
  // overflow-y: auto;
  overflow: hidden;

  .box {
    width: 84%;
    height: 70%;
    margin: 10rem auto;
    // margin-top: 10rem;
    // background: pink;
  }

  .title {
    width: 100%;
    font-size: 5rem;
    text-align: left;
  }

  .el-row {
    height: 100%;
  }

  .el-row .el-col .img1 {
    position: relative;
    width: 100%;
    height: 32rem;
    // background-image: url("/imgs/AboutUs/WhoWeAre/01.jpg");
    // background-size: 100%;
    // background-repeat: no-repeat;

    // padding-top: 21rem;
    img {
      height: 100%;
    }

    .text {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 40%;
      bottom: 0rem;
      // top: 19rem;
      // background: pink;
      // text-align: center;
      // line-height: 40%;
      // background-color: bisque;
      font-size: 1.6rem;

      div {
        margin: auto;
        margin-top: 1rem;
        width: 80%;
      }
    }
  }

  .el-row .el-col .img2 {
    position: relative;
    width: 100%;
    height: 32rem;
    // background-image: url("/imgs/AboutUs/WhoWeAre/02.jpg");
    // background-size: 100%;
    // background-repeat: no-repeat;
    // padding-top: 23rem;

    img {
      height: 100%;
    }

    .text {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 40%;
      bottom: 0rem;
      // top: 19rem;
      // background: pink;
      // text-align: center;
      // line-height: 40%;
      // background-color: bisque;
      font-size: 1.6rem;

      div {
        margin: auto;
        margin-top: 3rem;
        width: 80%;
      }
    }
  }

  .el-row .el-col .img3 {
    position: relative;
    width: 100%;
    height: 32rem;
    // background-image: url("/imgs/AboutUs/WhoWeAre/03.jpg");
    // background-size: 100%;
    // background-repeat: no-repeat;
    // padding-top: 22rem;

    img {
      height: 100%;
    }

    .text {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 40%;
      bottom: 0rem;
      // top: 19rem;
      // background: pink;
      // text-align: center;
      // line-height: 40%;
      // background-color: bisque;
      font-size: 1.6rem;

      div {
        margin: auto;
        margin-top: 3rem;
        width: 80%;
      }
    }
  }

  .el-row .el-col .img4 {
    position: relative;
    width: 100%;
    height: 32rem;
    // background-image: url("/imgs/AboutUs/WhoWeAre/04.jpg");
    // background-size: 100%;
    // background-repeat: no-repeat;
    // padding-top: 23rem;

    img {
      height: 100%;
    }

    .text {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 40%;
      bottom: 0rem;
      // top: 19rem;
      // background: pink;
      // text-align: center;
      // line-height: 40%;
      // background-color: bisque;
      font-size: 1.6rem;

      div {
        margin: auto;
        margin-top: 3rem;
        width: 80%;
      }
    }
  }
}
</style>
