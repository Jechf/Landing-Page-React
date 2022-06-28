import React from 'react'
import { Card } from './card'

const cardImages = ["https://picsum.photos/200?random=1", "https://picsum.photos/200?random=2", "https://picsum.photos/200?random=3", "https://picsum.photos/200?random=4"];
const cardTexttittles= ["Etimología", "Proceso", "Historia","Funcionamiento de la cámara"];
const cardTextbodys = ["El término «fotografía» proviene del griego φῶς phōs (raíz φωτ- phōt, luz), y γράφω grafo (raíz γράφ- graf, rayar, dibujar...",
                       "Basándose en el principio de la cámara oscura, se proyecta una imagen captada por un pequeño agujero (fotografía estenopeica) o un...",
                       "La invención de la técnica fotográfica es el resultado de la combinación de diversos descubrimientos técnicos relacionados con la...",
                       "La cámara oscura es el dispositivo formador de la imagen, mientras que la película fotográfica o el sensor electrónico..." ];



                       export const Cardgroup = () => {

  return (
    <div className='container'>
    <div className='card-group'>
      {cardImages.map((cardImage, i) => {
       let cardTexttittle= cardTexttittles[i]; 
       let cardTextbody = cardTextbodys[i];
       
        return <Card img={cardImage} tittle={cardTexttittle} tbody={cardTextbody}/>
      })}
    </div>
    </div>
  )
}
