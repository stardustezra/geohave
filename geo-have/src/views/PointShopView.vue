<script setup>
import { ref } from 'vue';

// Opret en referencevariabel til at styre overlayets synlighed
const overlayActive = ref(true);
</script>

<template>
  <div>
    <!-- Overlayet -->
    <div class="overlay" v-if="overlayActive"></div>
    
    <!-- Indholdet af din komponent -->
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
  </div>
</template>

<style scoped>
/* Dit CSS-stil her */

.overlay {
  position: fixed;    
  left: 0;  
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5); /* Gennemsigtig hvid farve */
  z-index: 50;
}
</style>
