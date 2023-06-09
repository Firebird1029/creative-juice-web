import { createContext, useContext, Context } from "react"
import useFirebaseAuth from "./firebaseAuth"

const authUserContext = createContext({
	authUser: null,
	loading: true,
	signIn: async () => {},
	createUser: async () => {},
	signOutUser: async () => {},
})

export function AuthUserProvider({ children }) {
	const auth = useFirebaseAuth()
	return (
		<authUserContext.Provider value={auth}>
			{children}
		</authUserContext.Provider>
	)
}

export const useAuth = () => useContext(authUserContext)
