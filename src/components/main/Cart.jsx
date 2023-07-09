import { Radio, RadioGroup, Stack, HStack, VStack, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import './Cart.css';
export default function Cart({color, setColor, isMobileView}){
    const [size, setSize] = useState('L')
    const handleColorSelection = (color)=>{
        setColor(color);
    }
    return (
        <>
        <VStack alignItems={'flex-start'} padding={'5px'}>
            <Box fontSize={isMobileView ? '2em' : '1em'}>Jonathan SIMKHAI</Box >
            <Box fontSize={isMobileView ? '1em' : '0.5em'}>Lurex Linen Viscose Jacket in Conchiglia</Box>
            <b>Color</b>
            <HStack className='color_images'>
                <img src="/product/thumbnail-1.jpg" alt="thumbnail-1" 
                    className={color === 'green' ? 'active' : ''}
                    onClick={(e)=>{handleColorSelection('green')}}/>
                <img src="/product/thumbnail-2.jpg" alt="thumbnail-2" 
                    className={color === 'red' ? 'active' : ''}
                    onClick={(e)=>{handleColorSelection('red')}}/>
            </HStack>
            <b>Size {size}</b>
            <RadioGroup onChange={setSize} value={size}>
                <Stack direction='row'>
                    <Radio value='XS'>XS</Radio>
                    <Radio value='S'>S</Radio>
                    <Radio value='M'>M</Radio>
                    <Radio value='L'>L</Radio>
                    <Radio value='XXL'>XXL</Radio>
                </Stack>
            </RadioGroup>
            <Button colorScheme='blackAlpha' width={'100%'}>ADD TO BAG </Button>
            <p>Get 4 interest free payment of $196.25 with Kiama</p>
        </VStack>
        </>
    )
}