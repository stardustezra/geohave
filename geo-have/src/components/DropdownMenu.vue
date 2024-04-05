<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <ul class="dropdown-menu" v-if="isOpen">
    <li>
      <router-link to="/signup">Registrer</router-link>
    </li>
    <li><router-link to="/signin">Log ind</router-link></li>
    <li @click="signOut">Log ud</li>
  </ul>
</template>

<style scoped>
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--background-color);
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
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
  background-color: #fae284;
}
</style>
