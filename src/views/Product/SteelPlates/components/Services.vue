<template>
  <div class="contain" style="background: #fff">
    <div class="box">
      <div class="type-box">
        <div class="title-box">
          <img src="/imgs/Product/Pipe_Tube/Add_value.png" alt="" />
        </div>
        <div class="text-box">
          The Most Common Types of Plate Processing Services That BNG Offers
          Include:
        </div>
        <div>
          <el-row style="margin: 1rem 0" class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg1">
                <div class="bottom-box">
                  <div class="title" style="top: 17rem; padding: 0 1rem">
                   Mill Scale Removal (Shot Blasting)
                  </div>
                  <div class="text" style="top: 19rem; padding: 0 1rem">
                    Shot blasting is commonly used for cleaning and polishing
                    steel plates. This method is able to remove surface residue
                    from material without damaging the surface, allowing surface
                    finishes, such as paint, to last longer.
                  </div>
                </div>
                
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bgimg bgimg2">
                <div class="bottom-box">
                  <div class="title" style="top: 17rem; padding: 0 1rem">
                    Cutting Services (Laser Cutting, Oxy Fuel Cutting, Plasma
                    Cutting)
                  </div>
                  <div class="text" style="padding: 0 1rem; top: 21rem">
                    <span style="color: rgb(54, 54, 54)">- Laser Cutting: </span
                    >Providing ultra accurate tolerances, suitable for high-end
                    precision engineering;
                    <br />
                    <span style="color: rgb(54, 54, 54)"
                      >- Oxy Fuel Cutting: </span
                    >A Cost-effective method, suitable for pressure vessel &
                    boiler applications;<br /><span style="color: rgb(54, 54, 54)"
                      >- Plasma Cutting:</span
                    >
                    Lower-temperature cutting reduces heat-affected zones and thus
                    improves quality.
                  </div>
                </div>
                
              </div>
            </el-col></el-row
          >
          <el-row style="margin: 1rem 0" class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg3">
                <div class="bottom-box">
                  <div class="title">Drilling & Tapping Services</div>
                  <div class="text">
                    We provide drilling services that create precise & drilled
                    holes while tapping is a process that cuts threads into a
                    pre-existing drilled hole.
                  </div>
                </div>
                
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bgimg bgimg4">
                <div class="bottom-box">
                  <div class="title">Chamfering& Beveling Services</div>
                  <div class="text">
                    Our beveling & chamfering services prepare the plate for
                    welding, allowing a more robust joint.
                  </div>
                </div>
                
              </div>
            </el-col></el-row
          >
          <el-row class="services-row">
            <el-col :span="12">
              <div class="bgimg bgimg5">
                <div class="bottom-box">
                  <div class="title">Plate Rolling Services</div>
                  <div class="text">
                    To bend and shape steel plates into custom forms (cylinders,
                    cones, etc.) according to clients’ requirements.
                  </div>
                </div>
                
              </div>
            </el-col>
            <el-col :span="12"> </el-col
          ></el-row>
        </div>
        <!-- <div class="text-box">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  min-height: 190vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  // overflow-y: auto;

  //   padding-top: 10rem;
  .box {
    margin-top: 10rem;

    .type-box {
      width: 70%;
      margin: auto;

      .title-box {
        text-align: left;

        img {
          width: 45%;
        }
      }

      .text-box {
        width: 100%;
        color: rgb(102, 102, 102);
        text-align: left;
        font-size: 0.9rem;
        margin-bottom: 1.2rem;
      }

      .el-row {
        text-align: left;
        color: rgb(102, 102, 102);
        height: 29rem;

        .bgimg {
          position: relative;
          width: 90%;
          height: 102%;
          margin: 1rem 0;

          .title {
            font-family: bolder_Swis;
            position: absolute;
            top: 20rem;
            font-size: 1.4rem;
            color: rgb(84, 84, 84);
            padding: 0 1rem;
          }

          .text {
            position: absolute;
            top: 22rem;
            font-size: 1rem;
            padding: 0 1rem;
          }
        }

        .bgimg1 {
          background-image: url("/imgs/Product/Steel_plate/Add_value_01.jpg");
        }

        .bgimg2 {
          margin-left: 2rem;
          background-image: url("/imgs/Product/Steel_plate/Add_value_02.jpg");
        }

        .bgimg3 {
          background-image: url("/imgs/Product/Steel_plate/Add_value_03.jpg");
        }

        .bgimg4 {
          margin-left: 2rem;
          background-image: url("/imgs/Product/Steel_plate/Add_value_04.jpg");
        }

        .bgimg5 {
          background-image: url("/imgs/Product/Steel_plate/Add_value_05.jpg");
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
