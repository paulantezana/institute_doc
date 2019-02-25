import React, { Component } from 'react'
import DocMenu from '../components/DocMenu';
import { Row, Col } from 'antd';

export default class Documentacion extends Component {
  render () {
    return (
      <div>
        <div className="SiteHeader">
          <h1 className="SiteHeader-title">Documentacion</h1>
        </div>
        <Row style={{marginTop: '32px'}}>
          <Col lg={6} xl={5} xxl={4} >
            <DocMenu/>
          </Col>
          <Col lg={18} xl={19} xxl={20} >
            contendio
          </Col>
        </Row>
      </div>
    )
  }
}
