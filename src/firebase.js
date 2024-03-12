// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, get, push, remove } from "firebase/database";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCLvnXXNhZe402xtIpgi3zjYTC8dM0Ud5g",
  authDomain: "expense-tracker-1fb50.firebaseapp.com",
  databaseURL:
    "https://expense-tracker-1fb50-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expense-tracker-1fb50",
  storageBucket: "expense-tracker-1fb50.appspot.com",
  messagingSenderId: "930465483486",
  appId: "1:930465483486:web:4f589dc90c030facc0d04f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//TRANSACTIONS CALLS
export async function userTransactions(userId) {
  const db = getDatabase();
  const transactionRef = ref(db, "users/" + userId + "/transaction");
  const res = await get(transactionRef);
  return res.val();
}

export async function addTransaction(userId, transaction) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId + "/transaction");
  await push(reference, transaction);
}

export async function deleteTransaction(userId, transaction) {
  const db = getDatabase();
  const reference = ref(
    db,
    "users/" + userId + "/transaction/" + transaction.key
  );
  await remove(reference);
}

//BUDGET CALLS

export async function userBudget(userId, category) {
  const db = getDatabase();
  const budgetRef = ref(db, "users/" + userId + "/budget/" + category);
  const res = await get(budgetRef);
  return res.val();
}

export async function addBudget(userId, budget) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId + "/budget/" + budget.category);
  await set(reference, budget);
}


export function signout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
}

//Cloud Storage
export const storage = getStorage();
