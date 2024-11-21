import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
apiKey: "AIzaSyBVUBl8l_rZjQ7eLnmP2ymiBvHgzdFUFoI",
authDomain: "event-planner-b5fa5.firebaseapp.com",
projectId: "event-planner-b5fa5",
storageBucket: "event-planner-b5fa5.appspot.com",
messagingSenderId: "330771548098",
appId: "1:330771548098:web:e2780accb4926959b9785b"
});

export const auth = getAuth(app);
export default app;

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSCWgmWynlqlfexq6bbFQXFkzUuCYlmd8",
  authDomain: "online-event-planning-platform.firebaseapp.com",
  projectId: "online-event-planning-platform",
  storageBucket: "online-event-planning-platform.appspot.com",
  messagingSenderId: "352493413276",
  appId: "1:352493413276:web:9ccff427878f5e28095e59",
  measurementId: "G-JF8LQX8PG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */