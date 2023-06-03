import Logo from "@/components/Logo"
import Head from "next/head"
import Link from "next/link"
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
				<Logo color="white" />
				<div className="container m-auto max-w-xl">
					<div className="card min-w-full">
						<p className="text-3xl">creative juice</p>
						<p className="mt-6">
							this project is currently in development. learn more
							at{" "}
							<a
								href="https://www.creativejuice.io/"
								className="font-bold text-primary"
							>
								creativejuice.io
							</a>
							.
						</p>
						<p className="mt-6">
							already have an account? login{" "}
							<Link
								href="/login"
								className="font-bold text-primary"
							>
								here
							</Link>
							.
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
