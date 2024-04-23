import { getAuth, signInAnonymously as firebaseSignInAnonymously } from 'firebase/auth';

const signInAnonymously = async () => {
  const auth = getAuth();
  try {
    await firebaseSignInAnonymously(auth);
    // Login successful, you can redirect or perform any other action here
    console.log('Anonym login successful');
  } catch (error) {
    console.error('Error signing in anonymously:', error);
    // Handle error here
  }
};

export default signInAnonymously; 
