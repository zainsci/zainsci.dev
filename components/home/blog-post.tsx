import { getLatestPost } from "lib/blog"
import Link from "next/link"

export default function HomePageBlogPost() {
	const latestPost = getLatestPost()

	if (!latestPost) return

	return (
		<div>
			<Link href={`/blog/${latestPost.slug}`} className="block">
				<h2 className="text-xl font-bold">{latestPost.title}</h2>
				<p>{latestPost.summary}</p>
			</Link>
		</div>
	)
}
