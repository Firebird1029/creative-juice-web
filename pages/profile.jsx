import Head from "next/head"
import Image from "next/image"
import Logo from "@/components/Logo"

export default function Profile() {
	return (
		<>
			<Head>
				<title>Creative Juice</title>
				<meta name="description" content="Creative Juice" />
			</Head>
			<main className="p-6 bg-white flex min-h-screen">
				<Logo color="purple" />
				<div className="container m-auto max-w-xl">
					<div className="h-36 w-full bg-primary rounded-lg mb-8" />
					{/* TODO move next div to overlap */}
					<div class="flex justify-between flex-col sm:flex-row">
						<div className="mb-8">
							<div className="w-32 h-32 bg-secondary rounded-full">
								<Image alt="TODO" />
							</div>
							<p className="text-3xl mt-4">peter li</p>
							<p className="text-md">guitarist @ yale</p>
						</div>
						<div className="mb-8 sm:mb-0">
							<div className="flex gap-8 justify-end">
								<div className="bg-secondary py-2 px-2 rounded-md text-center min-w-[6rem] flex flex-col justify-center">
									<div className="text-xs font-medium">3</div>
									<div className="text-xs font-medium">
										projects
									</div>
								</div>
								<div className="bg-secondary py-2 px-2 rounded-md text-center min-w-[6rem] flex flex-col justify-center">
									<div className="text-xs font-medium">2</div>
									<div className="text-xs font-medium">
										connections
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-end">
						<div class="flex flex-col w-full md:w-3/4">
							<div className="profile-card">
								<div className="flex">
									<div className="flex-none w-10">
										<div className="w-4 h-4 bg-secondary rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-2xl">song 1</p>
										<p className="text-md">rock</p>
									</div>
									<div className="flex-none">
										play
										{/* TODO primary color play icon */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
