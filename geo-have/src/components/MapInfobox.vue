<template>
  <div class="map-container">
    <div id="map" class="map"></div>
    <div class="info-box">
      <h2>Treasure Map</h2>
      <p>This is your treasure map. Explore and find the hidden treasure!</p>
    </div>
  </div>
</template>

<script setup></script>

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
  bottom: 10px; /* Adjust bottom position as needed */
  left: 10px; /* Adjust left position as needed */
  background-color: var(--background-color);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the info box is above the map */
}
</style>
