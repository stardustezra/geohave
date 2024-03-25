<template>
    <header :class="{'scrolled-nav' : scrollPosition }">
      <nav>
        <div class="nav-logo">
          <img src="./assets/SVG_IKONER/White_Logo.svg" alt="">
        </div>
        <div class="ticket">
          <img src="./assets/SVG_IKONER/ticket.svg" alt="">
        </div>
        <div class="search-icon">
          <img src="./assets/SVG_IKONER/Search_svg" alt="">
        </div>
        <ul v-show="mobile" class="navigation">
          <li>
            <router-link class="link">Home</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  
  const scrollPosition = ref(false); // Assuming this is your scrollPosition variable
  const mobile = ref(true); // Assuming this is your mobile variable
  </script>
  