
<template>
  <div class="overlay" id="overlay"></div>
  <Navbar />
  <div class="wrapper">
    <div class="pointshop-header">
      <img
        src="../assets/icons/dotted_black_background.svg"
        class="overlay-image"
      />
  
      <img
        src="../assets/icons/dotted_black_background.svg"
        class="overlay-image"
      />
      <div class="pointshop-text">
        <h2>Points</h2>
        <p>Samlede optjente point</p>
        <h2>{{ points }}</h2>
        <p>Optjen flere point for at få flere præmier</p>
        <p class="small-text">* indløs point før næste sæson</p>
   
      </div>
      <div class="icon">
        <img src="../assets/For-grid/trophy_Yellow.png" alt="trophy" />
      </div>
    </div>
  </div>
<div class="pointshop-section2">
  <h2>Indløs</h2>  
  <div class="container">
    <PointShopIthem v-for="item in PointShopItemsLocal" :key="item.id" :icon="item.icon" :points="item.cost" :text="item.text" :uses="pointShopTransactions.filter(x => x.pointShopItemId === item.id).length" :max="item.max" @click="makeTransaction(item.id,item.cost,item.max)"/>
  </div>
</div>

</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import PointShopIthem from "../components/PointShopIthem.vue";
import PointSystem from "../components/PointSystem.vue";

const PointShopItemsLocal = [
  {
    id: 1,
    cost: 20,
    icon: "soda",
    text: "Sodavand eller egent valg",
    max: 5
  },
  {
    id: 2,
    cost: 50,
    icon: "icecream",
    text: "Gratis dessert efter valg",
    max: 3
  },
  {
    id: 3,
    cost: 150,
    icon: "ticket",
    text: "50% på næste besøg",
    max: 1
  },
  {
    id: 4,
    cost: 300,
    icon: "lego",
    text: "Gratis billet til Legoland",
    max: 1
  }
]

var storedPoints = parseInt(localStorage.getItem('points'));
var points = !isNaN(storedPoints) ? storedPoints : 0;

var storedTransactions = localStorage.getItem('pointShopTransactions');
var pointShopTransactions = storedTransactions !== null ? JSON.parse(storedTransactions) : [];

function makeTransaction(pointShopItemId, cost, max) {
  if(points > cost && pointShopTransactions.filter(x => x.pointShopItemId === pointShopItemId).length < max) {
    points = points - cost;
    localStorage.setItem('points', JSON.stringify(points));

    pointShopTransactions.push({ userId: 1, pointShopItemId: pointShopItemId})
    localStorage.setItem('pointShopTransactions', JSON.stringify(pointShopTransactions));
  }
  else {
    //Display not posible
    
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.pointshop-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 10px 0px 10px;
  position: relative;
  background-color: var(--primary-green);
  padding: 20px;
  border-radius: 4px;

  h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  color: var(--primary-yellow);
  z-index: 1;
}
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: 1;
}

.pointshop-text {
  position: relative; /* Ensure text remains on top of the overlay */
  z-index: 1;

}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color-overlay: var(--primary-yellow);
  margin-left: 20px;
  img{
    color: var(--primary-yellow);
    height: 145px;
    width: 215px;
    margin: 0px;
  }
}

@font-face {
  font-family: "Stag";
  src: url("../assets/fonts/stag_bold.ttf") format("truetype");
}



p {
  color: white;
  
}
.small-text {
        
        font-size: 10px;
        margin-top: 5px;
}

.pointshop-section2 {


  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    font-size: 36px;
    color: black;
    margin: 10px 30px 10px 30px; 
    

} }

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center;
  place-items: center;
}




 

</style>
