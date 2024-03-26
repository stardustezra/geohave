<template>
    <div class="wrapper">
    <h2>Log ind</h2>
<form @submit.prevent="signUp">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <p v-if="errMsg">{{ errMsg }}</p>
<button @click="register">Log ind</button>
</form>
</div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //imports router

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Succesfully logged in!");
       //  router.push('/home'); // router.push redirects to home after sign in
    })
    .catch((error) => {
        console.log(error.code); 
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        alert(error.message)
    })
};
</script>

<style scoped>

</style>