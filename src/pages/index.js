import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../layout/SiteLayout"
import MainBanner from "../components/MainBanner"

export default ({ data }) => (
    <SiteLayout>
        <MainBanner />
    </SiteLayout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
