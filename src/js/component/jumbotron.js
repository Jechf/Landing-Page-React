import React from 'react'
import { Buttomcard } from './buttom'

export const Jumbotron = () => {
  return (
    <div className='container bg-light'>
        <div className="jumbotron  jumbotron-fluid">
         <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
            <Buttomcard/>
            </p>
        </div>
    </div>
  )
}
