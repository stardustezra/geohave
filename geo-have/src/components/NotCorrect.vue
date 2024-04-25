<template>
    <div class="container">
        <h1 class="bold-text">Bedre held næste gang!</h1>
    </div>
    <div class="box">
            <h2>Fun Fact:</h2>
            <p>Det kinesiske Paradisæbletræ blomstrer om <strong style="color: #2C5E36; font-weight: bold;">foråret</strong>, 
                ofte i marts eller april, afhængigt af klimaet. Dets blomster 
                er store og lyserøde eller hvide, hvilket skaber en spektakulær 
                syn, der tiltrækker mange beundrere. Det er en af de træer, der 
                markerer starten på foråret i mange klimaer, og blomstringen er 
                ofte fejret i kinesisk kultur som et symbol på ny vækst og skønhed.
            </p>
        </div>
        <div class="button-container">
         <button class="button">Forsæt jagten</button>
        </div>
</template>

<script setup>

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 110px;
    margin-bottom: 40px;
    font-family: 'Kameron', serif;
    font-size: 16px;
}

.bold-text {
    font-weight: bold;
}

.box {
    background-color: #FFFFFF;
    padding: 20px;
    text-align: center;
    margin-left: 20px; 
    margin-right: 20px; 
}

.box h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
}

.box p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.button {
  width: 201px;
  height: 74px;
  background-color: #87a669;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}


</style>