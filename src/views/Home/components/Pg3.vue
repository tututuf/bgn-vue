<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="5"></el-col>
        <el-col :span="6">
          <div class="img">
            <img src="/imgs/Main_page/main_icon_01.jpg" style="width: 30%" />
          </div>
          <div>
            <span class="weight">Sourcing Materials (Asia)</span>
            <div class="font">
              BNG leverages a network of vetted and approved partners spanning
              the entirety of Asia. We opt for partners that are strategically
              located near mining sources and selected industrial zones. This
              ensures access to materials at exceptional competitive prices and
              high value, which provides you with all the advantages essential
              for you to increase your industry lead.
            </div>
          </div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="6">
          <div class="img">
            <img src="/imgs/Main_page/main_icon_02.jpg" style="width: 31%" />
          </div>
          <span class="weight">Embracing European Excellence</span>
          <div class="font">
            BNG's precise manufacturing and rigorous inspection processes, along
            with strategic supplier integration, ensure top-notch products that
            meet industry standards, honoring Czech tradition and machinery
            excellence. We are committed to consistently exceeding our clients'
            expectations through our services and products.
          </div>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
      <el-divider content-position="right" style="margin: 3rem 0" />
      <el-row>
        <el-col :span="5"></el-col>
        <el-col :span="6">
          <div class="img">
            <img src="/imgs/Main_page/main_icon_03.jpg" style="width: 30%" />
          </div>
          <span class="weight">Shorter Lead Time & Shipment</span>
          <div class="font">
            We are committed to maintaining a competitive edge with our
            efficient lead times and reliable shipping services. This ensures
            that your orders are fulfilled and shipped to perfectly match your
            schedule. BNG is dedicated to delivering excellence at every stage
            of production and shipping.
          </div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="6">
          <div class="img">
            <img src="/imgs/Main_page/main_icon_04.jpg" style="width: 32%" />
          </div>
          <span class="weight">Client Excellence</span>
          <div class="font">
            BNG is all about nurturing long and enduring partnerships. To meet
            these goals, we prioritize your distinctive needs and targets at
            every juncture. Our dedicated teams are available around the clock
            and offer personalized support at every step of the process, as well
            as offering customized solutions.
          </div>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
      <router-link to="/concept" class="readme"
        ><img src="/imgs/Main_page/read_more.png" style="margin-top: 3rem"
      /></router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  // height: 120vh;
  // position: relative;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-color: white;
  overflow-y: auto;

  .box {
    margin-top: 5rem;
    .el-row {
      // height: 22rem;

      .el-col {
        .img {
          height: 8rem;
        }
        span {
          margin-bottom: 0.5rem;
          font-size: 1.41rem;
          color: rgb(102, 102, 102);
          display: block;
        }

        .font {
          font-size: 1.1rem;
          margin: 0 auto;
          color: rgb(102, 102, 102);
          text-align: left;
          // width: 20rem;
        }
      }
    }
  }
}
</style>
