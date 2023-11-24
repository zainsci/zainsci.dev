import React from "react"
import type { Metadata } from "next"
import Link from "next/link"

import { getAllPosts } from "lib/blog"
import { Post } from "lib/types"

export const metadata: Metadata = {
	title: "Blog - zainsci.dev",
}

const Blog = () => {
	const allPosts = getAllPosts(["title", "slug", "summary", "date"])
	return (
		<div className="flex flex-col">
			<p className="mb-4">
				Sometimes I just sit down and write stuff whcih I had learened recently.
				Hope you find it a little bit useful 🙂
			</p>

			<h2 className="text-xl mb-4">All Posts</h2>
			<ul className="flex-1 grid grid-cols-2 gap-4">
				{allPosts.map((post: Post) => {
					return (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="block h-full rounded-lg overflow-hidden bg-gradient"
							>
								<img
									src={`/assets/images/${post.slug}/cover.jpg`}
									alt={post.slug}
								/>
								<div className="p-4">
									<div className="text-xs mb-2">
										{new Date(post.date).toLocaleString("en-US", {
											day: "2-digit",
											weekday: "short",
											month: "short",
											year: "numeric",
										})}
									</div>
									<h4 className="leading-6 text-lg font-bold mb-1 flex-1">
										{post.title}
									</h4>
									<p className="leading-4 text-sm">
										{post.summary.slice(0, 60)}
									</p>
								</div>
							</Link>
						</li>
					)
				})}
				{allPosts.map((post: Post) => {
					return (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="block h-full rounded-lg overflow-hidden bg-gradient"
							>
								<img
									src={`/assets/images/${post.slug}/cover.jpg`}
									alt={post.slug}
								/>
								<div className="p-4">
									<div className="text-xs mb-2">
										{new Date(post.date).toLocaleString("en-US", {
											day: "2-digit",
											weekday: "short",
											month: "short",
											year: "numeric",
										})}
									</div>
									<h4 className="leading-6 text-lg font-bold mb-1 flex-1">
										{post.title}
									</h4>
									<p className="leading-4 text-sm">
										{post.summary.slice(0, 60)}
									</p>
								</div>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Blog
