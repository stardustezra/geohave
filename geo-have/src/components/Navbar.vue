<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <router-link to="/">
        <div class="nav-logo">
          <img :src="Geoh" alt="logo" />
        </div>
      </router-link>
      <div class="ticket">
        <img :src="Ticket" alt="ticket" />
      </div>
      <div class="search-icon">
        <i class="material-icons">search</i>
      </div>
      <div
        :class="{ open: isOpen }"
        @click="toggleMenu"
        class="nav-icon"
        id="nav-icon3"
      >
        <!-- Add class 'burger-menu' if mobile is true -->
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="dropdown-menu" v-if="isOpen">
        <li v-if="!authenticated">
          <router-link to="/signup">Registrer</router-link>
        </li>
        <li v-if="!authenticated">
          <router-link to="/signin">Log ind</router-link>
        </li>
        <li>
          <router-link to="/pointshop">Point Shop</router-link>
        </li>
        <li>
          <router-link to="/skattejagt">Skattejagt</router-link>
        </li>
        <li v-if="authenticated" @click="signOut">Log ud</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { stateChange, onSignOut } from "@/services/AuthService";

const isOpen = ref(false);
const authenticated = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log("Toggle menu function called. isOpen:", isOpen.value);
};

import Search from "../assets/icons/Search_White.png";
import Ticket from "../assets/icons/billet.png";
import Geoh from "../assets/icons/Geoh.png";

const scrollPosition = ref(false);
const mobile = ref(window.innerWidth < 768);

// Update mobile value when window size changes
window.addEventListener("resize", () => {
  mobile.value = window.innerWidth < 768;
});

// watch for changes in auth state
stateChange((user) => {
  authenticated.value = !!user; // update authenticated based on user existence
});

// sign out function
const signOut = async () => {
  await onSignOut();
};

stateChange((user) => {
  authenticated.value = !!user;
});
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
  background-color: var(--primary-green);
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
  background-color: #fae284;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
}

.ticket img,
.search-icon img {
  max-width: 100%;
  max-height: 100%;
}

.search-icon {
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  .material-icons {
    color: #fff;
    font-size: 45px;
  }
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
  transition: 0.25s ease-in-out;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--background-color);
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  z-index: 9999;
}

.dropdown-menu li {
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.dropdown-menu li a {
  color: #000;
  text-decoration: none;
}

.dropdown-menu li:hover {
  background-color: red;
}

/* Initial state of the spans */
.nav-icon span:nth-child(1) {
  top: 0px;
}

.nav-icon span:nth-child(2),
.nav-icon span:nth-child(3) {
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

  .ticket,
  .search-icon {
    height: 45px;
    width: 105px;
  }

  .ticket img,
  .search-icon img {
    width: 50%; /* Mindre end før */
    height: 50%; /* Mindre end før */
  }

  .ticket {
    width: 180px; /* Mindre end før */
    height: 70px; /* Mindre end før */
  }

  .nav-icon span {
    height: 2px; /* Adjust thickness as needed */
    width: 25px; /* Adjust width as needed */
  }

  .nav-icon span:nth-child(1) {
    top: 6px; /* Juster topafstanden for første span */
  }

  .nav-icon span:nth-child(2),
  .nav-icon span:nth-child(3) {
    top: 16px; /* Juster topafstanden for andet og tredje span */
  }

  .nav-icon span:nth-child(4) {
    top: 26px; /* Juster topafstanden for fjerde span */
  }
}
</style>
