import Head from "next/head"
// import Image from "next/image"
// import styles from "@/styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Creative Juice</title>
				<meta name="description" content="Creative Juice" />
			</Head>
			<main className="p-6 bg-primary flex min-h-screen">
				<div className="container m-auto max-w-xl">
					<div className="card min-w-full">
						<p className="text-3xl">log in</p>
						<br />
						<form>
							<label htmlFor="email">
								<p className="text-sm text-green-800">email</p>
								{/* TODO: text-green-800 (and all Tailwind colors) don't work */}
							</label>

							{/* TODO: input doesn't show up! */}
							<input
								type="email"
								name="email"
								id="email"
								className="rounded sm"
							/>
							<br />
							<br />
							<label htmlFor="password">
								<p className="text-sm text-green-800">
									password
								</p>
								{/* <input
									type="password"
									name="password"
									id="password"
								/> */}
							</label>

							<button
								className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
								type="submit"
							>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}
