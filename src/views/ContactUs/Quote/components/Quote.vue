<template>
    <div class="contain">
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="img-item"><img src="/imgs/ContactUs/Get_a_Quote.png" /></div>
                    <div class="text">
                        Thank you for showing interest in BNG and considering us as your
                        partner. We pride ourselves on delivering exceptional products and
                        services tailored to your business needs. To better understand your
                        requirements and promptly address your inquiries, please fill out
                        the Customer Inquiry form so we better understand your needs and
                        provide you with speedy and accurate offer.
                    </div>
                </el-col>
                <el-col :span="12"><img src="/imgs/ContactUs/get_a_quote_2.jpg"
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
  