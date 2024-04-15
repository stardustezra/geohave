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
            <p class="expiring-text">Udløber: 31/08/24</p>
             <p class="congrats-text">
                    Tillykke! Du har vundet en gratis sodavand!
                    Du kan indløse din præmie ved at vise denne besked til personalet i cafeen.
             </p>
        </div>
        <div class="qr-container">
            <img src="../assets/icons/qr-code.png" alt="QR code" class="QR-picture">
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
    width: 90%; 
}

hr {
    margin: 10px 0;
    height: 2px; 
    background-color: black; 
}

.expiring-text{
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 20px;
    border-bottom: 1px solid black; 
    padding-bottom: 10px; 
    border-top: 1px solid black; 
    padding-top: 10px; 
    width: 291px; 
    margin: 0 auto; 
    margin-top: 15px;
}

.congrats-text {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-top: 30px;
}

.QR-picture {
    width: 185px;
    display: block; 
    margin: 0 auto; 
    margin-top: 30px;
}


</style>
