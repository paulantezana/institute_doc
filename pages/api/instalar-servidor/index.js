import React, { Component } from 'react'
import ApiLayout from '../../../components/ApiLayout';
import ServerMDX from './Server.mdx';
import { Divider } from 'antd';

export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Instalacion del servidor en UBUNTU">
          <div className="Center">
            <h2>Intalacion</h2>
          </div>
          <Divider/>
          <ServerMDX/>
      </ApiLayout>
    )
  }
}
