<template>
  <div class="contain" style="background: #ededed">
    <!-- <img
      src="/imgs/Product/Piping_spool/Piping_Spool_bkg_02.png"
      style="width: 100%"
    /> -->
    <div class="type-box">
      <div class="video">
        <video
          controls
          autoplay
          muted
          loop
          src="/vedios/0613-BNG-Zayne.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  // min-height: 100vh;
  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  overflow-y: auto;

  .type-box {
    width: 70%;
    margin: auto;
    .video {
      margin-top: 2rem;
      video {
        width: 90%;
      }
    }
  }
}
</style>
