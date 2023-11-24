import React from "react"
import Image from "next/image"

interface Props {
	src: string
	alt: string
	srcRef?: string
	refLink?: string
}

const MdxImage: React.FC<Props> = ({ src, alt, srcRef = "", refLink = "" }) => {
	return (
		<div>
			<div className="rounded-md overflow-hidden">
				<Image
					src={src}
					alt={alt}
					width={1920}
					height={1080}
					layout="responsive"
				/>
			</div>
			{refLink ? (
				<a
					href={refLink}
					className="p-1 block w-full text-right text-sm ml-auto"
				>
					{srcRef}
				</a>
			) : (
				<div className="p-1 block w-full text-right text-sm ml-auto">
					{srcRef}
				</div>
			)}
		</div>
	)
}

export default MdxImage
