import Link from "next/link"

import GithubIcon from "components/icons/github"
import InstagramIcon from "components/icons/instagram"
import LinkedinIcon from "components/icons/linkedin"
import TwitterIcon from "components/icons/twitter"
import HomePageBlogPost from "components/home/blog-post"

export default function HomePage() {
	return (
		<div className="grid grid-cols-4 gap-4">
			<div className="col-span-3 overflow-hidden grid-box">
				<h1 className="text-5xl font-bold">Zain Shabbir</h1>
				<h2 className="mb-4">Software Engineer</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
					suscipit est, laudantium, delectus beatae illo molestiae vel vero
					asperiores architecto necessitatibus, sapiente fugit nostrum aut natus
					expedita praesentium enim reprehenderit!
				</p>
			</div>

			<div className="col-span-1 flex flex-col gap-4">
				<img
					className="grayscale col-span-1 rounded-lg overflow-hidden transition-all duration-500 hover:grayscale-0"
					src="/assets/images/Me512.png"
					alt="Zain Shabbir"
				/>
				<ul className="flex justify-between">
					<li>
						<Link
							href="https://www.twitter.com/zainsci"
							target="_blank"
							className="block p-3 bg-zinc-900 bg-grid-item rounded-lg"
						>
							<TwitterIcon />
						</Link>
					</li>
					<li>
						<Link
							href="https://www.github.com/zainsci"
							target="_blank"
							className="block p-3 bg-zinc-900 bg-grid-item rounded-lg"
						>
							<GithubIcon />
						</Link>
					</li>
					<li>
						<Link
							href="https://www.instagram.com/zainsci"
							target="_blank"
							className="block p-3 bg-zinc-900 bg-grid-item rounded-lg"
						>
							<InstagramIcon />
						</Link>
					</li>
					<li>
						<Link
							href="https://www.linkedin.com/in/zainsci"
							target="_blank"
							className="block p-3 bg-zinc-900 bg-grid-item rounded-lg"
						>
							<LinkedinIcon />
						</Link>
					</li>
				</ul>
			</div>
			<div className="col-span-4 grid-box overflow-hidden">
				<h1 className="text-2xl font-bold mb-4">Latest Blog Post</h1>
				<HomePageBlogPost />
			</div>
		</div>
	)
}
