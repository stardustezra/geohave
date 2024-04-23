<template>
    <div>
        <h1>404</h1>
        <p>Siden kunne ikke findes</p>
        <img src="../assets/icons/Flower.svg" alt="Flower">
    </div>
    <div class="backtostart-container">
        <div class="backtostart-button">
            <button @click="goToHome">Tilbage til forsiden</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
    router.push({ name: 'home' }); 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_regular.ttf") format("truetype");
}

h1 {
    font-family: "Stag";
    font-weight: 300;
    font-size: 64px;
    margin-top: 50px;
    margin-left: 30px;
}

p {
    font-family: "Stag";
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 10px;
    margin-left: 30px;
}

img {
    display: block; 
    margin: 0 auto;
    width: 180px; 
    height: auto; 
    margin-top: 40px;
}

.backtostart-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 200px;
}

.backtostart-button {
  width: 201px;
  height: 74px;
  background-color: #87A669;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backtostart-button button {
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
