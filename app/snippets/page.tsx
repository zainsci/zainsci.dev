import React from "react"
import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts } from "lib/blog"
import { Post } from "lib/types"
import { getAllSnippetsTypes } from "lib/snippets"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Blog - zainsci.dev",
}

const Snippets = () => {
	const snippetsTypes = getAllSnippetsTypes()

	return (
		<div className="flex flex-col">
			<h2 className="mb-4">Techs</h2>
			<ul className="flex-1 grid grid-cols-3 gap-4">
				{snippetsTypes.map((snippetType: string) => {
					return (
						<li key={snippetType}>
							<Link
								href={`/snippets/${snippetType}`}
								className="block relative h-full rounded-lg p-[2px] overflow-hiddenbg-clip-border bg-gradient-to-tr from-purple-800 to-red-800 hover:from-purple-600 hover:to-red-800 transition duration-1000"
							>
								<div className="bg-white dark:bg-black p-4 rounded-md">
									<div className="w-8 h-8 flex justify-center items-center">
										<Image
											src={`/assets/images/${snippetType}-logo.png`}
											alt={snippetType}
											width={28}
											height={28}
										/>
									</div>
									<h4 className="mt-4 uppercase">{snippetType}</h4>
								</div>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Snippets
