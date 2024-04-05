<template>
<div class="start-button-container">
    <div class="start-button">
        <button>START JAGTEN</button>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.start-button-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 200px;
}

.start-button {
  width: 201px;
  height: 74px;
  background-color: #87A669;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-button button {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  color: white;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
</style>
