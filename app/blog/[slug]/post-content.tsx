"use client"

import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"

import MDXComponents from "components/MDX"

export default function PostContent({ code }: { code: string }) {
	const Component = useMemo(() => getMDXComponent(code), [code])

	return (
		<p className="my-6 mdx__content">
			<Component components={MDXComponents} />
		</p>
	)
}
