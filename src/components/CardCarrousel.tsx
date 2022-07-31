import React from 'react'
import CarCard from './CarCard'

const CardCarrousel = ({cars}) => {
  return (
    <section className="w-full overflow-x-hidden">
        <h2 className='text-4xl '>Autos <span className="font-bold">Destacados</span></h2>
        
           <div className="flex justify-start overflow-x-scroll">
            
             {cars.map((car, i)=><CarCard key={i} car={car} featured={true}/>)}
           
               
    
           </div>
        
        </section>
  )
}

export default CardCarrousel