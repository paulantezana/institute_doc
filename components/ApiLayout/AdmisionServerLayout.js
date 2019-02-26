import React from 'react'
import ApiLayout from './index';
import { Row, Col, Affix } from 'antd';

import SearchTree from  './SearchTree';

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
            <SearchTree/>
          </Affix>
        </Col>
      </Row>
    </div>
  </ApiLayout>
);