<template>
  <div class="wrapper">
    <h2>Registrer</h2>
    <p>Registrer for at begynde skattejagten</p>
    <form @submit.prevent="onSubmitForm" class="signup-form">
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
      <button type="submit">Registrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signUp } from "@/services/AuthService";

const email = ref("");
const password = ref("");
const onSubmitForm = () => {
  signUp(email.value, password.value);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

h2 {
  align-items: left;
  font-weight: bold;
}

.signup-form {
  width: 300px;
  margin-right: auto;
  align-items: center;
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

/* Responsive styling */
@media screen and (max-width: 767) {
  .wrapper.signup-form {
    width: 90%;
  }
}
</style>
