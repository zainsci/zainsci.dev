import React, { useContext, useState } from "react"
import Head from "next/head"

interface PropTypes {
	children?: any
	title: string
}

const Layout: React.FC<PropTypes> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title} - zainsci</title>
				<meta charSet="UTF-8" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta
					name="description"
					content="zainsci - Freelance Programmer and a Web Developer"
				/>
				<meta property="og:title" content="zainsci" />
				<meta
					property="og:description"
					content="zainsci - Freelance Programmer and a Web Developer"
				/>
				<meta property="og:image" content="https://zainsci.github.io/me.jpg" />
				<meta property="og:url" content="https://zainsci.github.io" />
				<meta property="og:site_name" content="zainsci" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image:alt" content="zainsci's portrait" />
			</Head>
		</>
	)
}

export default Layout
