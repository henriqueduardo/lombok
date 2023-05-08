import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import slide1 from "../../img/slide-1.jpg";
import slide2 from "../../img/slide-2.jpg";
import slide3 from "../../img/slide-3.jpg";
import slide4 from "../../img/slide-4.jpg";
import "./style.css"; 

function Slider() {
    return (
      <Splide options={ { rewind: true } } aria-label="Carousel" className='pb-10'>
        <SplideSlide className=''>
          <img src={slide1} alt="slide 1" className='carousel-img'/>
        </SplideSlide>
        <SplideSlide>
          <img src={slide2} alt="slide 2"className='carousel-img'/>
        </SplideSlide>
        <SplideSlide>
          <img src={slide3} alt="slide 3"className='carousel-img'/>
        </SplideSlide>
        <SplideSlide>
          <img src={slide4} alt="slide 4"className='carousel-img'/>
        </SplideSlide>
      </Splide>
    );
}

export default Slider;