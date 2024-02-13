<template>
  <div id="service-page" style="overflow: auto">
    <component :is="getComponent()"></component>
  </div>
</template>

<script setup lang="ts">
import LayoutBottom from "@/Layout/LayoutBottom.vue";
import ShippingService from "./components/ShippingService.vue";
import inspectionService from "./components/InspectionService.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
onMounted(() => {
  const route = useRoute();
  console.log(route.params.type);
  if (route.query.svc == "shippings") {
  }
});

function getComponent() {
  console.log(route.params.type);

  if (route.params.type === "Shipping") {
    return ShippingService;
  } else {
    return inspectionService;
  }
}
</script>
