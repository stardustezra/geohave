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
import arrowIconUrl from "@/assets/icons/arrow.png";
import TaskOverlay from "@/components/TaskOverlay.vue";
import QuizOne from "@/components/QuizOne.vue"; // Import QuizOne component

// Define variables and refs
const initialMap = ref(null);
let arrowMarker = null;
let treasureAreaCircle = null;
const showQuiz = ref(false); // Add showQuiz ref and set it to false initially

// Define treasure area coordinates
const treasureAreaCoordinates = [55.41635, 10.36994];
// Define the radius of the treasure area (in meters)
const treasureAreaRadius = 20;

// Function to toggle visibility of quiz and overlay
function toggleTreasureAreas() {
  // Show treasure area circle on the map
  if (!treasureAreaCircle) {
    treasureAreaCircle = L.circle(treasureAreaCoordinates, {
      color: "blue",
      fillColor: "#add8e6",
      fillOpacity: 0.5,
      radius: treasureAreaRadius,
    }).addTo(initialMap.value);
  }

  // Check if the user is within the treasure area
  const userLatLng = arrowMarker.getLatLng();
  const distance = userLatLng.distanceTo(treasureAreaCircle.getLatLng());

  if (distance <= treasureAreaRadius) {
    // If user is within the area, show the quiz
    showQuiz.value = true;
  } else {
    // If user is outside the area, hide the quiz
    showQuiz.value = false;
  }
}

// Perform actions when component is mounted
onMounted(() => {
  // Initialize map
  initialMap.value = L.map("map").setView(treasureAreaCoordinates, 17);

  // Add tile layer to map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap.value);

  // Add arrow marker
  arrowMarker = L.marker(treasureAreaCoordinates, {
    icon: L.icon({
      iconUrl: arrowIconUrl,
      iconSize: [30, 30],
    }),
  }).addTo(initialMap.value);

  // Check geolocation support and watch position
  if ("geolocation" in navigator) {
    let isFirstRender = true;

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Update arrow marker position
        if (arrowMarker) {
          arrowMarker.setLatLng([latitude, longitude]);
        }

        // Pan map to current position (fjern if)
        if (isFirstRender) {
          isFirstRender = false;
          initialMap.value.panTo([latitude, longitude]);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser");
  }
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
