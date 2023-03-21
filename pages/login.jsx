import Head from "next/head"

export default function Login() {
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
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								email
							</label>
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								placeholder=""
								required
							/>
							<br />
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								password
							</label>
							<input
								type="password"
								id="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								required
							/>
							<div className="w-full text-center my-16">
								<button
									type="submit"
									className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-16 py-2 text-center"
								>
									log in
								</button>

								<div className="my-5">
									<p className="text-xs">
										don&apos;t have an account?&nbsp;
										<span className="font-bold text-primary">
											<a href="/register">register</a>
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
