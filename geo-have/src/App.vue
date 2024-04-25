<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue' 
import {db} from '@/configs/firebase'
import { collection, getDocs } from "firebase/firestore";


onMounted(async() => {
  const querySnapshot = await getDocs(collection(db, "User"));
  let fbUser = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id,'=>', doc.data())
  
    const user = {
      id: doc.id,
      content:doc.data().content,
      done: doc.data().done
    }
    fbUser.push(user)
  })
})
</script>

<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <router-view />
</template>

<style scoped></style>
