
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY-W5__H5PJqK74_up56AQmBjWHbuqYTw",
  authDomain: "anas-portfolio-feff6.firebaseapp.com",
  projectId: "anas-portfolio-feff6",
  storageBucket: "anas-portfolio-feff6.appspot.com",
  messagingSenderId: "717540523790",
  appId: "1:717540523790:web:cd642b34d3be6ab13fe15f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 