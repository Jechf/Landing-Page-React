import React from 'react'
import { Buttomcard } from './buttom';

export const Card = () => {
  return (

    <div className="card text-center">
         <img src="https://instalacionesmorant.com/wp-content/uploads/2017/07/mercedes-logo-300x300.jpg" className="card-img-top" alt="logo"></img>
    <div className="card-body">
      <h5 className="card-title">Bob Dylan</h5>
      <p className="card-text">
        Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
        influential figure in popular music and culture for more than five decades.
      </p>
      <div className='card-footer'>
          <Buttomcard/>
      </div>
    </div>
  </div>
  )
};