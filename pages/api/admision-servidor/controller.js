import React, { Component } from 'react';
import CurrentAppLayout from './layout';
import DataMDX from './config-email.mdx';

class PageData extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admision controlador">
        <DataMDX/>
      </CurrentAppLayout>
    )
  }
}
export default PageData;