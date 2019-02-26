import React from 'react'
import ApiLayout from './ApiLayout';
import { Row, Col, Affix } from 'antd';

import AdmisionServerExplorer from  './AdmisionServerExplorer';

export default ({children, title, description = ""})=>(
  <ApiLayout title={title} description={description}>
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
  </ApiLayout>
);