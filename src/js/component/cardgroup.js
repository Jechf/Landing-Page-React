import React from 'react'
import { Card } from './card'

export const Cardgroup = () => {

const cardimages = ["https://picsum.photos/200?ramdom=1", "https://picsum.photos/200?ramdom=2" , "https://picsum.photos/200?ramdom=3", "https://picsum.photos/200?ramdom=4"];

  return (
    <div className='container'>
    <div className='card-group'>
      {cardimages.map((cardimage, i) => {
        return <Card img={cardimage}/>
      })}
    </div>
    </div>
  )
}
