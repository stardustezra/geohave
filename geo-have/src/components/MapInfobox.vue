<template>
  <div class="map-container">
    <div id="map" class="map"></div>
    <div class="info-box">
      <h2>Tryk videre til næste opgave</h2>
      <p>
        På din enhed vil du kunne se forskellige områder. Disse skal du
        udforske, og når du finder skatten, vil du få en opgave, inden du får
        dine point.
      </p>
      <button @click="showTreasureArea">Vis skatteområde</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showTreasureArea = () => {
  // Emit an event to the parent component to indicate that the button was clicked
  emit("showTreasureArea");
};
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 20px;
}
</style>
