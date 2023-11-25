import React from "react"
import { bundleMDX } from "mdx-bundler"
import rehypePrism from "rehype-prism-plus"

import { getAllPosts, getPostBySlug } from "lib/blog"
import SnippetContent from "./snippet-content"
import { getSnippetContent } from "lib/snippets"

export default async function BlogPost({
	params,
}: {
	params: { tech: string }
}) {
	const snippet = getSnippetContent(params.tech)

	const { code, frontmatter } = await bundleMDX({
		source: snippet.content,
		mdxOptions(options, frontmatter) {
			options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism]
			return options
		},
	})

	return (
		<div className="post">
			<h1 className="text-5xl font-bold uppercase">{params.tech}</h1>

			<SnippetContent code={code} />
		</div>
	)
}

export async function generateStaticParams() {
	const posts = getAllPosts(["slug"])

	return posts.map((post) => ({
		slug: post.slug,
	}))
}
