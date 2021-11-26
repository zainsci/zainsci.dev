import { Message } from "esbuild"
import { GrayMatterFile } from "gray-matter"

export interface ProjectProps {
  name: string
  description: string
  github: string
  tags: []
}

export interface Post {
  title?: string
  content?: BundledMdx & string
  date?: Date | string
  slug?: string
  summary?: string
  readingTime?: {
    text?: string
    [key: string]: any
  }
}

export interface BundledMdx {
  code: string
  frontmatter: {
    [key: string]: any
  }
  errors: Message[]
  matter: GrayMatterFile<any>
}
