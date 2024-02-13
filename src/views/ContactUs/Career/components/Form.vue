<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="11" class="col col-left">
          <el-row>
            <el-col :span="11"><el-input v-model="form.firstName" />
              <div class="label">First Name</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11"><el-input v-model="form.lastName" />
              <div class="label">Last Name</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11"><el-input v-model="form.address" />
              <div class="label">Email Address</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11"><el-input v-model="form.position" />
              <div class="label">Position Applying for</div>
            </el-col>
          </el-row>
          <el-input v-model="form.information" style="height: 10rem" />
          <div class="label">Additional information</div>
          <div class="label" style="margin-top: 2rem">Upload your CV here
          </div>
          <el-button size="large">Upload file</el-button>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11" class="col col-right">
          <div>Thank you for completing our CV submission form. We appreciate your time and interest in joining our team.
            Our HR team will review your submission and contact you shortly to discuss opportunities.</div>
          <div>If you have any questions, please don't hesitate to reach out at o.jelinek@bngflgroup.com.</div>
        </el-col>
      </el-row>
      <el-button type="danger">SUBMIT</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'


const form = reactive({
  firstName: '',
  lastName: '',
  address: '',
  position: '',
  information: '',

  city: '',
  country: '',
  zip: '',
  tel: '',
  jobTitle: '',
  email: '',
  companyName: '',
  website: '',
  date: '',
  destination1: '',
  destination2: '',
  certificafion: '',
  products: ''
})


</script>

<style lang="scss" scoped>
.contain {
  height: 100vh;
  width: 100vw;
  z-index: 100;
  // color: #fff;
  background-size: cover;
  background: rgb(238, 238, 238);
  overflow-y: auto;

  .box {
    width: 80vw;
    // height: 80vh;
    // background: pink;
    margin: auto;
    margin-top: 10rem;

    .col {
      text-align: left;

      .title {
        text-align: left;
        color: rgb(55, 55, 55);
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      .label {
        font-size: 1.2rem;
        text-align: left;
        color: rgb(102, 102, 102);
        margin-bottom: 1rem;
      }

      .el-select {
        width: 100%;
      }
    }

    .col-right {
      div {
        text-align: left;
        font-size: 2rem;
        color: rgb(102, 102, 102);
        margin-bottom: 3rem;
      }
    }
  }
}
</style>
