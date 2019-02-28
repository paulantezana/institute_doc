import React from "react"
import { graphql, Link } from "gatsby"
import SiteLayout from "../layout/SiteLayout"
import MainBanner from "../components/MainBanner"
import { Button, Divider, List, Card, Icon } from "antd"

import {
    IconAdmission,
    IconReview,
    IconCertificate,
    IconMonitoring,
    IconWebSite,
    IconLibrarie,
} from "../components/icons"

const dataSistem = [
    {
        title: "Sistema de admision",
        img: IconAdmission,
        code: "https://gitlab.com/sedna-sn/institutional-client",
        view: "http://institucional.paulantezana.com",
        doc: "/documentacion/admision/modelos",
    },
    {
        title: "Sistema de revisión",
        img: IconReview,
        code: "https://gitlab.com/sedna-sn/review-client",
        view: "http://review.paulantezana.com",
        doc: "/documentacion/revision/modelos",
    },
    {
        title: "Sistema de certificación",
        img: IconCertificate,
        code: "https://gitlab.com/sedna-sn/certification-client",
        view: "http://certificacion.paulantezana.com",
        doc: "/documentacion/certificacion/modelos",
    },
    {
        title: "Sistema de egresados",
        img: IconMonitoring,
        code: "https://gitlab.com/sedna-sn/monitoring-client",
        view: "http://monitoring.paulantezana.com",
        doc: "/documentacion/egresados/modelos",
    },
    {
        title: "Sistema de Biblioteca",
        img: IconLibrarie,
        code: "https://gitlab.com/sedna-sn/book-client",
        view: "http://librarie.paulantezana.com/",
        doc: "/documentacion/biblioteca/modelos",
    },
    {
        title: "Modulo estudiante",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/student-client",
        view: "http://website.paulantezana.com",
        doc: "/documentacion/alumno/modelos",
    },
    {
        title: "Sitios Web",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/website",
        view: "https://enfermeriatecnicaiestpvilcanota.paulantezana.com",
        doc: "/documentacion/sitioweb/modelos",
    },
    {
        title: "Chat",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/chat-client",
        view: "https://enfermeriatecnicaiestpvilcanota.paulantezana.com",
        doc: "/documentacion/mensajeria/modelos",
    },
]

export default ({ data }) => (
    <SiteLayout>
        <MainBanner />
        <div className="Container Sistems">
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                }}
                dataSource={dataSistem}
                renderItem={item => (
                    <List.Item>
                        <Card>
                            <div className="SCards">
                                <div className="Center">
                                    <Icon
                                        component={item.img}
                                        style={{
                                            fontSize: "50px",
                                            marginBottom: "8px",
                                        }}
                                    />
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="Center">
                                    <div style={{marginTop: '8px'}}>
                                        <Link to={item.doc}>
                                            <Button
                                                shape="circle"
                                                icon="book"
                                            />
                                        </Link>
                                        <Divider type="vertical" />
                                        <a target="_blanck" href={item.view}>
                                            <Button
                                                shape="circle"
                                                icon="global"
                                            />
                                        </a>
                                        <Divider type="vertical" />
                                        <a target="_blanck" href={item.code}>
                                            <Button
                                                shape="circle"
                                                icon="github"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
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
