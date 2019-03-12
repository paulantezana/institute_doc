import React from "react"
import { graphql, Link } from "gatsby"
import SiteLayout from "../layout/SiteLayout"
import MainBanner from "../components/MainBanner"
import { Button, Divider, List, Card, Icon, Tooltip } from "antd"

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
        view: "https://admision.iestpvilcanota.com",
        doc: "/documentacion/admision/modelos",
    },
    {
        title: "Sistema de revisión",
        img: IconReview,
        code: "https://gitlab.com/sedna-sn/review-client",
        view: "https://revision.iestpvilcanota.com",
        doc: "/documentacion/revision/modelos",
    },
    {
        title: "Sistema de certificación",
        img: IconCertificate,
        code: "https://gitlab.com/sedna-sn/certification-client",
        view: "https://certificacion.iestpvilcanota.com",
        doc: "/documentacion/certificacion/modelos",
    },
    {
        title: "Sistema de egresados",
        img: IconMonitoring,
        code: "https://gitlab.com/sedna-sn/monitoring-client",
        view: "https://egresados.iestpvilcanota.com",
        doc: "/documentacion/egresados/modelos",
    },
    {
        title: "Sistema de Biblioteca",
        img: IconLibrarie,
        code: "https://gitlab.com/sedna-sn/book-client",
        view: "https://biblioteca.iestpvilcanota.com/",
        doc: "/documentacion/biblioteca/modelos",
    },
    {
        title: "Modulo estudiante",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/student-client",
        view: "https://alumno.iestpvilcanota.com",
        doc: "/documentacion/alumno/modelos",
    },
    {
        title: "Sitios Web",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/website",
        view: "https://enfermeriatecnicaiestpvilcanota.paulantezana.com",
        doc: "/documentacion/sitioweb/tema",
    },
    {
        title: "Chat",
        img: IconWebSite,
        code: "https://gitlab.com/sedna-sn/chat-client",
        view: "https://chat.iestpvilcanota.com",
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
                                            <Tooltip title="Documentación">
                                                <Button
                                                    shape="circle"
                                                    icon="book"
                                                />
                                            </Tooltip>
                                        </Link>
                                        <Divider type="vertical" />
                                        <a target="_blanck" href={item.view}>
                                            <Tooltip title="Ir al sistema">
                                                <Button
                                                    shape="circle"
                                                    icon="global"
                                                />
                                            </Tooltip>
                                        </a>
                                        <Divider type="vertical" />
                                        <a target="_blanck" href={item.code}>
                                            <Tooltip title="Codigo fuente">
                                                <Button
                                                    shape="circle"
                                                    icon="github"
                                                />
                                            </Tooltip>
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
