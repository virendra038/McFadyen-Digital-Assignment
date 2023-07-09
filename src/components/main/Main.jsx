import './Main.css';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

export default function Main({scrollableRef}){

    const [color, setColor] = useState('green');
    const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth < 768)
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial mobile view state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(isMobileView){
    return (
        <Flex flexDirection={'column'}>
            <ProductImage color={color} isMobileView={isMobileView}/>
            <Cart color={color} setColor={setColor} isMobileView={isMobileView}/>
            {/* <ProductInfo/> */}
        </Flex>
    )
  } else {
    return (
        <div className="grid-container">
            <div className="grid-item sticky"><ProductInfo/></div>
            <div className="grid-item scrollable" ref={scrollableRef}><ProductImage color={color}/></div>
            <div className="grid-item sticky"><Cart color={color} setColor={setColor}/></div>
        </div>
    )
  }
}