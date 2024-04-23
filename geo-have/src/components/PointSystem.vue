<template>
</template>

<script setup>

let points = 0;


const earnPoints = (amount) => {
  points += amount; 
};


const spendPoints = (amount) => {
  if (points >= amount) { 
    points -= amount; 
  } else {
    alert("Not enough points!"); 
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');


</style>

  