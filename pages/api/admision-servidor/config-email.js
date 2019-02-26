import React, { Component } from 'react'
import CurrentAppLayout from './../../../components/Layouts/AdmisionServerLayout';
import DataMDX from './config-email.mdx';

class PageData extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión Email">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}
export default PageData;