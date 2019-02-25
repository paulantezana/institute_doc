import React, { Component } from 'react'
import Player from '../../components/Player';
import ApiLayout from '../../components/ApiLayout';
import { Divider } from 'antd';

export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Prerequisitos">
          <div className="Center">
            <h2>Introduccion a go echo</h2>
          </div>
          <div className="Grid">
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=E21M4eEW1Kw',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=0IiZDZYz-NM',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=xP1_131w38A&t=2s',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=AmEfVOpZiZo&t=1s',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=Pf1whKWKB1Q',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=Xyxp3M1yNu8&t=613s',
                  type: 'video/youtube'
                }
              ]}
            />
          </div>
          <Divider/>
          <div className="Center">
            <h2>Introduccion a React JS</h2>
          </div>
          <div className="Grid">
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=4gAAiOKOwio',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=ld8pG4RPAeI',
                  type: 'video/youtube'
                }
              ]}
            />
            <Player 
              techOrder={['youtube']} controls={true}
              sources={ [
                {
                  src: 'https://www.youtube.com/watch?v=8AeJOIk58tQ',
                  type: 'video/youtube'
                }
              ]}
            />
          </div>
      </ApiLayout>
    )
  }
}
