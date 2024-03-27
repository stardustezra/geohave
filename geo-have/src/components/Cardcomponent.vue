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
@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_regular.ttf") format("truetype");
  /* You can include more font formats for better browser support */
}

/* Define your card styles here */
.card {
  background-color: #fef9ea;
}

.card-header {
  /* Header styles */
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 430px 104px; /* Set background size */
  color: white; /* Set text color to ensure visibility */
  padding: 20px; /* Adjust padding as needed */
}

.card-header h1 {
  font-family: "Stag", sans-serif; /* Use custom font */
  font-size: 24px; /* Set font size */
}

.card-body {
}

.card-footer {
  /* Footer styles */
}
</style>
