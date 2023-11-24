import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Nav = () => {
	const [active, setActive] = useState("")
	const NAV_LINKS = [
		{ name: "Home", path: "" },
		{ name: "Blog", path: "blog" },
		{ name: "Snippets", path: "snippets" },
		{ name: "Projects", path: "https://projects.zainsci.dev" },
	]

	const router = useRouter()

	useEffect(() => {
		if (typeof window !== "undefined") {
			setActive(location.pathname.split("/")[1])
			console.log(location.pathname.split("/")[1])
		}
	}, [])

	return (
		<nav className="w-full flex-1">
			<ul className="flex items-center gap-2">
				{NAV_LINKS.map((link) => {
					return (
						<li key={link.name} className="">
							<Link
								href={`/${link.path}`}
								className={
									"px-3 py-1 rounded-lg from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 hover:bg-gradient-to-r " +
									(active === link.path ? "bg-gradient-to-r" : "")
								}
								onClick={() =>
									!link.path.includes("http") && setActive(link.path)
								}
							>
								<span
									className={`${
										active === link.path &&
										"font-bold bg-gradient-to-r from-purple-400 to-red-400 text-transparent bg-clip-text animate-button-text"
									}`}
								>
									{link.name}
								</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
