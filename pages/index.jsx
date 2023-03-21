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
						<p className="text-3xl">home</p>
					</div>
				</div>
			</main>
		</>
	)
}
