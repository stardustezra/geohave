<template>
    <div class="wrapper">
    <h2>Registrer</h2>
<form @submit.prevent="signUp">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
<button @click="register">Registrer</button>
</form>
</div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //imports router

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Succesfully registered!");
        router.push('/'); // router.push redirects to home after sign in
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message)
    })
};
</script>