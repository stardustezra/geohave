<template>
  <!-- Map container with map and info box -->
  <div class="map-container">
    <div id="map" class="map"></div>
  </div>
  <TaskOverlay @toggleTreasureAreas="toggleTreasureAreas" />
  <div class="points-counter">
        <confettiExplosion class="confetti" v-if="maxPointsReached" />
        <div class="circle" :class="{ 'pop-out': maxPointsReached }">
          <span class="points">  {{ points }} Point</span>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import arrowIconUrl from "@/assets/icons/arrow.png";
import TaskOverlay from "@/components/TaskOverlay.vue";
import { db } from "@/configs/firebase";

const points = ref(20);

// Funktion til at tilføje point automatisk baseret på scrolling
window.addEventListener('scroll', function() {
    // Tilføj f.eks. 5 point når brugeren har rullet ned 500 pixels eller mere
    if (window.scrollY >= 500) {
        tilføjPointAutomatisk(5);
    }
});

// Funktion til at tilføje point automatisk
function tilføjPointAutomatisk(amount) {
    points += amount;
    pointCounter.textContent = points;
}


// Define variables and refs
const initialMap = ref(null);
let arrowMarker = null;
let treasureAreaCircle1 = null;
let treasureAreaCircle2 = null;
const showTreasureArea1 = ref(false);
const showTreasureArea2 = ref(false);



// Function to toggle visibility of treasure areas
function toggleTreasureAreas() {
  showTreasureArea1.value = !showTreasureArea1.value;
  if (showTreasureArea1.value) {
    showTreasure(1);
  } else {
    hideTreasure(1);
  }
  console.log("Treasure areas toggled");
}

// Function to show treasure area and update its style
function showTreasure(area) {
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 1, fillOpacity: 0.5 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 1, fillOpacity: 0.5 });
  }
}

// Function to hide treasure area and update its style
function hideTreasure(area) {
  if (area === 1 && treasureAreaCircle1) {
    treasureAreaCircle1.setStyle({ opacity: 0, fillOpacity: 0 });
  } else if (area === 2 && treasureAreaCircle2) {
    treasureAreaCircle2.setStyle({ opacity: 0, fillOpacity: 0 });
  }
}

// Function to show next treasure area
function showNextArea() {
  hideTreasure(1); // Hide area 1
  showTreasureArea2.value = true;
  showTreasure(2); // Show area 2
}

// Perform actions when component is mounted
onMounted(() => {
  // Initialize map
  initialMap.value = L.map("map").setView([0, 0], 20);

  // Add tile layer to map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(initialMap.value);

  // Check geolocation support and watch position
  if ("geolocation" in navigator) {
    let isFirstRender = true;

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Update arrow marker position
        if (!arrowMarker) {
          createArrowMarker([latitude, longitude]);
        } else {
          arrowMarker.setLatLng([latitude, longitude]);
        }

        // Pan map to current position (fjern if)
        if (isFirstRender) {
          isFirstRender = false;
          initialMap.value.panTo([latitude, longitude]);
        }

        // Set treasure area positions
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

  // Function to create arrow marker
  function createArrowMarker(coordinates) {
    arrowMarker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: arrowIconUrl,
        iconSize: [30, 30],
      }),
    }).addTo(initialMap.value);
  }

  // Function to create treasure area 1
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

  // Function to create treasure area 2
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

/* Styles for info box */
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
  padding-top: 100px;
}

/* Styles for buttons */
button {
  margin-top: 10px;
}
.circle {
  margin-top: 10em;
  margin-bottom: 6em;
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-yellow);
  color: black;
  font-size: 14px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adjust values as needed */
  top: -660px; /* Flytter elementet 10 piksler ned fra sin normale posisjon */
  left: 310px

}
.circle span {
  z-index: 9999;
  transition: 0.5s ease-in-out;
}

</style>
