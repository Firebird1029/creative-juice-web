import Head from "next/head"
import Link from "next/link"
import Logo from "@/components/Logo"
import { useState } from "react"
import { useAuth } from "@/components/authContext"
import { useRouter } from "next/router"

export default function Register() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [error, setError] = useState(null)
	const { createUser } = useAuth()
	const router = useRouter()

	const onSubmit = (event) => {
		setError(null)
		/* if (password === passwordConfirm)
			createUser(email, password)
				.then(() => {
					console.log("Success. The user is created in firebase")
					router.push("/profile")
				})
				.catch((error) => {
					setError(error.message)
					console.log(error)
				})
		else setError("Password do not match") */
		alert("Registration is currently paused.")
		event.preventDefault()
	}
	return (
		<>
			<Head>
				<title>Creative Juice</title>
				<meta name="description" content="Creative Juice" />
			</Head>
			<main className="p-6 bg-primary flex min-h-screen">
				<Logo color="white" />
				<div className="container m-auto max-w-xl">
					<div className="card min-w-full">
						<p className="text-3xl">Register</p>
						<br />
						<form className="form" onSubmit={onSubmit}>
							{/* <label
								htmlFor="name"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								<span className="mb-1 inline-block">name</span>

								<input
									type="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder=""
									required
								/>
							</label> */}
							<br />
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								<span className="mb-1 inline-block">Email</span>

								<input
									type="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</label>

							<br />

							<label
								htmlFor="password"
								className="block mb-4 text-sm font-medium text-gray-900"
							>
								<span className="mb-1 inline-block">
									Password
								</span>

								<input
									type="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
								/>
							</label>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								<span className="mb-1 inline-block">
									Confirm Password
								</span>

								<input
									type="password"
									id="confirm-password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Confirm Password"
									value={passwordConfirm}
									onChange={(e) =>
										setPasswordConfirm(e.target.value)
									}
									required
								/>
							</label>
							{/* <br /> */}
							<div className="w-full text-center my-16">
								<button
									type="submit"
									className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-16 py-2 text-center"
								>
									Register
								</button>

								<div className="mt-8">
									<p className="text-xs">
										Have an account?&nbsp;
										<span className="font-bold text-primary">
											<Link href="/login">Login</Link>
										</span>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}
