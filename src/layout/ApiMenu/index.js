import React from "react"
import { Menu } from "antd"
import { Link } from "gatsby"
const SubMenu = Menu.SubMenu
class Sider extends React.Component {
    render() {
        return (
            <div>
                <Menu mode="inline">
                    <Menu.Item>
                        <Link to="/api/starter">Introducción</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/api/prerequisitos">Prerequisitos</Link>
                    </Menu.Item>
                    <SubMenu title="Instalar">
                        <Menu.Item>
                            <Link to="/api/instalar/cliente">Cliente</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/instalar/servidor">Servidor</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title="Estrutura">
                        <Menu.Item>
                            <Link to="/api/estrutura/cliente">Cliente</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/api/estrutura/servidor">Servidor</Link>
                        </Menu.Item>
                    </SubMenu>

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
