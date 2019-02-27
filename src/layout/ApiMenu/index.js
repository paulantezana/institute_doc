import React from "react"
import { Menu } from "antd"
import { Link } from "gatsby"
const SubMenu = Menu.SubMenu
class Sider extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="inline">
                    <Menu.Item key="instalar-servidor">
                        Instalar el servidor
                    </Menu.Item>
                    <Menu.Item key="instalar-cliente">
                        Instalar los clientes
                    </Menu.Item>
                    <Menu.Item key="estructura-servidor">
                        Estructura los servidor
                    </Menu.Item>
                    <Menu.Item key="prerequisitos">Prerequisitos</Menu.Item>
                    <Menu.Item key="arquitectura">Arquitectura</Menu.Item>
                    <Menu.Item key="basededatos">Base de datos</Menu.Item>
                    <SubMenu key="admission" title="Admisión">
                        <Menu.Item>
                            <Link to="/api/admision/instituto">Instituto</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/admision/modelos">Modelos</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/admision/controladores">
                                Controladores
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/admision/cliente">Cliente</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/admision/softwares">Softwares</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Sider
