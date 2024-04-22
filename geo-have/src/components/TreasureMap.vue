<template>
  <div class="map-container">
    <div id="map" class="map"></div>
    <div class="info-box">
      <h2>Tryk videre til næste opgave</h2>
      <p>
        På din enhed vil du kunne se forskellige områder. Disse skal du
        udforske, og når du finder skatten, vil du få en opgave, før du får dine
        point.
      </p>
      <button @click="toggleTreasureAreas">Vis Skat</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import arrowIconUrl from "@/assets/icons/arrow.png";

const initialMap = ref(null);
let arrowMarker = null; // Reference to the arrow marker
let treasureAreaCircle1 = null; // Reference to the first treasure area circle
let treasureAreaCircle2 = null; // Reference to the second treasure area circle
const showTreasureArea1 = ref(false);
const showTreasureArea2 = ref(false);

function toggleTreasureAreas() {
  showTreasureArea1.value = !showTreasureArea1.value;
  showTreasureArea2.value = !showTreasureArea1.value;
  // Toggle visibility of treasure areas based on showTreasureArea1 value
  if (showTreasureArea1.value) {
    showTreasure(1);
  } else {
    hideTreasure(1);
  }
}

function showTreasure(area) {
  // Show the selected treasure area
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 1, fillOpacity: 0.5 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 1, fillOpacity: 0.5 });
  }
}

function hideTreasure(area) {
  // Hide the selected treasure area
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 0, fillOpacity: 0 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 0, fillOpacity: 0 });
  }
}

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
    hideTreasure(1); // Initially hide treasure area 1
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
    hideTreasure(2); // Initially hide treasure area 2
  }
});
</script>

<style scoped>
.map-container {
  position: relative;
  flex: 1;
}

.map {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.info-box {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: var(--background-color);
  padding: 20px;
  border-radius: 20px 20px 0 0;
  z-index: 1000;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
}
</style>
