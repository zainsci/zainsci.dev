"use client"

import React, { useState, useContext } from "react"
import { ThemeProvider, useTheme } from "next-themes"

import { RootContext, ContextProvider } from "context"
import Loader from "components/loader"
import Header from "components/header"
import Footer from "components/footer"

export default function Providers({ children }) {
	const { context } = useContext(RootContext)
	const [loading, setLoading] = useState(true)

	return (
		<ThemeProvider defaultTheme="dark" attribute="class">
			<ContextProvider>
				{context.firstLoad && !loading ? (
					<Loader setLoading={setLoading} />
				) : (
					<>
						<Header />

						<main className="w-full max-w-4xl mx-auto p-4 flex-1">
							{children}
						</main>

						<Footer />
					</>
				)}
			</ContextProvider>
		</ThemeProvider>
	)
}
