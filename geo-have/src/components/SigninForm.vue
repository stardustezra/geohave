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
    <p v-if="errMsg">{{ errMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signIn } from "@/services/AuthService";

const email = ref("");
const password = ref("");
const onSubmitForm = () => {
  signIn(email.value, password.value);
};

// Old code

// import { useRouter } from "vue-router"; //imports router

// const errMsg = ref();
// const router = useRouter();

// const register = () => {
//   signInWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then((data) => {
//       console.log("Succesfully logged in!");
//       router.push("/"); // router.push redirects to / after sign in
//     })
//     .catch((error) => {
//       console.log(error.code);
//       switch (error.code) {
//         case "auth/invalid-email":
//           errMsg.value = "Forkert email";
//           break;
//         case "auth/wrong-password":
//           errMsg.value = "Forkert adgangskode";
//           break;
//         default:
//           errMsg.value = "Forkert adgangskode eller email";
//           break;
//       }
//       alert(error.message);
//     });
// };
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.signin-form {
  width: 300px;
  margin-right: auto;
  align-items: center;
}

h2 {
  align-items: left;
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
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 5px;
}

button {
  background-color: var(--btn-soft-green);
  color: aliceblue;
}

button:hover {
  background-color: var(--primary-green);
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
