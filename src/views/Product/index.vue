<template>
  <div id="product-page">
    <transition name="el-fade-in-linear" mode="out-in">
      <component :is="witchComponent" :key="curComponentName" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

let curComponentName = ref<string>(useRoute().params.type as string);
let witchComponent = computed(() => {
  curComponentName = ref<string>(useRoute().params.type as string);
  return defineAsyncComponent(
    () => import(`./components/${curComponentName.value}.vue`)
  );
});
</script>

<style lang="scss">
#product-page {
  height: 100vh;
  width: 100vw;
  background: #111;
  overflow: auto;

  .page {
    // position: sticky;
    // top: 0;
    height: inherit;
    width: inherit;
    color: #ddd;
    overflow-y: auto;
    overflow-x: hidden;

    .page-content {
      height: inherit;
      width: inherit;
      text-align: left;

      .text-page {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 12rem;
        min-height: 100%;

        .title {
          font-size: 6rem;
          font-weight: 600;
          color: #ff2d5f;
        }

        .text {
          width: 40rem;
          font-size: 1.3rem;
        }

        .types-box {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin-top: 2rem;
          justify-items: center;

          .type {
            width: 10rem;
            margin-bottom: 1rem;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

.row-box {
  display: flex;
  justify-content: space-between;
}

.table-box {
  .head {
    text-align: center;
    font-size: 2rem;
    border-bottom: 1px solid #888;
    text-align: left;
    display: flex;
    margin: 1rem 0;
    align-items: center;
  }

  .row {
    display: flex;
  }

  .cell {
    flex: 1;
    margin: 0 1rem;
  }
}

.small-text {
  text-align: left;
  font-size: 0.7rem;
}

.bloder-title {
  text-align: center;
  font-size: 1rem;
}

.text-box .bloder-title {
  text-align: left;
}
</style>
