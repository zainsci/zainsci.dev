import { useRouter } from "next/router"

interface ISnippetPage {
	params: {
		tech: string
	}
}

export default function Snippet({ params }: ISnippetPage) {
	return <div></div>
}
