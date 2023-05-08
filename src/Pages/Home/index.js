import React from 'react';
import "./style.css";
import lombokB from "../../img/lombokB.jpg";
import thumb from "../../img/thumb.png";
import lombokL from "../../img/lombokL.jpg";
import lombokO from "../../img/lombokO.jpg";
import lombokM from "../../img/lombokM.jpg";
import lombokO2 from "../../img/lombokO2.jpg";
import lombokK from "../../img/lombokK.jpg";
import lombokMotivos from "../../img/lombok-mt.jpg";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Slider from '../../Components/Slider';

const Home = () => {
  return (
    <>
        <main className='main-background'>
            <div className='relative top-44'>
                <div className='container main-text-box grid justify-center'>
                    <p className='text-white text-start font-medium relative left-3 text-lg highlight-p'>Deixe-nos fazer seu plano de viagem perfeito</p>
                    <h1 className='text-white text-hero line-height '>Lombok <br/> Trip</h1>
                </div>
            </div>

            <div className='desc-relative'>
              <div className='color-primary bg-white desc-1'>
                <h2>Expêriencia única</h2>
              </div>
            </div>
            <div className='desc-relative'>
              <div className='color-primary bg-white desc-2 flex items-center'>
                  <img className='thumb w-20 object-cover' src={thumb}/>
                <div>
                  <div className='desc-text'>
                    <h4 className='text-start'>Tour pessoal</h4>
                    <p className='text-start font-normal text-zinc-600 '>Assista esse vídeo e tenha uma pequena noção da jornada que o aguarda</p>
                  </div>
                </div>
                  <a href='https://www.youtube.com/watch?v=wM1TK0eCJoo&ab_channel=InvestIslands' target='_blank'><HiOutlineArrowSmRight className='btn-desc cursor-pointer'/></a>
              </div>
            </div>
        </main>

        <section className='bg-white w-full lombok-desc-bg' id='sobre'>
          <h2 className='text-center py-10 lombok-title color-primary font-extrabold container'>Explore</h2>
          <div className='flex justify-between container'>
            <div className='lombok-letras'><img src={lombokL} className='lombok-img object-cover'/></div>
            <div className='lombok-letras-2'><img src={lombokO} className='lombok-img object-cover lombok-img-top-100'/></div>
            <div className='lombok-letras-3'><img src={lombokM} className='lombok-img object-cover lombok-img-top-200'/></div>
            <div className='lombok-letras-4'><img src={lombokB} className='lombok-img object-cover lombok-img-top-200'/></div>
            <div className='lombok-letras-5'><img src={lombokO2} className='lombok-img object-cover lombok-img-top-100'/></div>
            <div className='lombok-letras-6'><img src={lombokK} className='lombok-img object-cover'/></div>
          </div>
          <p className='text-center lombok-text-box py-10 mx-auto text-zinc-600 font-light'>Lombok é um paraíso para os turistas, com paisagens deslumbrantes e belezas naturais. Essa região abriga a terceira montanha mais alta da Indonésia. Além de uma variedade de atividades desde aventuras e lazer, como caminhadas, camping, natação, surf, mergulho e snorkeling.</p>
        </section>

        <Slider/>

        <section className='bg-white'>
          <h1 className='planos-title-1 color-primary font-black'>Planos de viagem</h1>
          <div className='container flex justify-between pb-10 planos-box'>
            <div className='planos-text'>
              <h2 className='planos-title-2 color-primary'>Conheça nossas opções de viagens</h2>
              <p className='text-zinc-600'>Entre em contato para planejarmos sua nova aventura</p>
            </div>
            <div className='relative'>
              <img src='https://northabroad.com/wp-content/uploads/secret-gili-islands-lombok-DJI_0175-cover.jpg' className='planos-img'/>
              <div className='planos-desc absolute'>
                <p>Tour <br/> Completo</p>
                <button className='rounded-full bg-white color-primary btn-planos'>Descubra</button>
              </div>
            </div>
            <div className='relative'>
              <img src='https://openseauserdata.com/files/e1b6d4a0fee6e78614aa2fe0cc4972bc.jpg' className='planos-img'/>
              <div className='planos-desc absolute'>
                <p>Tour <br/> Privado</p>
                <button className='rounded-full bg-white color-primary btn-planos'>Descubra</button>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

export default Home;