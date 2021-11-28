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
    <div className="mdx__image">
      <div className="mdx__image__wrap">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
      {refLink ? (
        <a href={refLink} className="mdx__image__ref">
          {srcRef}
        </a>
      ) : (
        <div className="mdx__image__ref">{srcRef}</div>
      )}
    </div>
  )
}

export default MdxImage
