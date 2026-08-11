import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl4FySUiDvrj0PKXcec8F2PJ_f_-D6Gtw",
  authDomain: "devarena-c977c.firebaseapp.com",
  projectId: "devarena-c977c",
  storageBucket: "devarena-c977c.firebasestorage.app",
  messagingSenderId: "1083184902051",
  appId: "1:1083184902051:web:8a8eb5f740461e2206f416",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);