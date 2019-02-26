import React, { Component } from 'react';
import CurrentAppLayout from './layout';
import DataMDX from './config-config.mdx';

class PageData extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión configuracion">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}
export default PageData;