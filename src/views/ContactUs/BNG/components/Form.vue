<template>
  <div class="contain">
    <div class="box">
      <el-row>
        <el-col :span="11" class="col col-left">
          <div class="title weight">COMPANY INFO</div>
          <el-row>
            <el-input v-model="form.name" />
            <div class="label">Legal name*</div>
            <el-input v-model="form.company" />
            <div class="label">Parent Company (if applicable)</div>
            <el-input v-model="form.address1" />
            <div class="label">Address</div>
            <el-input v-model="form.address2" />
            <div class="label">Address</div>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-input v-model="form.city" />
              <div class="label">City</div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="7">
              <el-input v-model="form.country" />
              <div class="label">Country</div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
              <el-input v-model="form.zip" />
              <div class="label">ZIP/(Postal Code)</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-select
                v-model="value"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in BusinassTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="label">Business type</div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="7">
              <el-select
                v-model="value1"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in BusinessStructures"
                  :key="item.value1"
                  :label="item.label1"
                  :value="item.value1"
                />
              </el-select>
              <div class="label">Business Structure</div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8">
              <el-input v-model="form.website" />
              <div class="label">Website</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-select
                v-model="value2"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in ProductTypes"
                  :key="item.value2"
                  :label="item.label2"
                  :value="item.value2"
                />
              </el-select>
              <div class="label">Product types</div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11">
              <el-select
                v-model="value3"
                class="m-1"
                placeholder=" "
                label-width="100%"
              >
                <el-option
                  v-for="item in Materials"
                  :key="item.value3"
                  :label="item.label3"
                  :value="item.value3"
                />
              </el-select>
              <div class="label">Advantage Material</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11" class="col col-right">
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
          <div class="title">QUALIFICATIONS</div>
          <div class="label">
            Do you have current industrial and regional certificafions or
            approvals?
          </div>
          <el-select
            v-model="value4"
            class="m-1"
            placeholder=" "
            label-width="100%"
          >
            <el-option
              v-for="item in applys"
              :key="item.value4"
              :label="item.label4"
              :value="item.value4"
            />
          </el-select>
          <div class="label">
            If yes, select the certifications and approval that apply.
          </div>
          <el-input v-model="form.products" />
          <div class="label">
            List the regions or countries where you have currently exported your
            products:
          </div>
          <el-input v-model="form.documents" />
          <div class="label">Attached Documents</div>
          <el-row>
            <el-col :span="7"
              ><el-button size="large">Upload file</el-button>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="15">
              <div><span class="sort">I.</span>Business License</div>
              <div>
                <span class="sort">II.</span>Valid certficates or approvals
                listed above
              </div>
              <div><span class="sort">III.</span>Company product catalog</div>
              <div><span class="sort">IV.</span>QA Manual</div>
              <div><span class="sort">V.</span>Other</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-button type="danger">SUBMIT</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const value = ref("");
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");

const form = reactive({
  name: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  country: "",
  zip: "",
  tel: "",
  jobTitle: "",
  email: "",
  companyName: "",
  website: "",
  date: "",
  destination1: "",
  destination2: "",
  certificafion: "",
  products: "",
  documents: "",
});

const BusinassTypes = [
  {
    value: "Option1",
    label: "Manufacturer",
  },
  {
    value: "Option2",
    label: "Trading Company",
  },
  {
    value: "Option3",
    label: "Processor",
  },
  {
    value: "Option4",
    label: "Agent",
  },
  {
    value: "Option5",
    label: "Other",
  },
];
const BusinessStructures = [
  {
    value1: "Option1",
    label1: "Private",
  },
  {
    value1: "Option2",
    label1: "Public",
  },
  {
    value1: "Option3",
    label1: "Other",
  },
];
const ProductTypes = [
  {
    value2: "Option1",
    label2: "Flanges",
  },
  {
    value2: "Option2",
    label2: "Fittings(butt-weld, forged, cast)",
  },
  {
    value2: "Option3",
    label2: "Tubes (seamless, welded)",
  },
  {
    value2: "Option4",
    label2: "Pipes (seamless, welded)",
  },
  {
    value2: "Option5",
    label2: "Valves",
  },
  {
    value2: "Option6",
    label2: "Tube sheets",
  },
  {
    value2: "Option7",
    label2: "Fasteners",
  },
];
const Materials = [
  {
    value3: "Option1",
    label3: "Carbon steel",
  },
  {
    value3: "Option2",
    label3: "Stainless steel",
  },
  {
    value3: "Option3",
    label3: "Ductile iron",
  },
  {
    value3: "Option4",
    label3: "Alloy steel",
  },
  {
    value3: "Option5",
    label3: "Copper",
  },
  {
    value3: "Option6",
    label3: "Titanium",
  },
];
const applys = [
  {
    value4: "Option1",
    label4: "Yes",
  },
  {
    value4: "Option2",
    label4: "No",
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
  .sort {
    display: inline-block;
    width: 1.5rem;
  }
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
