import { useEffect } from "react"

import ZainSciLogo from "./icons/zaisci-logo"

const Footer = () => {
	useEffect(() => {
		const eLinks = Array.from(document.querySelectorAll("a"))

		if (eLinks.length > 0) {
			eLinks.forEach((a) => {
				if (a.host !== window.location.host) {
					a.target = "_blank"
					a.rel = "noopener noreferrer"
				}
			})
		}
	}, [])

	return (
		<footer className="w-screen flex p-4">
			<div className="w-full max-w-4xl mx-auto flex px-4">
				<h1 className="text-black dark:text-white ">
					<ZainSciLogo />
				</h1>
			</div>
		</footer>
	)
}

export default Footer
