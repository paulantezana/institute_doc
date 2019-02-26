import React, { Component } from 'react'
import CurrentAppLayout from './layout';
import DataMDX from './config-database.mdx';

class AdmisionServidor extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión base de datos">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}

export default AdmisionServidor;