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
let treasureAreaCircle = null; // Reference to the treasure area circle

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

        // Update treasure area position
        if (treasureAreaCircle) {
          const { lat: newLat, lng: newLng } = calculateOffsetCoordinates(
            latitude,
            longitude,
            50
          );
          treasureAreaCircle.setLatLng([newLat, newLng]);
        } else {
          // Create treasure area if it doesn't exist
          const { lat: newLat, lng: newLng } = calculateOffsetCoordinates(
            latitude,
            longitude,
            50
          );
          createTreasureArea([newLat, newLng]);
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

  // Function to create treasure area circle
  function createTreasureArea(coordinates) {
    treasureAreaCircle = L.circle(coordinates, {
      color: "blue",
      fillColor: "#add8e6",
      fillOpacity: 0.5,
      radius: 30, // Adjust radius as needed
    }).addTo(initialMap.value);
    treasureAreaCircle.bindPopup("Treasure area!", {
      className: "popup-style",
    }); // Add custom popup style
  }

  // Function to calculate coordinates offset by distance (in meters)
  function calculateOffsetCoordinates(lat, lng, distance) {
    const earthRadius = 6378137; // Earth's radius in meters
    const latOffset = (distance / earthRadius) * (180 / Math.PI);
    const lngOffset =
      ((distance / earthRadius) * (180 / Math.PI)) /
      Math.cos((lat * Math.PI) / 180);
    const newLat = lat + latOffset;
    const newLng = lng + lngOffset;
    return { lat: newLat, lng: newLng };
  }
});
</script>

<style>
/* Styles for the custom marker */
.popup-style {
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.leaflet-popup-tip {
  background: transparent; /* Make popup tip transparent */
}
</style>
