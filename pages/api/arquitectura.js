import React, { Component } from 'react'
import Player from '../../components/Player';
import ApiLayout from '../../components/ApiLayout';
import { Tree, Icon, Input, Divider, Card, Modal } from 'antd';
import { IconGO,IconHtml,IconJs } from '../../components/icons';

const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

const Search = Input.Search;

const gData = [
  {
    key: "config",
    title: "config",
    icon: '',
    description: '',
    children: [
      {
        key: "config-config",
        title: "config",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
      {
        key: "config-database",
        title: "database",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
      {
        key: "config-email",
        title: "email",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "controller",
    title: "controller",
    icon: '',
    description: '',
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
    description: '',
    children: [
      {
        key: "endpoint-api",
        title: "api",
        icon: <Icon component={IconGO}/>,
        description: <Icon component={IconGO}/>,
      },
      {
        key: "endpoint-ws",
        title: "ws",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "migration",
    title: "migration",
    icon: '',
    description: '',
    children: [
      {
        key: "migration-migration",
        title: "migration",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "models",
    title: "models",
    icon: '',
    description: '',
    children: [
      {
        key: "models-user",
        title: "user",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "static",
    title: "static",
    icon: '',
    description: '',
    children: [
      {
        key: "static-sts",
        title: "static",
        icon: '',
        description: '',
      },
      {
        key: "static-app",
        title: "apps",
        icon: '',
        description: '',
      },
      {
        key: "static-boo",
        title: "books",
        icon: '',
        description: '',
      },
      {
        key: "static-cha",
        title: "chat",
        icon: '',
        description: '',
      },
      {
        key: "static-pro",
        title: "profile",
        icon: '',
        description: '',
      },
      {
        key: "static-bem",
        title: "nationalEmblem.jpg",
        icon: <Icon type="file-jpg" />,
        description: '',
      },
      {
        key: "static-mil",
        title: "ministry.jpg",
        icon: <Icon type="file-jpg" />,
        description: '',
      },
      {
        key: "static-mis",
        title: "ministrySmall.jpg",
        icon: <Icon type="file-jpg" />,
        description: '',
      },
      {
        key: "static-log",
        title: "logo.jpg",
        icon: <Icon type="file-jpg" />,
        description: '',
      },
      {
        key: "static-boo-j",
        title: "book.jpg",
        icon: <Icon type="file-jpg" />,
        description: '',
      },
      {
        key: "static-setm",
        title: "data-set.min.js",
        icon: <Icon component={IconJs}/>,
        description: '',
      },
    ],
  },
  {
    key: "tem",
    title: "temp",
    icon: '',
    description: '',
  },
  {
    key: "tml",
    title: "templates",
    icon: '',
    description: '',
    children: [
      {
        key: "tml-ema",
        title: "email.html",
        icon: <Icon component={IconHtml}/>,
        description: '',
      },
      {
        key: "tml-com",
        title: "templateCompany.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
      {
        key: "tml-cstu",
        title: "templateCourseStudent.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
      {
        key: "tml-stu",
        title: "templateStudent.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
      {
        key: "tml-ssa",
        title: "templateStudentSA.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
      {
        key: "tml-tea",
        title: "templateTeacher.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
      {
        key: "tml-tsu",
        title: "templateTeacherSubsidiary.xlsx",
        icon: <Icon type="file-excel"/>,
        description: '',
      },
    ],
  },
  {
    key: "ut",
    title: "utilities",
    icon: '',
    description: '',
    children: [
      {
        key: "ut-us",
        title: "user",
        icon: <Icon component={IconGO}/>,
        description: '',
      },
    ],
  },
  {
    key: "edi",
    title: ".editorconfig",
    icon: <Icon type="file" />,
    description: '',
  },
  {
    key: "git",
    title: ".gitignore",
    icon: <Icon type="file" />,
    description: '',
  },
  {
    key: "cof",
    title: "config.json",
    icon: <Icon type="file" />,
    description: '',
  },
  {
    key: "mai",
    title: "main.go",
    icon: <Icon component={IconGO}/>,
    description: '',
  },
  {
    key: "rea",
    title: "README.md",
    icon: <Icon type="file" />,
    description: '',
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


export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Sistema de biblioteca">
        <Card bordered={false}>
          <SearchTree/>
        </Card>
        <Divider/>
        <div className="Center">
          {/* <h2>Introduccion</h2> */}
          <img src="/static/images/arquitectura.jpg"/>
        </div>
      </ApiLayout>
    )
  }
}
