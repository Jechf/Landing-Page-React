import React from 'react'
import { Buttomcard } from './buttom'

export const Jumbotron = () => {
  return (
    <div className='container bg-light mt-3'>
        <div className="jumbotron  jumbotron-fluid">
         <h1 className="display-4">Hola Fotografía!</h1>
            <p className="lead">A continuacion te presentamos una pequeña muestra del mundo fotografico y sus diferentes propuestas</p>
            <p className="lead">
            <Buttomcard/>
            </p>
        </div>
    </div>
  )
}
