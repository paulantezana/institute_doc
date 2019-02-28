import React from "react"
import { graphql } from "gatsby"
import ApiLayout from "../layout/ApiLayout"
import SEO from "../components/seo"

export default props => {
    const post = props.data.markdownRemark
    const siteTitle = props.data.site.siteMetadata.title

    return (
        <ApiLayout location={props.location} title={siteTitle}>
            <SEO title={post.frontmatter.title} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </ApiLayout>
    )
}

export const query = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
