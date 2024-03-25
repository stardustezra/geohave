<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="nav-logo">
        <img :src="Geoh" alt="logo" />
      </div>
      <div class="ticket">
        <img :src="Ticket" alt="ticket" />
      </div>
      <div class="search-icon">
        <img :src="Search" alt="search" />
      </div>
      <ul v-show="mobile" class="navigation">
        <li>
          <router-link to="/" class="home">Home</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Search from "../assets/icons/Search_White.png";
import Ticket from "../assets/icons/Ticket.png";
import Geoh from "../assets/icons/Geoh.png";

const scrollPosition = ref(false); // Assuming this is your scrollPosition variable
const mobile = ref(true); // Assuming this is your mobile variable
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2c5e36;
}
</style>
