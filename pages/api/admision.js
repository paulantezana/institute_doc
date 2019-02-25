import React, { Component } from 'react'
import { Card, List, Divider } from 'antd';
import Player from '../../components/Player';
import ApiLayout from '../../components/ApiLayout';

const data = [
    {
      title: '¿Por qué elegir SICAR Abarrotes Punto de Venta?',
      description: 'Te explicamos porque tienes que elegir a SICAR, Punto de Venta en tu tienda de abarrotes.',
      video: 'https://www.youtube.com/embed/F1xjwkoxcac'
    },
    {
      title: '¿Por qué elegir SICAR Abarrotes Punto de Venta?',
      description: 'Te explicamos porque tienes que elegir a SICAR, Punto de Venta en tu tienda de abarrotes.',
      video: 'https://www.youtube.com/embed/F1xjwkoxcac'
    },
    {
      title: '¿Por qué elegir SICAR Abarrotes Punto de Venta?',
      description: 'Te explicamos porque tienes que elegir a SICAR, Punto de Venta en tu tienda de abarrotes.',
      video: 'https://www.youtube.com/embed/F1xjwkoxcac'
    },
];

export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Sistema de admission">
        {
            /**
             * VIDEO PRINCIPAL
             */
          }
          <div className="Center">
              <h2>Introduccion</h2>
              <Player 
                techOrder={['youtube']}
                controls={true}
                width='700px'
                sources={ [
                  {
                    src: 'https://www.youtube.com/watch?v=F1xjwkoxcac',
                    type: 'video/youtube'
                  }
                ]}
              />
          </div>

          {
            /**
             * Lista de videos
             */
          }
          <Divider/>
          {/* <Card bordered={false}>
              <List
                  grid={{
                      gutter: 36, xs: 1, sm: 2, md: 3, 
                  }}
                  dataSource={data}
                  renderItem={item => (
                  <List.Item>
                      <Card
                          hoverable
                          style={{textAlign:'center'}}
                          
                          cover={
                              <Player 
                                techOrder={['youtube']}
                                controls={true} 
                                // width='100%'
                                sources={[
                                  {
                                    src: item.video,
                                    type: 'video/youtube'
                                  }
                                ]}
                              />
                          }
                      >
                          <Card.Meta
                              style={{whiteSpace: 'normal'}}
                              title={item.title}
                              description={item.description}
                          />
                      </Card>
                  </List.Item>
                  )}
              />
          </Card> */}
      </ApiLayout>
    )
  }
}
