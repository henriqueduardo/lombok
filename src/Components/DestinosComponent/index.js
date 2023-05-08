import React from 'react';
import "./style.css";
import { BsCalendarDate } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Destino = ( {destino} ) => {
  return (
    <>
    <div className='bg-white rounded-lg card-destinos'>
      <img src={destino.imagem} className='w-full mx-auto destino-img'></img>
      <div className='flex flex-col my-3 space-y-2 px-5 py-2'>
        <div className='flex items-center gap-1'>
          <HiLocationMarker className='color-primary text-sm'/>
          <h1 className='text-gray-900 text-lg color-primary uppercase'>{destino.local}</h1>
        </div>
        <div className='flex gap-2'>
          <BsCalendarDate className='color-primary'/>
          <p className='text-gray-500 text-sm'>{destino.data}</p>
        </div>
        <p className='text-gray-500 desc-destinos'>{destino.descricao}</p>
        <h2 className='text-zinc-800 text-2xl font-bold'>R$ {destino.preco}</h2>
        <button className='bg-primary rounded-md btn-detalhes'>Detalhes</button>
      </div>
    </div>
    </>
  )
}

export default Destino;