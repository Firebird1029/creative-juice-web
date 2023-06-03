import Image from "next/image"
import Link from "next/link"

export default function Logo({ color = "white" }) {
	return (
		<div className="relative">
			<div className="absolute w-16 h-16 top-4 left-4">
				<Link href="/">
					<Image
						src={`/logo-${color}.png`}
						alt="logo"
						fill
						style={{ objectFit: "contain" }}
					/>
				</Link>
			</div>
		</div>
	)
}
