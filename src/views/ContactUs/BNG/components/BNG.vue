<template>
    <div class="contain">
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="img-item"><img src="/imgs/ContactUs/Become_Vendor.png" /></div>
                    <div class="text">
                        We appreciate your interest in partnering with BNG. To streamline communication and facilitate
                        collaboration, we kindly invite you to fill out our application form for PQ procedure. This will
                        help us better understanding of your capabilities and offerings. We look forward to exploring
                        opportunities for mutual growth and success together.
                    </div>
                </el-col>
                <el-col :span="12"><img src="/imgs/ContactUs/become_vendor_02.jpg"
                        style="width: 100%; margin-left: 2rem;" /></el-col>
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
    background: #fff;
    overflow-y: auto;

    .box {
        width: 70vw;
        // height: 80vh;
        // background: pink;
        margin: auto;
        margin-top: 10rem;

        .img-item {
            margin-bottom: 3rem;
            text-align: left;

            img {
                width: 50%;
            }
        }

        .text {
            font-size: 1.6rem;
            color: rgb(77, 77, 77);
            text-align: left;
        }
    }
}
</style>
  