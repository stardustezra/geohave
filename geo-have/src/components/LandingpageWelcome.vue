<template>
    <div class="centered">
      <div class="LandingpageButtons">
        <router-link to="/skattejagt" class="btn">
          <i class="material-icons">map</i>
             Start jagten
        </router-link>
        <button class="btn">
          <i class="material-icons">emoji_events</i> 
          Læs om præmier
        </button>
        <button class="btn">
          <i class="material-icons">question_mark</i> 
          Hjælp og support
        </button>
      </div>
    </div>
    <div class="caption">Om jagten</div>
    <div class="white-box">
      <h2 class="header">Skattejagt i haven</h2>
      <p class="body-text">Oplev Geografisk Have som aldrig før med vores spændende mobilskattejagt! Træd ind i en verden af eventyr, hvor hvert område, fra det mystiske Kina til det traditionelle Japan og det pulserende Europa, venter på at blive udforsket. Ved hjælp af QR-koder vil du blive udfordret med spændende opgaver og sjove aktiviteter, der tester din viden og evner. 
        <br><br>
        Optjen point, lås op for præmier som billetter til haven, merchandise og endda muligheden for at vinde en drømmerejse! Grib din telefon, saml dine venner og familie, og bliv en del af denne uforglemmelige rejse gennem Geografisk Have. Velkommen til en verden af læring og leg!</p>
        <br><br><br><br>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import StartHunt from './StartHunt.vue';


</script>



  
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 225px;
    overflow-x: hidden;
}
  
.LandingpageButtons {
    text-align: center;
}
  
.btn {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 20px;
    background-color: #2C5E36;
    color: #F1F1F1;
    cursor: pointer;
    width: 350px; 
    border: none; 
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
}
  


  
.caption {
    color: #000; 
    font-size: 24px; 
    margin-left: 37px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
}
  
.white-box {
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
    width: 90%; 
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
}
  
.header {
    color: #000;
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: -15px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
}
  
.body-text {
    color: #000;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
}


</style>
  