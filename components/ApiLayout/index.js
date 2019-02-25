import React, { Component } from 'react'
import ApiMenu from '../ApiMenu';
import { Row, Col } from 'antd';
import SiteHeader from '../SiteHeader';
import Head from 'next/head';

class DocLayout extends Component {
  render () {
    const { children, title = '', description = '' } = this.props;
    return (
      <div>
        <Head>
          <script src="/static/prism.js"></script>
          <link rel='stylesheet' type='text/css' href='/static/prism.css' />
        </Head>
        <SiteHeader title={title} description={description} />
        <Row style={{marginTop: '32px'}}>
          <Col lg={6} xl={5} xxl={4} >
            <ApiMenu/>
          </Col>
          <Col lg={18} xl={19} xxl={20} >
            {children}
          </Col>
        </Row>
      </div>
    )
  }
}
export default DocLayout;