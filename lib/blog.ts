import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import readingTime from "reading-time"

import { Post } from "lib/types"

const postsDir = path.join(process.cwd(), "blog")

export function getLatestPost() {
	const fullPath = path.join(postsDir, `posts.json`)
	const fileContents = fs.readFileSync(fullPath, "utf8")

	if (fileContents.length > 0) {
		const postJson = JSON.parse(fileContents || "[]")
		return postJson[postJson.length - 1]
	}

	return null
}

export function getAllPosts(fields: string[]) {
	const postsSlugs: string[] = fs.readdirSync(postsDir)

	const allPosts = []
	postsSlugs.map((slug) => {
		if (slug.includes("mdx")) allPosts.push(getPostBySlug(slug, fields))
	})

	return allPosts
}

export function getPostBySlug(slug: string, fields: string[]): Post {
	const realSlug = slug.replace(/\.mdx$/, "")
	const fullPath = path.join(postsDir, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	const items = {}

	fields.forEach((field) => {
		switch (field) {
			case "title":
				items[field] = data?.title
				break
			case "summary":
				items[field] = data?.summary
				break
			case "slug":
				items[field] = realSlug
				break
			case "date":
				items[field] = data?.date
				break
			case "content":
				items[field] = content
				break
			case "readingTime":
				items[field] = readingTime(content)
				break
		}
	})

	return items
}

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown)
	return result.toString()
}
