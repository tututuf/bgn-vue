<template>
  <div class="contain" style="background: #000">
    <div class="type-box">
      <div class="video">
        <video
          autoplay
          muted
          loop
          controls
          src="/vedios/1025-BNG-Karel.mp4"
        ></video>
      </div>
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
  overflow-y: auto;

  .type-box {
    width: 70%;
    margin: auto;
    .video {
      margin-top: 10rem;
      video {
        width: 90%;
      }
    }
  }
}
</style>
