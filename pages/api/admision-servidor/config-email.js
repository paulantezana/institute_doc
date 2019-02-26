import React, { Component } from 'react'
import CurrentAppLayout from './layout';
import DataMDX from './config-email.mdx';

class AdmisionServidor extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión Email">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}
export default AdmisionServidor;