import React, { Component } from 'react'
import Player from '../../components/Player';
import DocLayout from '../../components/DocLayout';

export default class Documentacion extends Component {
  render () {
    return (
      <DocLayout title="Sistemas">
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
      </DocLayout>
    )
  }
}
