<template>
  <div id="home-page">
    <video autoplay muted loop src="/vedios/BNG_video.mp4"></video>
    <!-- <div id="main-content">
        <div class="box"> -->
    <div class="page pg">
      <div style="margin: auto">
        <div class="title weight">BNG&nbsp;Flange&nbsp;Group</div>
        <div class="text">
          Industrial Piping Components Manufatured in Asia the Right Way
        </div>
      </div>
    </div>
    <!-- <Pg2 class="pg" />
          <Pg3 class="pg" />
          <Pg4 class="pg" />
          <Pg5 class="pg" />
          <Pg6 class="pg" />
          <Pg7 class="pg" />
          <Pg8 class="pg" />
          <Pg9 class="pg" /> -->
    <!-- <ShippingService />
          <inspectionService /> -->
    <!-- <LayoutBottom class="pg" /> -->
    <!-- </div>
      </div> -->
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref } from "vue";
</script>

<style lang="scss" scoped>
#home-page {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  transition: all 1000ms ease;
  // background-image: url("/imgs/Main_page/BNG_video_720.gif");

  #main-content {
    position: relative;
    height: inherit;
    width: inherit;
    overflow: hidden;
    overflow-y: auto;
    z-index: 100;
    top: 0;
    // transition: all 1000ms ease;

    .box {
      position: relative;
    }
  }

  .page {
    position: relative;
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 100;
    color: #fff;
    background-size: cover;

    .title {
      font-size: 6.5rem;
      // font-size: 72pt;
      font-weight: 600;
    }

    .text {
      font-size: 2.15rem;
      // font-size: 24pt;
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
  }
}
</style>
