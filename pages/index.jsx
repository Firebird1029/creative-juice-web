import Head from "next/head"
// import Image from "next/image"
import styles from "@/styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Creative Juice</title>
				<meta name="description" content="Creative Juice" />
			</Head>
			<main className={`${styles.main} bg-primary`}>
				<p>hi</p>
			</main>
		</>
	)
}
