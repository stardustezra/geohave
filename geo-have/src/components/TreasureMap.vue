<template>
  <!-- Map container with map and info box -->
  <div class="map-container">
    <div id="map" class="map"></div>
  </div>
  <TaskOverlay v-if="!showQuiz" @toggleTreasureAreas="toggleTreasureAreas" />
  <QuizOne v-if="showQuiz" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import TaskOverlay from "@/components/TaskOverlay.vue";
import QuizOne from "@/components/QuizOne.vue"; // Import QuizOne component

// Define variables and refs
const showQuiz = ref(false); // Add showQuiz ref and set it to false initially

// Function to toggle visibility of quiz and overlay
function toggleTreasureAreas() {
  // Simulate logic for detecting if the user is close to the treasure area
  // For demonstration purposes, we'll just set showQuiz to true after 5 seconds
  setTimeout(() => {
    showQuiz.value = true;
  }, 5000);
}

// Perform actions when component is mounted
onMounted(() => {
  // Initialize map
  const initialMap = L.map("map").setView([55.4043, 10.37975], 17);

  // Add tile layer to map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap);

  // Add marker for the treasure area
  const treasureAreaMarker = L.marker([55.4043, 10.37975]).addTo(initialMap);
});
</script>

<style scoped>
/* Styles for map container */
.map-container {
  position: relative;
  flex: 1;
}

/* Styles for map */
.map {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
