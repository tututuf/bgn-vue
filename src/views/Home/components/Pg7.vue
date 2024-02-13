<template>
  <div class="contain">
    <div class="text-box">
      <div class="img-box">
        <img src="/imgs/Services/Shipping/Shipping_Service_Icon.png" />
      </div>
      Our strategic partnerships with ship owners and agents in Asia enable BNG
      Shipping to offer competitive pricing options while ensuring top-notch
      quality and excellence for your unique shipping needs.
      <div style="text-align: center; margin-top: 2rem">
        <router-link to="/service/Shipping" class="readme">
          <img src="/imgs/Main_page/read_more.png" />
        </router-link>
      </div>
    </div>

    <!-- <img src="/imgs/Main_page/read_more.png"  @click="readmore(1, 'scroll-box1', 'Pg7')" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
let curComponent = ref<string>("");
let curPage = ref<number>(0);
let showMore = ref<boolean>(false);

// function readmore(this: any, page: number, id: string, selectedComponent?: string) {
//   // curComponent.value = selectedComponent
//   //   ? selectedComponent
//   //   : curComponent.value;
//   // curPage.value = page;
//   // showMore.value = true;
//   // nextTick(() => {
//   //   const scrollBox = document.querySelector("#" + id);
//   //   console.dir(scrollBox);
//   //   const tarEl = scrollBox?.querySelector(
//   //     ".step" + curPage.value
//   //   ) as HTMLElement;

//   //   scrollBox?.scrollTo({ top: tarEl.offsetTop, behavior: "smooth" });
//   // });
//   this.$emit('custom-click', page, id, selectedComponent)
// }

const emit = defineEmits(["myclick"]);
const readmore = (page: number, id: string, selectedComponent?: string) => {
  console.log("点击了readmore");
  console.log(page, id, selectedComponent);

  emit("myclick", page, id, selectedComponent);
};
</script>

<style lang="scss" scoped>
.contain {
  // height: 110vh;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-image: url("/imgs/Main_page/shipping_bkg.jpg");
  overflow-y: auto;

  .img-box {
    margin-top: 12rem;
    margin-bottom: 2rem;
  }

  .text-box {
    text-align: left;
    margin-top: 2rem;
    width: 36rem;
    font-size: 1.8rem;
    margin-left: 55rem;
    margin-bottom: 2rem;
  }
}

#scroll-box1,
#scroll-box2 {
  position: relative;
  flex-direction: column;
}
</style>
