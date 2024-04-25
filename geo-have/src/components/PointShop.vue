
<template>
    <div class="overlay" id="overlay"></div>
    <div class="wrapper">
      <div class="pointshop-header">
        <img
          src="../assets/icons/dotted_black_background.svg"
          class="overlay-image"
        />
    
       
        <div class="pointshop-text">
          <h2>Points</h2>
          <p>Samlede optjente point</p>
          <h2>{{ UserPointsOnline }}</h2>
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
      <PointShopIthem v-for="item in PointShopItemsOnline" :key="item.id" :icon="item.icon" :points="item.cost" :text="item.text" :uses="PointShopTransactionsOnline.filter(x => x.PointShopItemId === item.id).length" :max="item.max" @click="makeTransaction(item.id,item.cost,item.max)"/>
    </div>
  </div>

<div v-if="displayPopup" class="popup-back-style">
  <div class="popup-window-style">
    <h2>Du har brugt alle dine points</h2>
    <div>
      <p class="popup-hint">Hint:</p>
      <p> Du kan først bruge eller optjene efter næste sæson.</p>
    </div>
    <button class="popup-button-style" @click="closePopup()">OK</button>
  </div>
</div>
  
  </template>
  
  <script setup>

  import PointShopIthem from "../components/PointShopIthem.vue";
  import { ref, onMounted } from 'vue' 
  import {db} from '@/configs/firebase'
  import { collection,addDoc, updateDoc, doc, getDocs } from "firebase/firestore";
  import router from "@/router";

  const UserId = "1";//todo: laves om til global 
  const PointShopItemsOnline = ref([]);
  const PointShopTransactionsOnline = ref([]);
  const UserPointsOnline = ref(0);
  
  onMounted(async() => {
    const querySnapshotPointShopItem = await getDocs(collection(db, 'PointShopItem'));
    querySnapshotPointShopItem.forEach((doc) => {
      console.log(doc.id,'=>', doc.data())
      const item = doc.data();
      item.id = doc.id;
      PointShopItemsOnline.value.push(item)
    });
    const querySnapshotUserPoints = await getDocs(collection(db,'User'));
    querySnapshotUserPoints.forEach((doc)=> {
      console.log(doc.id,'=>', doc.data())
      if(doc.id === UserId){
        UserPointsOnline.value = doc.data().Points;
      }
    });
    const querySnapshotPointShopTransactions = await getDocs(collection(db, 'UserPointShopTransaction'));
    querySnapshotPointShopTransactions.forEach((doc)=> {
      console.log(doc.id,'=>', doc.data());
      if(doc.data().UserId === UserId) {
        PointShopTransactionsOnline.value.push(doc.data());
      }
    });
  })
  
  const displayPopup = ref(false); 
  
  function makeTransaction(pointShopItemId, cost, max) {
   
    if(UserPointsOnline.value > cost && PointShopTransactionsOnline.value.filter(x => x.pointShopItemId === pointShopItemId).length < max) {
      UserPointsOnline.value = UserPointsOnline.value - cost;
  
      const userRef = doc(db, "User", UserId);
      updateDoc(userRef, {
        Points: UserPointsOnline.value
      });
  
      PointShopTransactionsOnline.value.push({ userId: UserId, pointShopItemId: pointShopItemId})
      addDoc(collection(db, "UserPointShopTransaction"), {
        PointShopItemId: pointShopItemId,
        UserId: UserId
      });

      //TODO: Move to reward page

      router.push('/collect'); 
    }
    else {
      displayPopup.value = true;
    }
  }
  
  function closePopup() {
    displayPopup.value = false;
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
  
  }
  
  .pointshop-text {
    position: relative; /* Ensure text remains on top of the overlay */
    z-index: 1;
    p {
      color: white;
    }
  }
  
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    z-index: 1;
    color-overlay: var(--primary-yellow);
    margin-left: 20px;
    img{
      color: var(--primary-yellow);
      height: 160px;
      width:315px;
      margin: 0px;
    }
  }
  
  @font-face {
    font-family: "Stag";
    src: url("../assets/fonts/stag_bold.ttf") format("truetype");
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
  .popup-back-style {
    z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  }
  
  .popup-window-style {
  
    background-image: linear-gradient(to bottom, var(--color1, #87A669), var(--color2, #2C5E36));
    width: 100%;
    margin: 20px;
    justify-content: center;
    padding: 50px;
    border-radius: 3px;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    h2{
      font-family: "Open Sans", sans-serif;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
    
    
  
    }
  
  }
  .popup-hint{
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
  }
  
  .popup-button-style{
   background-color: var(--primary-yellow);
   height: 50px;
   width: 80%;
   justify-content: center;
    border: none;
    font-family: "Open Sans", sans-serif;
      font-weight: 500;
    border-radius: 5px;
    font-size: 17px;
    margin-top: 20px;
  }
  
  
  </style>
  