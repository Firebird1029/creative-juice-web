import Head from "next/head"
import "@/styles/globals.css"
import { AuthUserProvider } from "@/components/authContext"

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AuthUserProvider>
				<Component {...pageProps} />
			</AuthUserProvider>
		</>
	)
}
