import React from "react"
import { bundleMDX } from "mdx-bundler"
import rehypePrism from "rehype-prism-plus"

import { getAllPosts, getPostBySlug } from "lib/blog"
import PostContent from "./post-content"

export default async function BlogPost({
	params,
}: {
	params: { slug: string }
}) {
	const post = getPostBySlug(params.slug, [
		"title",
		"slug",
		"content",
		"date",
		"readingTime",
	])

	const { code, frontmatter } = await bundleMDX({
		source: post.content,
		mdxOptions(options, frontmatter) {
			options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism]
			return options
		},
	})

	return (
		<div className="post">
			<h1 className="text-5xl font-bold">{post.title}</h1>
			<div className="flex gap-2 justify-start items-center text-sm my-2">
				<div className="post__meta__date">
					{new Date(post.date).toLocaleDateString("en-us", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</div>
				𐄁
				<div>{post.readingTime.text}</div>
			</div>
			<PostContent code={code} />
		</div>
	)
}

export async function generateStaticParams() {
	const posts = getAllPosts(["slug"])

	return posts.map((post) => ({
		slug: post.slug,
	}))
}
