import { Menu, Icon } from 'antd';
import Router from 'next/router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { IconAdmission, IconReview, IconCertificate } from '../icons'

class Sider extends React.Component {
  handleClick = e => {
    Router.push({
      pathname: `/tutorial/${e.key}`
    })
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="admision">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Admisión
        </Menu.Item>
        <Menu.Item key="revision">
          <Icon component={IconReview} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Revisión
        </Menu.Item>
        <Menu.Item key="certificacion">
          <Icon component={IconCertificate} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Certificación
        </Menu.Item>
        <Menu.Item key="egresados">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Egresados
        </Menu.Item>
        <Menu.Item key="biblioteca">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Biblioteca
        </Menu.Item>
        <Menu.Item key="estudiante">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Estudiante
        </Menu.Item>
        <Menu.Item key="sitioweb">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Sitios Web
        </Menu.Item>
        <Menu.Item key="mensajeria">
          <Icon component={IconAdmission} style={{fontSize: '26px', position: 'relative', top: '5px'}}/>{' '}
          Mensageria
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sider;