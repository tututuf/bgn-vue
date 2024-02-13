<template>
  <div class="contain">
    <div>
      <img src="/imgs/Main_page/main_0301.png" style="width: 100%" />
    </div>
    <div>
      <span class="weight">Stronger, Better, United</span>
      <div class="font">
        "Better together", is what we stand for at BNG. Our diversity of
        backgrounds and experience enhances what we do. Whether you're supplier,
        a company looking for a client-centric service, or individual looking
        for a meaningful career - join us.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contain {
  // height: 110vh;
  position: relative;
  min-height: 100vh;

  width: 100vw;
  z-index: 100;
  color: #fff;
  background-size: cover;
  background-color: white;
  overflow-y: auto;

  span {
    position: absolute;
    left: 50%;
    top: 36rem;
    width: 50rem;
    margin-left: -25rem;
    font-size: 1.8rem;
    color: rgb(102, 102, 102);
    display: block;
  }
  .font {
    font-size: 1.2rem;
    margin: 0 auto;
    margin-top: 1rem;
    color: rgb(102, 102, 102);
    width: 40rem;
    text-align: left;
  }
}
</style>
