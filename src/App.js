import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ProductList from './components/productList/ProductList';
import { VStack, Box } from '@chakra-ui/react';
import { useRef } from 'react';
function App() {
  const scrollableRef = useRef(null);

  const handleScroll = (event) => {
    // Propagate the scroll event to the scrollable element
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop += event.deltaY;
    }
  };
  return (
    <VStack alignItems={'flex-start'} height={'100vh'} onWheel={handleScroll}>
      <Box display={{ base: 'none', md: 'block' }}><Header/></Box>
      <Box><Main scrollableRef={scrollableRef}/></Box>
      {/* <ProductList/> */}
    </VStack>
  );
}

export default App;
