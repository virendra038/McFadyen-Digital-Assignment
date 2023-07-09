import './ProductImage.css'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react';

export default function ProductImage({color, isMobileView}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = color === 'green' ? ["1","2","3","4","5",] : 
    ['1-pink','2-pink','3-pink','4-pink','5-pink'];
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

    if(isMobileView){
        return (
            <div className="carousel">
                <img className="carousel-image" src={`/product/${images[currentIndex]}.jpg`} alt="Carousel" />
                <div className='carousel-button-group'>
                    <button className="carousel-button" onClick={prevSlide}>
                        ←
                    </button>
                    <button className="carousel-button" onClick={nextSlide}>
                        →
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <>  
                    <Flex className='images_container' flexDirection={{ base: 'row', md: 'column' }} >
                        {images.map((img)=>{
                            return <img src={`/product/${img}.jpg`} alt={img} key={img}/>
                        })}
                    </Flex>
            </>
        )
    }
}