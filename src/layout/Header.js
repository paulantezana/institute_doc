import React from "react"
import { Row, Col, Icon, Menu, Button, Popover } from "antd"
import { Link } from "gatsby"

import { enquireScreen } from "enquire-js"

const LOGO_URL =
    "https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg"

class Header extends React.Component {
    state = {
        menuVisible: false,
        menuMode: "horizontal",
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({ menuMode: b ? "inline" : "horizontal" })
        })
    }

    render() {
        const { menuMode, menuVisible } = this.state

        const menu = (
            <Menu mode={menuMode} id="nav" key="nav">
                <Menu.Item key="home">
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="tutorial">
                    <Link to="/">Tutorial</Link>
                </Menu.Item>
                <Menu.Item key="api">
                    <Link to="/">API</Link>
                </Menu.Item>
                {menuMode === "inline" && (
                    <Menu.Item key="preview">
                        {/* <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                预览
              </a> */}
                    </Menu.Item>
                )}
            </Menu>
        )

        return (
            <div id="header" className="header">
                {menuMode === "inline" ? (
                    <Popover
                        overlayClassName="popover-menu"
                        placement="bottomRight"
                        content={menu}
                        trigger="click"
                        visible={menuVisible}
                        arrowPointAtCenter
                        onVisibleChange={this.onMenuVisibleChange}
                    >
                        <Icon
                            className="nav-phone-icon"
                            type="menu"
                            onClick={this.handleShowMenu}
                        />
                    </Popover>
                ) : null}
                <Row>
                    <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                        <div id="logo" to="/">
                            <img src={LOGO_URL} alt="logo" />
                            <span>Institucional</span>
                        </div>
                    </Col>
                    <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                        <div className="header-meta">
                            <div id="preview">
                                <Link to="http://preview.pro.ant.design">
                                    <Button icon="eye-o">Ingresar</Button>
                                </Link>
                                {/* <a
                  id="preview-button"
                  target="_blank"
                  href="http://preview.pro.ant.design"
                  rel="noopener noreferrer"
                >
                </a> */}
                            </div>
                            {menuMode === "horizontal" ? (
                                <div id="menu">{menu}</div>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
