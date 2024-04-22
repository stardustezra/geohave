<template>
  <MapInfobox />
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import arrowIconUrl from "@/assets/icons/arrow.png";
import MapInfobox from "./MapInfobox.vue";

const initialMap = ref(null);
let arrowMarker = null; // Reference to the arrow marker
let treasureAreaCircle1 = null; // Reference to the first treasure area circle
let treasureAreaCircle2 = null; // Reference to the second treasure area circle

onMounted(() => {
  // Create the map
  initialMap.value = L.map("map").setView([0, 0], 20); // Centered at [0, 0] with a zoom level of 16

  // Add tile layer from OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap.value);

  // Add geolocation functionality
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // If arrow marker doesn't exist, create it
        if (!arrowMarker) {
          createArrowMarker([latitude, longitude]);
        } else {
          // Update arrow marker position
          arrowMarker.setLatLng([latitude, longitude]);
        }

        // Center map at user's position without changing zoom level
        initialMap.value.panTo([latitude, longitude]);

        // Update treasure area position to hardcoded values
        if (treasureAreaCircle1) {
          treasureAreaCircle1.setLatLng([55.4043, 10.37975]);
        } else {
          // Create treasure area if it doesn't exist
          createTreasureArea1([55.4043, 10.37975]);
        }

        if (treasureAreaCircle2) {
          treasureAreaCircle2.setLatLng([55.40328, 10.3784]);
        } else {
          createTreasureArea2([55.40328, 10.3784]);
        }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser");
  }

  // Function to create arrow marker
  function createArrowMarker(coordinates) {
    // Create marker with custom icon
    arrowMarker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: arrowIconUrl,
        iconSize: [30, 30],
      }),
    }).addTo(initialMap.value);
  }

  // Function to create first treasure area circle
  function createTreasureArea1(coordinates) {
    treasureAreaCircle1 = L.circle(coordinates, {
      color: "blue",
      fillColor: "#add8e6",
      fillOpacity: 0.5,
      radius: 20, // Adjust radius as needed
    }).addTo(initialMap.value);
    treasureAreaCircle1.bindPopup("Treasure area 1!", {
      className: "popup-style",
    }); // Add custom popup style
  }

  // Function to create second treasure area circle
  function createTreasureArea2(coordinates) {
    treasureAreaCircle2 = L.circle(coordinates, {
      color: "green",
      fillColor: "#90EE90",
      fillOpacity: 0.5,
      radius: 20, // Adjust radius as needed
    }).addTo(initialMap.value);
    treasureAreaCircle2.bindPopup("Treasure area 2!", {
      className: "popup-style",
    }); // Add custom popup style
  }
});
</script>
