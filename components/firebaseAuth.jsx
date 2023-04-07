import { useState, useEffect } from "react"
import firebaseApp from "@/pages/api/firebase"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth"

const formatAuthUser = (user) => ({
	uid: user.uid,
	email: user.email,
})

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const auth = getAuth(firebaseApp)

	const authStateChanged = async (authState) => {
		if (!authState) {
			setLoading(false)
			return
		}

		setLoading(true)

		var formattedUser = formatAuthUser(authState)

		setAuthUser(formattedUser)

		setLoading(false)
	}

	const clear = () => {
		setAuthUser(null)
		setLoading(true)
	}

	const signIn = (email, password) =>
		signInWithEmailAndPassword(auth, email, password)

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential.user)
			})
			.catch((error) => {
				console.log(error.message)
			})

	const signOutUser = () => signOut(auth)
	// const signOut = () => {} //TODO: Implement signOut

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, authStateChanged)
		return () => unsubscribe()
	}, [])

	return {
		authUser,
		loading,
		signIn,
		createUser,
		signOutUser,
	}
}
