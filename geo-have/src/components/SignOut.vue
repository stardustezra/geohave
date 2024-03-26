<template>
    <div>
        <button @click="handleSignOut" v-if="isLoggedIn">Log ud</button>
    </div>
</template>

<script setup>
import { onMounted, ref} from "vue"; // ref that changes auth state changes
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // firebase hook that handles auth state change
import { useRouter } from 'vue-router' //imports router

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
    })
}
)

const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    })
}

</script>