import React, { Component } from 'react'
import Player from '../../components/Player';
import ApiLayout from '../../components/ApiLayout';

export default class Documentacion extends Component {
  render () {
    return (
      <ApiLayout title="Base de datos">
          <div className="Center">
            <h2>Introduccion</h2>
            <img src="/static/images/database.png" />
          </div>
      </ApiLayout>
    )
  }
}
