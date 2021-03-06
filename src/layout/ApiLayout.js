import React from "react"
import { enquireScreen } from "enquire-js"

import Header from "./Header"
import ApiMenu from "./ApiMenu"

import { Row, Col } from "antd"

let isMobile

enquireScreen(b => {
    isMobile = b
})

class SiteLayout extends React.PureComponent {
    state = {
        isMobile,
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({
                isMobile: !!b,
            })
        })
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <Header isMobile={this.state.isMobile} />
                <Row style={{ marginTop: "32px" }}>
                    <Col lg={6} xl={5} xxl={4}>
                        <ApiMenu />
                    </Col>
                    <Col lg={18} xl={19} xxl={20}>
                        {children}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SiteLayout
