<script setup>
import Menu from "../components/Menu.vue";
// import Menu from "../components/Menu.vue";
import SigninForm from "../components/SigninForm.vue";
import SignupForm from "../components/SignupForm.vue";
import SignOut from "../components/SignOut.vue";
import Cardcomponent from "@/components/Cardcomponent.vue";
import LandingpageWelcome from "@/components/LandingpageWelcome.vue";
</script>

<template>
  <Menu />
  <Cardcomponent title="Skattejagt" />
  <LandingpageWelcome />
</template>
