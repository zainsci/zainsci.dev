import fs from "fs"
import matter from "gray-matter"
import path from "path"

const snippetsDir = path.join(process.cwd(), "snippets")

export function getAllSnippetsTypes() {
	const snippetsTypes: string[] = fs.readdirSync(snippetsDir)

	return snippetsTypes.map((type) => type.replace(".mdx", ""))
}

export function getSnippetContent(tech: string) {
	const fullPath = path.join(snippetsDir, `${tech}.mdx`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	return { content }
}
