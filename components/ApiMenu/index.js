import { Menu, Icon, BackTop, Affix } from 'antd';
import Router from 'next/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import "./index.less";

import { IconAdmission, IconReview, IconCertificate } from '../icons'

class Sider extends React.Component {
  handleClick = e => {
    Router.push({
      pathname: `/api/${e.key}`
    })
  }

  render() {
    return (
        <Affix offsetTop={0}>
          <Menu
              onClick={this.handleClick}
              className="ApiMenu"
              defaultOpenKeys={['sistemas']}
              mode="inline"
            >
            <Menu.Item key="instalar-servidor">Instalar el servidor</Menu.Item>
            <Menu.Item key="instalar-cliente">Instalar los clientes</Menu.Item>
            <Menu.Item key="estructura-servidor">Estructura los servidor</Menu.Item>
            <Menu.Item key="prerequisitos">Prerequisitos</Menu.Item>
            <Menu.Item key="arquitectura">Arquitectura</Menu.Item>
            <Menu.Item key="basededatos">Base de datos</Menu.Item>
            <SubMenu key="sistemas" title={<span><Icon type="setting" /><span>Sistemas</span></span>}>
              <SubMenu key="admision" title="Admisión">
                <Menu.Item key="admision-servidor">Servidor</Menu.Item>
                <Menu.Item key="admision-cliente">Cliente</Menu.Item>
                <Menu.Item key="admision-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="revision" title="Revisión">
                <Menu.Item key="revision-servidor">Servidor</Menu.Item>
                <Menu.Item key="revision-cliente">Cliente</Menu.Item>
                <Menu.Item key="revision-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="certificacion" title="Certificación">
                <Menu.Item key="certificacion-servidor">Servidor</Menu.Item>
                <Menu.Item key="certificacion-cliente">Cliente</Menu.Item>
                <Menu.Item key="certificacion-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="egresados" title="Egresados">
                <Menu.Item key="egresados-servidor">Servidor</Menu.Item>
                <Menu.Item key="egresados-cliente">Cliente</Menu.Item>
                <Menu.Item key="egresados-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="biblioteca" title="Biblioteca">
                <Menu.Item key="biblioteca-servidor">Servidor</Menu.Item>
                <Menu.Item key="biblioteca-cliente">Cliente</Menu.Item>
                <Menu.Item key="biblioteca-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="estudiante" title="Estudiante">
                <Menu.Item key="estudiante-servidor">Servidor</Menu.Item>
                <Menu.Item key="estudiante-cliente">Cliente</Menu.Item>
                <Menu.Item key="estudiante-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="sitio-web" title="Sitios Web">
                <Menu.Item key="sitio-web-tema">Tema</Menu.Item>
                <Menu.Item key="sitio-web-plugin">Plugin</Menu.Item>
                <Menu.Item key="sitio-web-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
              <SubMenu key="mensageria" title="Mensageria">
                <Menu.Item key="mensageria-servidor">Servidor</Menu.Item>
                <Menu.Item key="mensageria-cliente">Cliente</Menu.Item>
                <Menu.Item key="mensageria-tegnologias">Tegnologias</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Affix>
    );
  }
}

export default Sider;