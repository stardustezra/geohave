<template>
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
    <l-marker :lat-lng="markerPosition"></l-marker>
  </l-map>
</template>

<script setup>
import { ref } from "vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const zoom = ref(13);
const center = ref([51.505, -0.09]);
const markerPosition = ref([51.5, -0.09]);
</script>
