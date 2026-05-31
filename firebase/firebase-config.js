import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrnxQZoX5RcZF3AWByMV346FkC-MamC-E",
  authDomain: "biomap-2.firebaseapp.com",
  projectId: "biomap-2",
  storageBucket: "biomap-2.firebasestorage.app",
  messagingSenderId: "223278466964",
  appId: "1:223278466964:web:95daa7b3fd22a9497ab181"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);