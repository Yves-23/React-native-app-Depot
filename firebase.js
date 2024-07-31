import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvZIfRFOFUdj6twawhzSVx1rC3gsm-uAM",
    authDomain: "depo-app-80b3f.firebaseapp.com",
    projectId: "depo-app-80b3f",
    storageBucket: "depo-app-80b3f.appspot.com",
    messagingSenderId: "820523255052",
    appId: "1:820523255052:web:0a91ea0e0dea4be56a7529"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
