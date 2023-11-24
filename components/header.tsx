import { useContext } from "react"

import { RootContext } from "context"
import Nav from "components/nav"
import Toggler from "components/toggler"

const Header = () => {
	const { context, setContext } = useContext(RootContext)

	return (
		<div className="w-screen flex px-4 justify-center items-center">
			<header
				className="w-full max-w-4xl mx-auto px-4 flex justify-between py-6"
				id="header"
			>
				<Nav />
				<Toggler />
			</header>
		</div>
	)
}

export default Header
