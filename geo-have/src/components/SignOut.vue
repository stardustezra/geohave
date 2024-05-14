<template>
  <div>
    <button @click="handleSignOut" v-if="isLoggedIn">Log ud</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"; // ref that changes auth state changes
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // firebase hook that handles auth state change
import { useRouter } from "vue-router"; //imports router

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    // router.push("/");
    console.log("Succesfully logged out!");
  });
};

// facebook login
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1782933042216579',
      xfbml      : true,
      version    : 'v19.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
