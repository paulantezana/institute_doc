import React, { Component } from 'react';
import CurrentAppLayout from './layout';
import DataMDX from './config-config.mdx';

class AdmisionServidor extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión configuracion">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}
export default AdmisionServidor;