<template>
  <div>
    <h1>Point</h1>
    <p>Samlede optjente point</p>
    <h2>20</h2>
    <p>optjen flere point for flere præimere</p>
    
    <!-- Knapper til at optjene og bruge point -->
    <button @click="earnPoints(10)">Earn 10 Points</button>
    <button @click="spendPoints(5)">Spend 5 Points</button>
  </div>
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

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');


</style>

  