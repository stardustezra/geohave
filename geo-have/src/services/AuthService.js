import "@/configs/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

// state change to display logout instead of login
export const stateChange = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const signIn = async (email, password, errMsg) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    console.log("Succesful sign in!");
    router.push("/"); // redirects to home after succesful sign in
    console.log(userData);
    return {
      uid: userData.user.uid,
    };
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

export const signUp = async (email, password) => {
  const auth = getAuth();
  const router = useRouter();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Succesful signup!");
    router.push("/");
  } catch (error) {
    console.log(error.code);
    alert(error.message);
  }
};
