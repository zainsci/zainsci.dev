import { Metadata } from "next"
import { Poppins, Righteous } from "next/font/google"

import "styles/global.css"
import "styles/mdx.css"
import "styles/syntax.css"

import Providers from "app/providers"

const poppins = Poppins({
	weight: ["400", "500"],
	display: "swap",
	variable: "--font-poppins",
	subsets: ["devanagari"],
})
const righteous = Righteous({
	weight: "400",
	display: "swap",
	variable: "--font-righteous",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Home - zainsc.dev",
	description:
		"zainsci - Passionately Curious about Computer Science and thinks Too Much!",
	creator: "Zain Shabbir",
	keywords: "programmer, coder, freelancer",

	manifest: "/manifest.json",
	icons: {
		icon: "/favicon.ico",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},

	// OG:MetaData
	openGraph: {
		title: "Zain Shabbir - zainsci.dev",
		url: "https://www.zainsci.dev/",
		siteName: "zainsci.dev",
		description:
			"Passionately Curious about Computer Science and thinks Too Much!",
		images: {
			url: "https://www.zainsci.dev/assets/images/Me512.png",
			alt: "Zain Shabbir - zainsci.dev",
		},
	},

	// Twitter:MetaData
	twitter: {
		title: "Zain Shabbir - zainsci.dev",
		creator: "Zain Shabbir",
		site: "https://www.zainsci.dev/",
		card: "summary_large_image",
		description:
			"Passionately Curious about Computer Science and thinks Too Much!",
		images: {
			url: "https://www.zainsci.dev/assets/images/Me512.png",
			alt: "Zain Shabbir - zainsci.dev",
		},
	},
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${poppins.className}`}>
			<body className="min-h-screen bg-white dark:bg-black flex flex-col transition-all duration-500">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
