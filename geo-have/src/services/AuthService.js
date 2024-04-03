import "@/configs/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

export const onSignOut = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};

// state change to display log out instead of login
export const stateChange = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const signIn = async (email, password, errMsg) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    console.log("Succesful sign in!");
    router.push("/"); // redirects to home after succesful sign in
    return {
      uid: userData.user.uid,
    };
    console.log(userData);
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth-invalid-email":
        errMsg.value = "Forkert email.";
        break;
      case "auth/wrong-password":
        errMsg.value = "Forkert adgangskode.";
        break;
      default:
        errMsg.value = "Forkert adgangskode eller email";
        break;
    }
    alert(error.message);
    return null;
  }
};
