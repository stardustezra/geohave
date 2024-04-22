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
      <button @click="showNextArea">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import arrowIconUrl from "@/assets/icons/arrow.png";

const initialMap = ref(null);
let arrowMarker = null;
let treasureAreaCircle1 = null;
let treasureAreaCircle2 = null;
const showTreasureArea1 = ref(false);
const showTreasureArea2 = ref(false);

function toggleTreasureAreas() {
  showTreasureArea1.value = !showTreasureArea1.value;
  if (showTreasureArea1.value) {
    showTreasure(1);
  } else {
    hideTreasure(1);
  }
}

function showTreasure(area) {
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 1, fillOpacity: 0.5 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 1, fillOpacity: 0.5 });
  }
}

function hideTreasure(area) {
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 0, fillOpacity: 0 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 0, fillOpacity: 0 });
  }
}

function showNextArea() {
  hideTreasure(1); // Hide area 1
  showTreasureArea2.value = true;
  showTreasure(2); // Show area 2
}

onMounted(() => {
  initialMap.value = L.map("map").setView([0, 0], 20);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap.value);

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (!arrowMarker) {
          createArrowMarker([latitude, longitude]);
        } else {
          arrowMarker.setLatLng([latitude, longitude]);
        }

        initialMap.value.panTo([latitude, longitude]);

        if (treasureAreaCircle1) {
          treasureAreaCircle1.setLatLng([55.4043, 10.37975]);
        } else {
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

  function createArrowMarker(coordinates) {
    arrowMarker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: arrowIconUrl,
        iconSize: [30, 30],
      }),
    }).addTo(initialMap.value);
  }

  function createTreasureArea1(coordinates) {
    treasureAreaCircle1 = L.circle(coordinates, {
      color: "blue",
      fillColor: "#add8e6",
      fillOpacity: 0.5,
      radius: 20,
    }).addTo(initialMap.value);
    treasureAreaCircle1.bindPopup("Treasure area 1!", {
      className: "popup-style",
    });
    hideTreasure(1);
  }

  function createTreasureArea2(coordinates) {
    treasureAreaCircle2 = L.circle(coordinates, {
      color: "green",
      fillColor: "#90EE90",
      fillOpacity: 0.5,
      radius: 20,
    }).addTo(initialMap.value);
    treasureAreaCircle2.bindPopup("Treasure area 2!", {
      className: "popup-style",
    });
    hideTreasure(2);
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
