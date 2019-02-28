import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../../layout/SiteLayout"
import { Row, Col, Menu, Card } from "antd"
// import { Button } from "antd";
// import { Link } from "gatsby";

export default ({ data }) => (
    <SiteLayout>
        <Row>
            <Col lg={6} xl={5} xxl={4}>
                <Menu>
                    <Menu.Item>Admision</Menu.Item>
                    <Menu.Item>Review</Menu.Item>
                    <Menu.Item>Certification</Menu.Item>
                    <Menu.Item>Estudent</Menu.Item>
                    <Menu.Item>Esta</Menu.Item>
                </Menu>
            </Col>
            <Col lg={18} xl={19} xxl={20}>
                <Card bordered={false}>
                    <div>Tutoriales</div>
                </Card>
            </Col>
        </Row>
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
