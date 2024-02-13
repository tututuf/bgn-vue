<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="11" class="col col-left">
          <div class="title weight">SEND US YOUR REQUEST</div>
          <el-row>
            <el-col :span="13">
              <el-input v-model="form.Person" />
              <div class="label">Contact Person</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="9">
              <el-input v-model="form.address" />
              <div class="label">Email address</div>
            </el-col>
          </el-row>
          <el-input v-model="form.name" />
          <div class="label">Company Name</div>
          <el-input v-model="form.Weight" />
          <div class="label">Total Weight</div>
          <el-row>
            <el-col :span="9">
              <el-select
                v-model="value"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in Incoterms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="label">Incoterms</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="13">
              <el-select
                v-model="value1"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in transportation"
                  :key="item.value1"
                  :label="item.label1"
                  :value="item.value1"
                />
              </el-select>
              <div class="label">Type of transportation</div>
            </el-col>
          </el-row>
          <el-input v-model="form.Loading" />
          <div class="label">Pick up Address or Port of Loading</div>
          <el-input v-model="form.Destination" />
          <div class="label">Address or Port of Destination</div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11" class="col col-right">
          <el-input
            v-model="form.shipment"
            type="textarea"
            :autosize="{ minRows: 20, maxRows: 20 }"
            style="margin-top: 5rem"
          />
          <div class="label">Tell us more about your shipment</div></el-col
        >
      </el-row>
      <el-button type="danger">SUBMIT</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const value = ref("");
const value1 = ref("");

const form = reactive({
  Person: "",
  address: "",
  name: "",
  Weight: "",
  Loading: "",
  Destination: "",
  shipment: "",
});

const Incoterms = [
  {
    value: "Option1",
    label: "EXW",
  },
  {
    value: "Option2",
    label: "FCA",
  },
  {
    value: "Option3",
    label: "CPT",
  },
  {
    value: "Option4",
    label: "CIP",
  },
  {
    value: "Option5",
    label: "DAT",
  },
  {
    value: "Option6",
    label: "DAP",
  },
  {
    value: "Option7",
    label: "DDP",
  },
  {
    value: "Option8",
    label: "FAS",
  },
  {
    value: "Option9",
    label: "FOB",
  },
  {
    value: "Option10",
    label: "CFR",
  },
  {
    value: "Option11",
    label: "CIF",
  },
];

const transportation = [
  {
    value1: "Option1",
    label1: "Trucking",
  },
  {
    value1: "Option2",
    label1: "Airfreight",
  },
  {
    value1: "Option3",
    label1: "Seafreight",
  },
  {
    value1: "Option4",
    label1: "Railway",
  },
  {
    value1: "Option5",
    label1: "Other",
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
