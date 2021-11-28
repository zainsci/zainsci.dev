import React, { useMemo } from "react"
import { bundleMDX } from "mdx-bundler"
import { getMDXComponent } from "mdx-bundler/client"
import rehypePrism from "rehype-prism-plus"

import Layout from "components/layout"
import { Post } from "lib/types"
import { getAllPosts, getPostBySlug } from "lib/blog"
import MDXComponents from "components/MDX"

const BlogPost: React.FC<Post> = (post: Post) => {
  const Component = useMemo(
    () => getMDXComponent(post.content.code),
    [post.content]
  )

  return (
    <Layout title={post.title}>
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <div className="post__meta">
          <div className="post__meta__date">
            {new Date(post.date).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="post__meta__readtime">{post.readingTime.text}</div>
        </div>
        <p className="post__content mdx">
          <Component components={MDXComponents} />
        </p>
      </div>
    </Layout>
  )
}

export default BlogPost

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "slug",
    "content",
    "date",
    "readingTime",
  ])
  const content = await bundleMDX(post.content, {
    xdmOptions(options) {
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism]
      return options
    },
  })

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
