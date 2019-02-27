import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../layout/SiteLayout"
import { Button } from "antd";
import QueueAnim from 'rc-queue-anim';
import BannerImage from '../components/BannerImage';
import { Link } from "gatsby"

export default ({ data }) => (
    <SiteLayout>
        <div className="ApiBanner Container">
            <QueueAnim>
                <h1 key="h2"> Documentacion Codigo Fuente</h1>
                <p key="p">Documentación de código fuente del sistema cualquier cambio que realice en el sistema debe documentar en la API</p>
                <span key="button">
                    <Link to="/documentacion/starter">
                        <Button type="primary">
                            Documentacion
                        </Button>
                    </Link>
                </span>
            </QueueAnim>
            <BannerImage/>
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
