import React, { Component } from 'react'
import DocMenu from '../DocMenu';
import { Row, Col } from 'antd';
import SiteHeader from '../SiteHeader';

class DocLayout extends Component {
  render () {
    const { children, title = '', description = '' } = this.props;
    return (
      <div>
        <SiteHeader title={title} description={description} />
        <Row style={{marginTop: '32px'}}>
          <Col lg={6} xl={5} xxl={4} >
            <DocMenu/>
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