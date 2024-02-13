<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="11" class="col col-left">
          <div class="title weight">CONTACT PERSON</div>
          <el-input v-model="form.name" />
          <div class="label">Name</div>
          <el-row>
            <el-col :span="11">
              <el-input v-model="form.tel" />
              <div class="label">Tel</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11">
              <el-input v-model="form.jobTitle" />
              <div class="label">Job title</div>
            </el-col>
          </el-row>
          <el-input v-model="form.email" />
          <div class="label">Email address</div>
          <div class="title weight">COMPANY INFO</div>
          <el-input v-model="form.companyName" />
          <div class="label">Company Name</div>
          <el-input v-model="form.website" />
          <div class="label">Website</div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11" class="col col-right">
          <div class="title weight">ENQUIRY</div>
          <el-row>
            <el-col :span="11">
              <el-select
                v-model="value"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in Inquiry"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="label">Type of Enquiry</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11">
              <el-input v-model="form.date" />
              <div class="label">Deadline for offer submission:</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-select v-model="value1" class="m-1" placeholder=" ">
                <el-option
                  v-for="item in Commercial"
                  :key="item.value1"
                  :label="item.label1"
                  :value="item.value1"
                />
              </el-select>
              <div class="label">Commercial Terms</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11">
              <el-select v-model="value2" class="m-1" placeholder=" ">
                <el-option
                  v-for="item in Transportation"
                  :key="item.value2"
                  :label="item.label2"
                  :value="item.value2"
                />
              </el-select>
              <div class="label">Type of Transportation</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-input v-model="form.destination1" />
              <div class="label">Port/Address of Delivery Destination</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11">
              <el-input v-model="form.destination2" />
              <div class="label">
                Requirement for production time or delivered at destination
              </div>
            </el-col>
          </el-row>
          <el-input v-model="form.certificafion" />
          <div class="label">
            Specific requirements regarding approvals and certificafions
          </div>
          <div class="label" style="margin-top: 2rem">
            Please uploed the relevant drawings or inqulry. (if Applicabile)
          </div>
          <el-button size="large">Upload file</el-button>
        </el-col>
      </el-row>
      <el-button type="danger" >SUBMIT</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const value = ref("");
const value1 = ref("");
const value2 = ref("");

const form = reactive({
  name: "",
  tel: "",
  jobTitle: "",
  email: "",
  companyName: "",
  website: "",
  date: "",
  destination1: "",
  destination2: "",
  certificafion: "",
});

const Inquiry = [
  {
    value: "Option1",
    label: "Purchase for Stock",
  },
  {
    value: "Option2",
    label: "Bidding Stage",
  },
  {
    value: "Option3",
    label: "Project",
  },
  {
    value: "Option4",
    label: "Urgent Project",
  },
  {
    value: "Option5",
    label: "Services",
  },
];

const Commercial = [
  {
    value1: "Option1",
    label1: "EXW",
  },
  {
    value1: "Option2",
    label1: "FOB",
  },
  {
    value1: "Option3",
    label1: "CIF",
  },
  {
    value1: "Option4",
    label1: "DAP",
  },
  {
    value1: "Option5",
    label1: "DDP",
  },
];
const Transportation = [
  {
    value2: "Option1",
    label2: "Air Freight",
  },
  {
    value2: "Option2",
    label2: "Sea Freight",
  },
  {
    value2: "Option3",
    label2: "Railway",
  },
];
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
  }
}
</style>
