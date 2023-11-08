// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc_tzoAO5PlSGRSSbR1e-JFmBP4FujTh4",
  authDomain: "personal-db-f337f.firebaseapp.com",
  projectId: "personal-db-f337f",
  storageBucket: "personal-db-f337f.appspot.com",
  messagingSenderId: "397955050243",
  appId: "1:397955050243:web:22d5130a5d8d5f4172d736",
  measurementId: "G-DGHF45XCT3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export async function getDummyValue() {
  const testCollection = collection(db, 'test-correlation-id');
  const testSnapshot = await getDocs(testCollection);
  const testValues = testSnapshot.docs.map(doc => doc.data());
  console.log(testValues[0].dummyField)
  return testValues.at(0).dummyField;
}
