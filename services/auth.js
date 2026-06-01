import { auth, db } from "../firebase/firebase-config.js";

import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();


export async function loginWithGoogle() {

    const result =
        await signInWithPopup(auth, provider);

    const user = result.user;

    await setDoc(
        doc(db, "users", user.uid),
        {
            nome: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            provider: "google"
        },
        { merge: true }
    );

    return user;
}


export async function logoutUser() {

    await signOut(auth);

}


export function observeAuth(callback) {

    onAuthStateChanged(auth, callback);

}

export function getCurrentUser() {
    return auth.currentUser;
}