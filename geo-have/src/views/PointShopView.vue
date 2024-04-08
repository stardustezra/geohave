<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="wrapper">
    <div class="pointshop-header">
      <img
        src="../assets/icons/dotted_black_background.svg"
        class="overlay-image"
      />
      <div class="pointshop-text">
        <h2>Points</h2>
        <p>Samlede optjente point</p>
        <h2>{{ point }} 20</h2>
        <p>Optjen flere point for at få flere præmier</p>
      </div>
      <div class="icon">
        <img src="../assets/icons/trophy.svg" alt="trophy" />
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
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  position: relative;
  background-color: var(--primary-green);
  padding: 20px;
  border-radius: 4px;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: 1;
}

.pointshop-text {
  position: relative; /* Ensure text remains on top of the overlay */
  z-index: 1;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color-overlay: var(--primary-yellow);
  margin-left: 20px;
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
