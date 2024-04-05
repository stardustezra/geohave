<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="wrapper">
    <div class="pointshop-header">
      <!-- background overlay -->
      <div class="overlay"></div>
      <!-- Change the source of the image to one with a transparent background -->
      <img
        src="../assets/icons/dotted_black_background.svg"
        class="background-image"
      />
      <!-- Add a container for the image overlay -->
      <div class="image-overlay">
        <!-- Change the source to the image you want as an overlay -->
        <img
          src="../assets/icons/dotted_black_background.svg"
          class="background-image"
        />
      </div>
      <div class="pointshop-text">
        <h2>Pointshop</h2>
        <p>Samlede optjente point</p>
        <h2>{{ point }} 20</h2>
        <p>Optjen flere point for at få flere præmier</p>
        <div class="icon">
          <img src="../assets/icons/trophy.svg" alt="trophy" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pointshop-header {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;
  background-color: var(--primary-green);
  padding: 20px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.pointshop-text {
  position: relative; /* Ensure text remains on top of the overlay */
  z-index: 1;
}

@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_bold.ttf") format("truetype");
}

h2 {
  font-family: "Stag", sans-serif;
  font-size: 36px;
  color: var(--primary-yellow);
  z-index: 1;
}

p {
  color: white;
}
</style>
