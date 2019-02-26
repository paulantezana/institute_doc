import React, { Component } from 'react'
import CurrentAppLayout from './../../../components/Layouts/AdmisionServerLayout';

class AdmisionServidor extends Component {
  render () {
    return (
      <CurrentAppLayout title="Admisión paquete config">
        <h2>package config</h2>
        <p>Todas las configuraciones del sistema como la base de datos, versiones, se encuentran en esta carpeta</p>
      </CurrentAppLayout>
    )
  }
}
export default AdmisionServidor;