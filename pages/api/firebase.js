// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: "creative-juice.appspot.com",
	messagingSenderId: "361477517185",
	appId: "1:361477517185:web:b1bfe0651fce74c9708280",
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const firebaseApp = () => {
// 	try {
// 		return getApp()
// 	} catch (error) {
// 		console.error(error)
// 		return initializeApp(firebaseConfig)
// 	}
// }

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp

// const firebaseApp = createFirebaseApp({/* your config */})
