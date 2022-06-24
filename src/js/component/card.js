import React from 'react'
import { Buttomcard } from './buttom';

export const Card = (props) => {
  return (
    
    <div className='card m-3 border-0'>
    <div className="card text-center">
         <img src={props.img} className="card-img-top" alt="logo"></img>
            <div className="card-body">
              <h5 className="card-title">Mercedes-Benz 300 SL</h5>
              <p className="card-text">
              El Mercedes-Benz 300 SL (código de chasis W198) es un automóvil deportivo biplaza producido por el fabricante alemán Mercedes-Benz entre los años 1954 y 1963.
              </p>
            <div className='card-footer'>
              <Buttomcard/>
            </div>
            </div>
     </div>
     </div>
  )
};