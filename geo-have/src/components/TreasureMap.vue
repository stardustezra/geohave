<template>
  <div>
    <div id="map" style="height: 50vh"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const initialMap = ref(null);

onMounted(() => {
  // Create the map
  initialMap.value = L.map("map").setView([0, 0], 2); // Centered at [0, 0] with a zoom level of 2

  // Add tile layer from OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap.value);

  // Add geolocation functionality
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        initialMap.value.setView([latitude, longitude], 13);
        L.marker([latitude, longitude])
          .addTo(initialMap.value)
          .bindPopup("You are here")
          .openPopup();

        // Show treasure area at current location for testing
        showTreasureArea(latitude, longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser");
  }

  // Function to show treasure area at a specific location
  function showTreasureArea(lat, lng) {
    const treasureCenter = [lat, lng];
    const treasureAreaCircle = L.circle(treasureCenter, {
      color: "blue",
      fillColor: "#add8e6",
      fillOpacity: 0.5,
      radius: 100, // Adjust radius as needed
    }).addTo(initialMap.value);
    treasureAreaCircle.bindPopup("Treasure area!");

    // Define the point within the area for the popup
    const popupPoint = L.latLng(lat + 0.001, lng + 0.001); // Adjust as needed

    // Bind popup to the specific point inside the area
    L.popup()
      .setLatLng(popupPoint)
      .setContent("Treasure here!")
      .openOn(initialMap.value);
  }
});
</script>
