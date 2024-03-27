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
      <button class="burger-menu" @click="toggleMobileMenu">
        <img :src="BurgerMenu" alt="menu" />
      </button>
      <ul :class="{ 'navigation': !mobile, 'mobile-menu': mobile }">
        <li>
          <router-link to="/" class="home">Home</router-link>
        </li>
        <!-- Add more menu items as needed -->
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Search from "../assets/icons/Search_White.png";
import Ticket from "../assets/icons/Ticket.png";
import Geoh from "../assets/icons/Geoh.png";
import BurgerMenu from "../assets/icons/BurgerMenu.svg";

const scrollPosition = ref(false);
const mobile = ref(window.innerWidth < 768); 

function toggleMobileMenu() {
  mobile.value = !mobile.value;
}

// Update mobile value when window size changes
window.addEventListener('resize', () => {
  mobile.value = window.innerWidth < 768;
});
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2c5e36;
}

/* Styling for burger menu */
.burger-menu {
  display: none; 
}

@media (max-width: 767px) {
  .burger-menu {
    display: block; /* Show burger menu button for screens smaller than 768px */
  }

  .navigation {
    display: none; /* Hide navigation links by default on smaller screens */
  }

  .mobile-menu {
    display: block; /* Show mobile menu on smaller screens */
  }
}
</style>
