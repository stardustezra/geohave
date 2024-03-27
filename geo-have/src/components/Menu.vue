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
      <div :class="{ 'open': isOpen }" @click="toggleMenu" class="nav-icon" id="nav-icon3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

import Search from "../assets/icons/Search_White.png";
import Ticket from "../assets/icons/billet.png";
import Geoh from "../assets/icons/Geoh.png";

const scrollPosition = ref(false);
const mobile = ref(window.innerWidth < 768); 

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
  padding: 10px; 
  height: 70px; 
}

.nav-logo {
  display: flex;
  align-items: center;
}

/* Tilpas størrelsen af logoet baseret på skærmstørrelsen */
.nav-logo img {
  max-width: 100%;
  max-height: 100%;
}

.ticket {
  display: flex;
  background-color: #FAE284;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
}

.ticket img, .search-icon img {
  max-width: 100%;
  max-height: 100%;
}

.search-icon{
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
}

.search-icon img {
  width: 30px;
  height: 30px;
}

.nav-icon {
  width: 45px; 
  height: 35px; 
  position: relative;
  margin: 0 20px; 
  cursor: pointer;
}

.nav-icon span {
  display: block;
  position: absolute;
  height: 7px; 
  width: 100%;
  background: #fff;
  border-radius: 7px; 
  opacity: 1;
  left: 0;
  transition: .25s ease-in-out;
}

/* Initial state of the spans */
.nav-icon span:nth-child(1) {
  top: 0px;
}

.nav-icon span:nth-child(2), .nav-icon span:nth-child(3) {
  top: 14px; /* Adjust the top position of spans */
}

.nav-icon span:nth-child(4) {
  top: 28px; /* Adjust the top position of spans */
}

/* When the menu is open, transform the spans */
.nav-icon.open span:nth-child(1) {
  top: 14px; /* Adjust the top position of spans */
  width: 0%;
  left: 50%;
}

.nav-icon.open span:nth-child(2) {
  transform: rotate(45deg);
}

.nav-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.nav-icon.open span:nth-child(4) {
  top: 14px; /* Adjust the top position of spans */
  width: 0%;
  left: 50%;
}

/* Styling for burger menu */
.burger-menu {
  display: none; 
}

.burger-menu .nav-icon {
  display: block;
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

  .nav-icon span {
    height: 4px; /* Juster tykkelsen efter behov */
    border-radius: 4px; /* Juster hjørneradius efter behov */
  }

  .nav-logo img {
    max-width: 190px; 
    max-height: 43px; 
    margin-right: 20px;
  }

  .ticket {
    margin-right: 5px; /* Tilføj margen til højre for .ticket */
  }

  .ticket, .search-icon {
    height: 45px;
    width: 105px;
  }

  .ticket img, .search-icon img {
    width: 50%; /* Mindre end før */
    height: 50%; /* Mindre end før */
  }
  
  .ticket {
    width: 180px; /* Mindre end før */
    height: 70px; /* Mindre end før */
  }

  .search-icon {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: -10px; 
}

  .nav-icon span {
    height: 2px; /* Adjust thickness as needed */
    width: 25px; /* Adjust width as needed */
  }

  .nav-icon span:nth-child(1) {
    top: 6px; /* Juster topafstanden for første span */
  }

  .nav-icon span:nth-child(2), .nav-icon span:nth-child(3) {
    top: 16px; /* Juster topafstanden for andet og tredje span */
  }

  .nav-icon span:nth-child(4) {
    top: 26px; /* Juster topafstanden for fjerde span */
  }
}
</style>
