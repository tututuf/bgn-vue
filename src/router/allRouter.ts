import { RouteRecordRaw } from "vue-router";

export const allRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "product/:type",
        name: "Product",
        component: () => import("@/views/Product/index.vue"),
      },
      {
        path: "flanges/:type",
        name: "Flanges",
        component: () => import("@/views/Product/Flanges/index.vue"),
      },
      {
        path: "fittings/:type",
        name: "Fittings",
        component: () => import("@/views/Product/Fittings/index.vue"),
      },
      {
        path: "pipes_tubes/:type",
        name: "PipesTubes",
        component: () => import("@/views/Product/PipesTubes/index.vue"),
      },
      {
        path: "values/:type",
        name: "Values",
        component: () => import("@/views/Product/Values/index.vue"),
      },
      {
        path: "piping_spools/:type",
        name: "PipingSpools",
        component: () => import("@/views/Product/PipingSpools/index.vue"),
      },
      {
        path: "tube_sheets/:type",
        name: "TubeSheets",
        component: () => import("@/views/Product/TubeSheets/index.vue"),
      },
      {
        path: "steel_plates/:type",
        name: "SteelPlates",
        component: () => import("@/views/Product/SteelPlates/index.vue"),
      },
      {
        path: "cnc/:type",
        name: "CNC",
        component: () => import("@/views/Product/CNC/index.vue"),
      },
      {
        path: "fasteners/:type",
        name: "Fasteners",
        component: () => import("@/views/Product/Fasteners/index.vue"),
      },
      {
        path: "service/:type",
        name: "Service",
        component: () => import("@/views/Service/index.vue"),
      },
      {
        path: "contact_us",
        name: "ContactUs",
        component: () => import("@/views/ContactUs/index.vue"),
      },
      {
        path: "quote",
        name: "Quote",
        component: () => import("@/views/ContactUs/Quote/index.vue"),
      },
      {
        path: "bng",
        name: "BNG",
        component: () => import("@/views/ContactUs/BNG/index.vue"),
      },
      {
        path: "career",
        name: "Career",
        component: () => import("@/views/ContactUs/Career/index.vue"),
      },
      {
        path: "who_we_are",
        name: "WhoWeAre",
        component: () => import("@/views/AboutUs/WhoWeAre/index.vue"),
      },
      {
        path: "concept",
        name: "Concept",
        component: () => import("@/views/AboutUs/Concept/index.vue"),
      },
      {
        path: "conduct",
        name: "Conduct",
        component: () => import("@/views/AboutUs/Conduct/index.vue"),
      },
      {
        path: "ship_form",
        name: "ShipForm",
        component: () => import("@/views/Service/components/ShipForm.vue"),
      },
    ],
  },
];
