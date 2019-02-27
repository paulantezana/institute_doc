import React from "react"
import { graphql } from "gatsby"
import ApiLayout from "../layout/ApiLayout"
import { Button } from "antd";

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <ApiLayout>
            <div>
                <Button>JJJJJJJ</Button>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </ApiLayout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`