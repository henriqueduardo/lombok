import React, { useState } from 'react'
import Destino from '../DestinosComponent';
import destinosMock from '../../Mock/destinos-cards';

const DestinosList = () => {

    const [destinos, setDestinos] = useState(destinosMock);

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        <div className='flex justify-between destinos-box'>
          {destinos.map(destinos => (
            <Destino key={destinos._id} destino={destinos}/>
          ))}
        </div>
    </section>
  )
}

export default DestinosList;;