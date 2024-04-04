<template>
    <div class="startpage">
      <h1 class="header-text">Information</h1>
      <p class="body-text">Velkommen til vores virtuelle skattejagt gennem Geografisk Have! Her venter en verden af spændende udfordringer på dig, lige fra klassiske multiple choice-spørgsmål og trivia, der tester din viden om geografiske fakta og kultur, til puslespil, der kræver logisk tænkning og øje for detaljer.</p>
      <h2 class="middle-text">Klar til at udfordre din viden?</h2>
      <div class="bullet-points">
        <div class="bullet-points-container">
          <ul>
            <li>Test dine evner med multiple choice-spørgsmål.</li>
            <li>Udfordre din viden med trivia.</li>
            <li>Løs puslespil for at afsløre skjulte skatte.</li>
            <li>Genkend ikoniske billeder fra verdensregionerne.</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
    .startpage {
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
    }
  
    .header-text {
      text-align: center;
      font-family: "Stag", sans-serif;
      font-size: 24px;
    }
  
    .body-text {
      text-align: left;
      margin-left: 25px;
      margin-right: 20px;
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
    }
  
    .middle-text {
      font-family: "Stag", sans-serif;
      font-size: 20px;
      margin-top: 30px;
    }
  
    .bullet-points {
        background-color: #FFF;
        padding: 20px;
        border-radius: 4px;
        margin-top: 10px;
        width: 90%; 
        max-width: 600px; 
        margin-left: auto; 
        margin-right: auto; 
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    }

    .bullet-points-container {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .bullet-points ul {
        padding-left: 0;
        margin-bottom: 10px;
        text-align: left; 
    }

    .bullet-points ul li {
        margin-bottom: 10px;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        font-size: 12px;
    }

  </style>
  