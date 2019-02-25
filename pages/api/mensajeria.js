import React, { Component } from 'react'
import Player from '../../components/Player';
import ApiLayout from '../../components/ApiLayout';

export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Sistema de mensajeria">
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
      </ApiLayout>
    )
  }
}
