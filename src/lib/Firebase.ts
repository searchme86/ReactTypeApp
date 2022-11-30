// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { FirebaseConfig } from '../../Firebase.config';

const firebaseConfig = FirebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
