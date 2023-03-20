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
						<form className="form">
							<label htmlFor="email">
								<p className="text-sm text-green-800">email</p>
								{/* TODO: text-green-800 (and all Tailwind colors) don't work */}
							</label>

							{/* TODO: input doesn't show up! */}
							<input
								type="email"
								name="email"
								id="email"
								className="form-control"
								placeholder="Search"
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

						<form>
							<div class="mb-6">
								<label
									htmlFor="email"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
								</label>
								<input
									type="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="name@flowbite.com"
									required
								/>
							</div>
							<div class="mb-6">
								<label
									htmlFor="password"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Your password
								</label>
								<input
									type="password"
									id="password"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									required
								/>
							</div>
							<div class="flex items-start mb-6">
								<div class="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
										required
									/>
								</div>
								<label
									htmlFor="remember"
									class="ml-2 text-sm font-medium text-gray-900"
								>
									Remember me
								</label>
							</div>
							<button
								type="submit"
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}
