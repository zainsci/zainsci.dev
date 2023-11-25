"use client"

import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"

import MDXComponents from "components/MDX"

export default function SnippetContent({ code }: { code: string }) {
	const Component = useMemo(() => getMDXComponent(code), [code])

	return (
		<div className="my-6 mdx__content">
			<Component components={MDXComponents} />
		</div>
	)
}
