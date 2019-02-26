import { Menu, Icon } from 'antd';
import Router from 'next/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { IconAdmission, IconReview, IconCertificate } from '../icons'

class Sider extends React.Component {
  handleClick = e => {
    Router.push({
      pathname: `/api/${e.key}`
    })
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sistemas','introducion']}
        mode="inline"
      >
        <SubMenu key="introducion" title={<span><Icon type="setting" /><span>Introducion</span></span>}>
          <Menu.Item key="instalar-servidor">Instalar el servidor</Menu.Item>
          <Menu.Item key="instalar-cliente">Instalar los clientes</Menu.Item>
          <Menu.Item key="estructura-servidor">Estructura los servidor</Menu.Item>
          <Menu.Item key="prerequisitos">Prerequisitos</Menu.Item>
          <Menu.Item key="arquitectura">Arquitectura</Menu.Item>
          <Menu.Item key="basededatos">Base de datos</Menu.Item>
        </SubMenu>
        <SubMenu key="sistemas" title={<span><Icon type="setting" /><span>Sistemas</span></span>}>
          <MenuItemGroup key="g1" title="Admisión">
            <Menu.Item key="admision">Admisión</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Revisión">
            <Menu.Item key="revision">Revisión</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g3" title="Certificación">
            <Menu.Item key="certificacion">Certificación</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g4" title="Egresados">
            <Menu.Item key="egresados">Egresados</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g5" title="Biblioteca">
            <Menu.Item key="biblioteca">Biblioteca</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g6" title="Estudiante">
            <Menu.Item key="estudiante">Estudiante</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g7" title="Sitios Web">
            <Menu.Item key="sitioweb">Sitios Web</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g8" title="Mensageria">
            <Menu.Item key="mensajeria">Mensageria</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;