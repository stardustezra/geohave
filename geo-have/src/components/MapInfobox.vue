<template>
  <div class="map-container">
    <div id="map" class="map"></div>
    <div class="info-box">
      <h2>Tryk videre til næste opgave</h2>
      <p>
        På din enhed vil du kunne se forskellig områder. Disse skal du udforske,
        og når du finder skatten vil du få en opgave inden du får dine point.
      </p>
      <button @click="toggleTreasureAreas">Vis Skat</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showTreasureAreas = ref(false);

function toggleTreasureAreas() {
  showTreasureAreas.value = !showTreasureAreas.value;
  // Toggle visibility of treasure areas based on showTreasureAreas value
  if (showTreasureAreas.value) {
    showTreasure();
  } else {
    hideTreasure();
  }
}

function showTreasure() {
  // Show the treasure areas
  if (treasureAreaCircle1) treasureAreaCircle1.setStyle({ opacity: 1 });
  if (treasureAreaCircle2) treasureAreaCircle2.setStyle({ opacity: 1 });
}

function hideTreasure() {
  // Hide the treasure areas
  if (treasureAreaCircle1) treasureAreaCircle1.setStyle({ opacity: 0 });
  if (treasureAreaCircle2) treasureAreaCircle2.setStyle({ opacity: 0 });
}
</script>

<style scoped>
.map-container {
  position: relative; /* Set container position to relative */
  flex: 1;
}

.map {
  position: absolute;
  height: 100%; /* Fill up the entire container */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.info-box {
  position: absolute; /* Position the info box absolutely */
  top: 70%; /* Center vertically */
  left: 0;
  width: 100%; /* Take up full width of the screen */
  height: 30%; /* Set height to 30% of the screen */
  background-color: var(--background-color);
  padding: 20px;
  border-radius: 20px 20px 0 0; /* Set border radius to 20px */
  z-index: 1000; /* Ensure the info box is above the map */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

button {
  margin-top: 10px;
}
</style>
