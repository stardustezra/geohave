<template>
  <!-- Map container with map and info box -->
  <div class="map-container">
    <div class="circle">
      <span class="points"> {{ UserPointsOnline }} Point</span>
    </div>
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
import QuizOne from "@/components/QuizOne.vue";
import { db } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore";

const UserId = "mEtSdqN5wGPjkhwlEctfwvzZI7n1"; //todo: laves om til global
const UserPointsOnline = ref(0);

// Funktion til at tilføje point automatisk baseret på scrolling
window.addEventListener("scroll", function () {
  // Tilføj f.eks. 5 point når brugeren har rullet ned 500 pixels eller mere
  if (window.scrollY >= 500) {
    tilføjPointAutomatisk(5);
  }
});

// Define variables and refs
const initialMap = ref(null);
let arrowMarker = null;
let treasureAreaCircle = null;
const showQuiz = ref(false); // Add showQuiz ref and set it to false initially

// Define treasure area coordinates
const treasureAreaCoordinates = [55.4043, 10.37975];
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

  (async () => {
    const querySnapshotUserPoints = await getDocs(collection(db, "User"));
    querySnapshotUserPoints.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      if (doc.data().uid === UserId) {
        UserPointsOnline.value = doc.data().points;
      }
    });
  })(); // Immediately invoke the async function
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
  margin-top: 25px;
  margin-bottom: 0px;
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-yellow);
  color: black;
  font-size: 14px;
  z-index: 401;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adjust values as needed */
  left: 75%;
}
.circle span {
  transition: 0.5s ease-in-out;
}
</style>
