import React from "react"
import { Menu, Icon, Affix } from "antd"
import { Link } from "gatsby"
// import { IconAdmission } from '../../components/icons'

const SubMenu = Menu.SubMenu

class Sider extends React.Component {
    render() {
        
        return (
            <div>
                <Affix offsetTop={0}>
                    <Menu mode="inline">
                        <Menu.Item key="starter">
                            <Icon type="bulb" />
                            <span><Link to="/documentacion/starter">Introducción</Link></span>
                        </Menu.Item>
                        <Menu.Item key="prerequisitos">
                            <Icon type="sync" />
                            <span><Link to="/documentacion/prerequisitos">Prerequisitos</Link></span>
                        </Menu.Item>
                        <SubMenu key="instalar" title={<span>
                            <Icon type="code" />
                            <span>Instalar</span>
                        </span>}>
                            <Menu.Item>
                                <Link to="/documentacion/instalar/cliente">Cliente</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/instalar/servidor">Servidor</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="estrutura" title={<span>
                            <Icon type="folder" />
                            <span>Estrutura</span>
                        </span>}>
                            <Menu.Item>
                                <Link to="/documentacion/estrutura/cliente">Cliente</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/estrutura/servidor">Servidor</Link>
                            </Menu.Item>
                        </SubMenu>
                        {/* <Menu.Item key="arquitectura">Arquitectura</Menu.Item>
                        <Menu.Item key="basededatos">Base de datos</Menu.Item> */}
                        <SubMenu key="admision" title={<span>
                            <Icon type="rest" />
                            <span>Admisión</span>
                        </span>}>
                            <Menu.Item>
                                <Link to="/documentacion/admision/instituto">Instituto</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/admision/modelos">Modelos</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/admision/controladores">
                                    Controladores
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/admision/cliente">Cliente</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/documentacion/admision/softwares">Softwares</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Affix>
            </div>
        )
    }
}

export default Sider
