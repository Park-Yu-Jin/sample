import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIFb-BsbR-KVNWmzlqsZkV7X2pX2vqBdk",
  authDomain: "myapp-48d0e.firebaseapp.com",
  projectId: "myapp-48d0e",
  storageBucket: "myapp-48d0e.firebasestorage.app",
  messagingSenderId: "625404705763",
  appId: "1:625404705763:web:26f5e6ae4fc0f60ab77ed6",
  measurementId: "G-7X35ZGZ4M1"
};

const app = initializeApp(firebaseConfig);

// Auth (RN 필수 설정)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

// Auth 관련
export const firebaseAuth = {
  signUp: (email, pw) => createUserWithEmailAndPassword(auth, email, pw),
  login: (email, pw) => signInWithEmailAndPassword(auth, email, pw),
  logout: () => signOut(auth),
  onChange: (callback) => onAuthStateChanged(auth, callback),
};

// Firestore 관련
export const fireStoreDB = {
  // 사용자 추가
  addUserData: (uid, data) =>
    addDoc(collection(db, "users"), { uid, ...data }),

  // 전체 사용자 조회
  getAllUsers: () =>
    getDocs(collection(db, "posts")),

  // ✅ 사용자 정보 수정 (핵심)
  updateUserData: (docId, data) =>
    updateDoc(doc(db, "users", docId), data),
};
