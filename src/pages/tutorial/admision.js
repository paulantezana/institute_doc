import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../../layout/SiteLayout"
// import { Button } from "antd";
// import { Link } from "gatsby"

export default ({ data }) => (
    <SiteLayout>
        <div className="MainBanner">
            Admision
        </div>
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
