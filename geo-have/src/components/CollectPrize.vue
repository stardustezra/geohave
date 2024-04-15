<template>
    <div>
        <div class="backtostart-button" @click="goToHome">
            <img src="../assets/icons/back-button.png" alt="Back to Home" class="back-button">
        </div>
        <div class="container">
            <img src="../assets/icons/White_V2.png" alt="Flower" class="black-image">
            <h1>Tillykke med din præmie!</h1>
        </div>
        <div class="expiring-date">
            <hr>
            <p class="expiring-text">Udløber: 31/08/24</p>
            <hr>
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

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back-button {
    cursor: pointer;
}

.black-image {
    filter: invert(100%) grayscale(100%);
    width: 223px;
    height: 196px;
    margin-top: 10px;
}

h1 {
    font-family: "Stag";
    font-weight: 300;
    font-size: 32px;
    margin-top: 20px;
}

.backtostart-button {
    margin-top: 40px;
    margin-left: 20px;
}

.expiring-date {
    margin: auto; 
    text-align: center; 
    width: 150px; 
}

hr {
    margin: 10px 0; 
}
</style>
