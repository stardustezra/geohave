<template>
  <div class="page-container">
    <div class="wrapper">
      <div class="top-section">
        <h2>Log ind</h2>
        <p>For at begynde skattejagten</p>
      </div>
      <form @submit.prevent="onSubmitForm" class="signin-form">
        <div class="form-container">
          <p>Email</p>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Email"
            required
          />
          <p>Password</p>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Log ind</button>
      </form>
      <p v-if="errMsg" class="error-message">{{ errMsg }}</p>
      <div class="links-section">
        <p class="signup-link">
          <router-link to="/signup">Opret konto</router-link>
        </p>
        <p class="guest-link">
          <router-link to="/skattejagt" @click="handleContinueAsGuest">Fortsæt som gæst</router-link>
        </p>
      </div>
      <hr />
      <div class="socials-signin">
          <p><button @click="signInWithGoogle">Log ind med Google</button></p>
          <p><button @click="signInWithFacebook">Log ind med Facebook</button></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signIn } from "@/services/AuthService";
import signInAnonymously from '../services/signInAnonymously';
import { signInWithGoogle } from "@/services/AuthService";
import { signInWithFacebook } from "@/services/AuthService";
import { useRouter } from "vue-router"; 

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter(); 

const onSubmitForm = () => {
  signIn(email.value, password.value, errMsg);
};

// sign in anonymously
const handleContinueAsGuest = async () => {
  await signInAnonymously();
  // Redirect to skattejagt after anonymous login
  router.push('/skattejagt'); 
};
</script>


<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: 100%;
  max-width: 400px;
}

.signin-form {
  align-items: center;
}

.top-section {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  margin-bottom: 35px;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}

.form-container {
  margin-bottom: 15px;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  background-color: var(--soft-gray);
  color: var(--btn-on-click-grey);
}

button {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border-radius: 9px;
  border: 1px solid #ccc;
  background-color: var(--btn-soft-green);
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: var(--btn-on-click-green);
}

p {
  font-size: 20px;
}

.error-message {
  margin-top: 10px;
  color: var(--btn-soft-red);
  font-weight: bold;
}

.links-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.signup-link,
.guest-link {
  font-size: 16px;
  padding: 10px;
}
.signup-link a,
.guest-link a {
  font-weight: bold;
  color: var(--btn-soft-green);
}

hr {
  border: 0.5px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}

.socials-signin button {
  margin-top: 10px;
  margin-bottom: 10px;

}

</style>
