<template>
  <div class="startpage">
    <h1 class="header-text">Information</h1>
    <p class="body-text">
      Velkommen til vores virtuelle skattejagt gennem Geografisk Have! Her
      venter en verden af spændende udfordringer på dig, lige fra klassiske
      multiple choice-spørgsmål og trivia, der tester din viden om geografiske
      fakta og kultur, til puslespil, der kræver logisk tænkning og øje for
      detaljer.
    </p>
    <h2 class="middle-text">Klar til at udfordre din viden?</h2>
    <div class="bullet-points">
      <div class="bullet-points-container">
        <ul>
          <li class="bullet-item">
            <p>Test dine evner med multiple choice-spørgsmål.</p>
            <img
              src="../assets/icons/clipboard-list.svg"
              alt="Clipboard-list"
            />
          </li>
          <li class="bullet-item">
            <p>Udfordre din viden med trivia.</p>
            <img src="../assets/icons/question.svg" alt="Questionmark" />
          </li>
          <li class="bullet-item">
            <p>Løs puslespil for at afsløre skjulte skatte.</p>
            <img src="../assets/icons/Puzzle_piece.svg" alt="Puzzle piece" />
          </li>
          <li class="bullet-item">
            <p>Genkend ikoniske billeder fra verdensregionerne.</p>
            <img src="../assets/icons/Globe.svg" alt="Globe" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <StartButton />
</template>

<script setup>
import StartButton from "@/components/StartButton.vue";
</script>

<style scoped>
.startpage {
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
}

.header-text {
  text-align: center;
  font-family: "Kameron", serif;
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
  font-family: "Kameron", serif;
  font-size: 20px;
  margin-top: 30px;
}

.bullet-points {
  background-color: #fff;
  padding: 25px;
  border-radius: 4px;
  margin-top: 10px;
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}

.bullet-points-container {
  display: grid;
  grid-template-rows: repeat(4, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.bullet-points ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: -8px;
  text-align: left;
}

.bullet-points ul li {
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 12px;
  position: relative;
}

.bullet-points ul li::before {
  content: "\2022";
  color: #000;
  font-size: 12px;
  margin-right: 8px;
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}

.bullet-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.bullet-item p {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 12px;
  text-align: left;
}

.bullet-item img {
  margin-left: auto;
  width: 20px;
}

.bullet-item img[src$="Globe.svg"] {
  width: 26px;
}

.bullet-item img[src$="Puzzle_piece.svg"] {
  width: 28px;
}
</style>
