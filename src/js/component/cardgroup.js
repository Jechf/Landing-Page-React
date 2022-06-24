import React from 'react'
import { Card } from './card'

const imagenesCard = ["https://picsum.photos/200?random=1", "https://picsum.photos/200?random=2", "https://picsum.photos/200?random=3", "https://picsum.photos/200?random=4"]
export const Cardgroup = () => {

  return (
    <div className='container'>
    <div className='card-group'>
      {imagenesCard.map((img, i) => {
        return <Card img={img} />
      })}
    </div>
    </div>
  )
}
