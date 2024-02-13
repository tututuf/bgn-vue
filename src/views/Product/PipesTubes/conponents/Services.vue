<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Pipe_Tube/Add_value.png" alt="" />
        </div>
        <div>
          <el-row class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg1">
                <div class="bottom-box">
                  <div class="title">Fabrication and Assembly Services</div>
                  <div class="text">
                    Precision pipe assembly, ensuring functionality and durability
                    for diverse applications.
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bgimg bgimg2">
                <div class="bottom-box">
                  <div class="title">Cutting and Bending Services</div>
                  <div class="text">
                    Customized cuts and bends to exact specifications to meet the
                    specific requirements of our customers
                  </div>
                </div>
              </div>
            </el-col></el-row
          >
          <el-row class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg3">
                <div class="bottom-box">
                  <div class="title">Coating and lining services</div>
                  <div class="text">
                    Services such as painting, galvanizing, and sandblasting etc.,
                    in order to protect pipes and tubes from corrosion and to
                    increase their lifespan.
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bgimg bgimg4">
                <div class="bottom-box">
                  <div class="title">Inspection and Testing Services</div>
                  <div class="text">
                    Services including non-destructive testing, to ensure that
                    their products meet the highest quality standards.
                  </div>
                </div>
              </div>
            </el-col></el-row
          >
          <el-row  class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg5">
                <div class="bottom-box">
                  <div class="title">Logistics and delivery services</div>
                  <div class="text">
                    To ensure that our products are delivered to our customers on
                    time and in the best condition.
                  </div>
                </div>
                
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bgimg bgimg6">
                <div class="bottom-box">
                  <div class="title">
                  Technical support and consultation services
                  </div>
                  <div class="text">
                    To help our customers select the best products and services to
                    meet their needs.
                  </div>
                </div>
                
              </div>
            </el-col></el-row
          >
        </div>
        <div class="text-box">
          <span
            >Overall, we offer a wide range of services to meet the needs of our
            customers in the pipe and tube industry, from supply to fabrication
            and delivery. We also provide support and consultation services to
            ensure that our customers are getting the best products and services
            for their specific needs.</span
          >
          <span style="margin-top: 1rem"
            >*For more information, please consult our sales team.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  overflow-y: auto;

  //   padding-top: 10rem;
  .box {
    // margin-top: 10rem;
    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;
        margin-bottom: 1rem;

        img {
          width: 45%;
        }
      }

      .el-row {
        text-align: left;
        color: rgb(102, 102, 102);
        height: 29rem;

        .bgimg {
          position: relative;
          width: 90%;
          height: 98%;
          .bottom-box{
            position: absolute;
            top: 19rem;

            .title {
              font-family: bolder_Swis;
              font-size: 1.8rem;
              color: rgb(84, 84, 84);
              padding: 2px 5px;
            }

            .text {
              font-size: 1.3rem;
              padding: 3px 5px;
            }
          }
        }

        .bgimg1 {
          background-image: url("/imgs/Product/Pipe_Tube/added_value_01.jpg");
        }

        .bgimg2 {
          margin-left: 2rem;
          background-image: url("/imgs/Product/Pipe_Tube/added_value_02.jpg");
        }

        .bgimg3 {
          background-image: url("/imgs/Product/Pipe_Tube/added_value_03.jpg");
        }

        .bgimg4 {
          margin-left: 2rem;
          background-image: url("/imgs/Product/Pipe_Tube/added_value_04.jpg");
        }

        .bgimg5 {
          background-image: url("/imgs/Product/Pipe_Tube/added_value_05.jpg");
        }

        .bgimg6 {
          margin-left: 2rem;
          background-image: url("/imgs/Product/Pipe_Tube/added_value_06.jpg");

          .text {
            top: 23.5rem;
          }
        }
      }

      .text-box {
        text-align: left;
        display: inline-block;

        span {
          display: inline-block;
          color: rgb(84, 84, 84);
        }

        span {
          display: inline-block;
          color: rgb(84, 84, 84);
        }
      }
    }
  }
}
</style>
