import React from 'react';
import AdmisionServerExplorer from  './AdmisionServerExplorer';
import ApiMenu from '../ApiMenu';
import { Row, Col, Affix } from 'antd';
import SiteHeader from '../SiteHeader';
import Head from 'next/head';
import Prism from 'prismjs';

class AdmisionServerLayout extends React.Component {
  componentDidMount () {
    Prism.highlightAll()
  }
  
  componentDidUpdate () {
    Prism.highlightAll()
  }
  render () {
    const { children, title = '', description = '' } = this.props;
    return (
      <div>
        <Head>
          {/* <script src="/static/prism.js"></script> */}
          <link rel='stylesheet' type='text/css' href='/static/prism.css' />
        </Head>
        <SiteHeader title={title} description={description} />
        <Row style={{marginTop: '32px'}}>
          <Col lg={6} xl={5} xxl={4} >
            <ApiMenu/>
          </Col>
          <Col lg={18} xl={19} xxl={20} >
          <div style={{paddingRight: '1rem'}}>
            <Row>
                <Col sm={18}> 
                  <div style={{padding: '32px'}}>
                    { children }
                  </div>
                </Col>
                <Col sm={6}>
                  <Affix offsetTop={0}>
                    <AdmisionServerExplorer/>
                  </Affix>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default AdmisionServerLayout;