import React from "react"
import Link from "next/link"

import Layout from "components/layout"
import { getAllPosts } from "lib/blog"
import { Post } from "lib/types"

const Blog = ({ allPosts }) => {
  return (
    <Layout title="Blog">
      <div className="blog">
        <h1>Blog</h1>
        <p>
          I write about the things that I am learning about the web and
          programming. I try to learn new things by doing and also in the
          process try to write it as simple as possible so that anyone even with
          a little understanding of programming can understand it.
        </p>

        <h2>All Posts</h2>
        <ul className="post__list">
          {allPosts.map((post: Post) => {
            return (
              <li className="post__item" key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <a className="post__link">
                    <h4>{post.title}</h4>
                    <p>{post.summary}</p>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "summary", "date"])

  return {
    props: {
      allPosts,
    },
  }
}
