<template>
  <div class="wrapper">
    <h2>Log ind</h2>
    <p>For at begynde skattejagten</p>
    <form @submit.prevent="onSubmitForm" class="signin-form">
      <div class="form-group">
        <input
          type="email"
          v-model="email"
          id="email"
          placeholder="Email"
          required
        />
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
        <router-link to="/skattejagt">Fortsæt som gæst</router-link>
      </p>
    </div>
    <hr />
    <div class="socials-signin">
      <p>Log ind med</p>
      <div class="socials-icons">
        <img src="../assets/icons/facebook.svg" alt="Facebook" />
        <img src="../assets/icons/google.svg" alt="Google" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signIn } from "@/services/AuthService";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const onSubmitForm = () => {
  signIn(email.value, password.value, errMsg);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2em;
  justify-content: center;
}

.signin-form {
  width: 300px;
  margin-right: auto;
  align-items: center;
}

h2 {
  align-items: left;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

input[type="email"],
input[type="password"],
button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 5px;
}

button {
  background-color: var(--btn-soft-green);
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: var(--btn-on-click-green);
}

p {
  color: var(--btn-soft-red);
}

.error-message {
  margin-top: 10px;
  color: var(--btn-soft-red);
  font-weight: bold;
}

.links-section {
  display: flex;
  flex-direction: row;
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

/* Responsive styling */
@media screen and (max-width: 767) {
  .wrapper.signup-form {
    width: 90%;
  }
}
</style>
