import React from 'react';
import "./style.css";
import DestinosList from '../../Components/DestinosComponentList';

const Destinos = () => {
  return (
    <>
    <section className='destinos-bg'>
      <div className='container pt-24'>
        <h1 className='destinos-title'>Escolha seu destino</h1>
      <DestinosList/>
      </div>
    </section>
    </>
  )
}

export default Destinos;