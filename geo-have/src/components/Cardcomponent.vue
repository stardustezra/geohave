<template>
  <div class="card">
    <div
      class="card-header"
      :style="{ 'background-image': `url(${backgroundUrl})` }"
    >
      <h1>{{ title }}</h1>
    </div>
    <div class="card-body">
      <!-- Body content -->
    </div>
    <div class="card-footer">
      <!-- Footer content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import cover from "../assets/images/Cover.png";

// Props
const props = defineProps({
  title: String,
});

// Data
const backgroundUrl = ref(cover); // Bind imported image to background URL
</script>

<style scoped>
/* Define your card styles here */
.card {
  background-color: #fef9ea;
}

.card-header {
  /* Header styles */
  background-size: 430px 104px; /* Set background size */
  background-position: center;
  color: white; /* Set text color to ensure visibility */
  padding: 20px; /* Adjust padding as needed */
}

.card-body {
  /* Body styles */
}

.card-footer {
  /* Footer styles */
}
</style>
