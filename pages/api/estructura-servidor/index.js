import React, { Component } from 'react'
import ApiLayout from '../../../components/ApiLayout';
import { Tree, Icon, Input, Divider, Card, Modal } from 'antd';
import { IconGO,IconHtml,IconJs } from '../../../components/icons';

import ConfigConfig from './config-config.mdx';
import ConfigDatabase from './config-database.mdx';
import ConfigEmail from './config-email.mdx';

import Controller from './controller.mdx';
import Endpoint from './endpoint.mdx';
import EndpointApi from './endpoint-api.mdx';
import EndpointWs from './endpoint-ws.mdx';

import MigrationMigration from './migration-migration.mdx';
import MainMDX from './main.mdx';

import Temp from './temp.mdx';

import ConfigJsonMDX from './config-json.mdx';


const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

const Search = Input.Search;

const gData = [
  {
    key: "config",
    title: "config",
    icon: '',
    description: 'Todas las configuraciones del sistema como la base de datos, versiones, se encuentran en esta carpeta',
    children: [
      {
        key: "config-config",
        title: "config",
        icon: <Icon component={IconGO}/>,
        description: <ConfigConfig/>,
      },
      {
        key: "config-database",
        title: "database",
        icon: <Icon component={IconGO}/>,
        description: <ConfigDatabase/>,
      },
      {
        key: "config-email",
        title: "email",
        icon: <Icon component={IconGO}/>,
        description: <ConfigEmail/>,
      },
    ],
  },
  {
    key: "controller",
    title: "controller",
    icon: '',
    description: <Controller/>,
    children: [
      {
        key: "controller-user",
        title: "user",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
      {
        key: "controller-external",
        title: "external",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
      {
        key: "controller-setting",
        title: "setting",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "endpoint",
    title: "endpoint",
    icon: '',
    description: <Endpoint/>,
    children: [
      {
        key: "endpoint-api",
        title: "api",
        icon: <Icon component={IconGO}/>,
        description: <EndpointApi/>,
      },
      {
        key: "endpoint-ws",
        title: "ws",
        icon: <Icon component={IconGO}/>,
        description: <EndpointWs/>,
      },
    ],
  },
  {
    key: "migration",
    title: "migration",
    icon: '',
    description: 'Migración de todos los modelos a la base de datos',
    children: [
      {
        key: "migration-migration",
        title: "migration",
        icon: <Icon component={IconGO}/>,
        description: <MigrationMigration/>,
      },
    ],
  },
  {
    key: "models",
    title: "models",
    icon: '',
    description: 'Modelos de la base de datos',
    children: [
      {
        key: "models-user",
        title: "user",
        icon: <Icon component={IconGO}/>,
        description: 'Todo los modelos de la base de datos Modelos = Tablas',
      },
    ],
  },
  {
    key: "static",
    title: "static",
    icon: '',
    description: 'En esta carpeta se almacenan todos los archivos estáticos que el cliente necesita como logo, fotos de perfil, pdfs, etc.',
    children: [
      {
        key: "static-app",
        title: "apps",
        icon: '',
        description: 'Esta carpeta se usa para almacenar los logos de los diferentes sistemas que se despliegan usan este api servicie.',
      },
      {
        key: "static-boo",
        title: "books",
        icon: '',
        description: 'Esta carpeta se usa para almacenar todos los archivos que genera el sistema de biblioteca como los pdfs, portas ye entre otros',
      },
      {
        key: "static-cha",
        title: "chat",
        icon: '',
        description: 'Esta carpeta se usa para guardar todos los medios que genera el sistema de chat',
      },
      {
        key: "static-pro",
        title: "profile",
        icon: '',
        description: 'Esta carpeta se usa para almacenar las fotos de perfil cada usuario',
      },
      {
        key: "static-bem",
        title: "nationalEmblem.jpg",
        icon: <Icon type="picture" />,
        description: 'Escudo nacional del Perú',
      },
      {
        key: "static-mil",
        title: "ministry.jpg",
        icon: <Icon type="picture" />,
        description: 'Encabezado del ministerio formato largo',
      },
      {
        key: "static-mis",
        title: "ministrySmall.jpg",
        icon: <Icon type="picture" />,
        description: 'Encabezado del ministerio formato corto',
      },
      {
        key: "static-log",
        title: "logo.jpg",
        icon: <Icon type="picture" />,
        description: 'Logo por defecto de la institución',
      },
      {
        key: "static-boo-j",
        title: "book.jpg",
        icon: <Icon type="picture" />,
        description: 'Portada por defecto de los libros del sistema de biblioteca',
      },
      {
        key: "static-setm",
        title: "data-set.min.js",
        icon: <Icon component={IconJs}/>,
        description: 'Archivo de JavaScript que los clientes necesitan para generar gráficos estadísticos.',
      },
    ],
  },
  {
    key: "tem",
    title: "temp",
    icon: '',
    description: <Temp/>,
  },
  {
    key: "tml",
    title: "templates",
    icon: '',
    description: 'Plantillas de HTML, Excel, etc. Que son usadas por el sistema y el usuario final',
    children: [
      {
        key: "tml-ema",
        title: "email.html",
        icon: <Icon component={IconHtml}/>,
        description: 'Esta plantilla se usa para enviar los correos electrónicos de recuperación de contraseña de un usuario.',
      },
      {
        key: "tml-com",
        title: "templateCompany.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva las empresas desde un archivo Excel.',
      },
      {
        key: "tml-cstu",
        title: "templateCourseStudent.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva los alumnos de los cursos del sistema de certificación desde un archivo Excel.',
      },
      {
        key: "tml-stu",
        title: "templateStudent.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva los alumnos de un programa de estudios en específico es útil para los coordinadores de un programa de estudios.',
      },
      {
        key: "tml-ssa",
        title: "templateStudentSA.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva los alumnos de todos los programas de estudios.',
      },
      {
        key: "tml-tea",
        title: "templateTeacher.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva los profesores de un programa de estudios en específico es útil para los coordinadores de un programa de estudios.',
      },
      {
        key: "tml-tsu",
        title: "templateTeacherSubsidiary.xlsx",
        icon: <Icon type="file-excel"/>,
        description: 'Esta plantilla que facilitar al usuario para subir de forma masiva los profesores de todos los programas de estudios.',
      },
    ],
  },
  {
    key: "utilities",
    title: "utilities",
    icon: '',
    description: 'En este paquete se encuentran todos los utilitarios que el sistema usa en diferentes procesos como para recibir y enviar datos, paginación, etc.',
    children: [
      {
        key: "utilities-counter",
        title: "counter.go",
        icon: <Icon component={IconGO}/>,
        description: 'Función para hacer conteos',
      },
      {
        key: "utilities-notice",
        title: "notice.go",
        icon: <Icon component={IconGO}/>,
        description: 'Estructura que sirve para enviar las notificaciones',
      },
      {
        key: "utilities-request",
        title: "request.go",
        icon: <Icon component={IconGO}/>,
        description: 'Estructura que sirve como una plantilla para recibir datos desde el cliente y también calcula la paginación para cada consulta.',
      },
      {
        key: "utilities-response",
        title: "response.go",
        icon: <Icon component={IconGO}/>,
        description: 'Estructura que sirve como una plantilla para enviar datos al cliente.',
      },
      {
        key: "utilities-token",
        title: "token.go",
        icon: <Icon component={IconGO}/>,
        description: 'Permite firmar los claves JWT de un usuario con vigencia de 24 horas usando el método HS256',
      },
    ],
  },
  {
    key: "edi",
    title: ".editorconfig",
    icon: <Icon type="file" />,
    description: 'Configuraciones del editor de código',
  },
  {
    key: "git",
    title: ".gitignore",
    icon: <Icon type="file" />,
    description: 'Configuraciones de git',
  },
  {
    key: "cof",
    title: "config.json",
    icon: <Icon type="file" />,
    description: <ConfigJsonMDX/>,
  },
  {
    key: "mai",
    title: "main.go",
    icon: <Icon component={IconGO}/>,
    description: <MainMDX/>,
  },
  {
    key: "rea",
    title: "README.md",
    icon: <Icon type="file" />,
    description: 'Documentación del sistema en GitHub.',
  },
];

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const findNode = (key,tree) => {
  for (let i = 0; i < tree.length; i++) {
    if(tree[i].key === key){
      return tree[i];
    }
    if(tree[i].children){
      let otro = findNode(key,tree[i].children);
      if (otro != undefined){
        return otro;
      }
    }
  }
}

class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,

    modalVisible: false,
    currentItem: {},
  }

  handleCancel = (e) => {
    this.setState({
      modalVisible: false,
    });
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onSelectKey = (expandedKeys) => {
    const selectNode = findNode(expandedKeys[0],gData);
    this.setState({
      modalVisible: true,
      currentItem: selectNode,
    });
  }

  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.title.indexOf(value) > -1) {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.title}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title} icon={item.icon}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} icon={item.icon}/>;
    });
    return (
      <div>
        <Search style={{ marginBottom: 8 }} placeholder="Buscar" onChange={this.onChange} />
        <DirectoryTree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onSelect={this.onSelectKey}
        >
          {loop(gData)}
        </DirectoryTree>
        <Modal
          title={this.state.currentItem.title}
          visible={this.state.modalVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.state.currentItem.description}
        </Modal>
      </div>
    );
  }
}


export default class EstructuraServidor extends Component {
  render () {
    return (
      <ApiLayout title="Sistema de biblioteca">
        <Card bordered={false}>
          <SearchTree/>
        </Card>
      </ApiLayout>
    )
  }
}
