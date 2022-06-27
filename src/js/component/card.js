import React from 'react'
import { Buttomcard } from './buttom';

export const Card = (props) => {
  return (
    
    <div className='card m-3 border-0'>
    <div className="card text-center">
         <img src={props.img} className="card-img-top" alt="logo"></img>
            <div className="card-body">
              <h5 className="card-title">{props.tittle}</h5>
              <p className="card-text">
                {props.tbody}              
              </p>
            <div className='card-footer'>
              <Buttomcard/>
            </div>
            </div>
     </div>
     </div>
  )
};