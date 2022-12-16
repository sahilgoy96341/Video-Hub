import { Box, Container, Heading, Stack ,Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img1} from "../assets/image1.jpeg"
import {img2} from "../assets/image2.heic"
import {img3} from "../assets/image3.jpg"
import {img4} from "../assets/image4.avif"
import {img5} from "../assets/image5.png"
const headingOption ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4"
}
const Home = () => {
  return (
   <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
            <Stack h={'full'} p={"4"} alignItems={'center'} direction={['column' , 'row']}>
                <img src='img5' h={['40','400']} filter={'hue rotate(-130deg)'}/>
                <Text letterSpacing={"widest"} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint commodi sunt nemo tenetur? Natus aliquid error aut ullam debitis quisquam nihil labore quidem ab! Possimus maiores saepe cumque debitis nisi itaque dolorem labore. Nihil velit numquam quas reiciendis autem, itaque rem aperiam accusamus a ab placeat repellendus dolorem aliquid. Quis.
                </Text>
            </Stack>
        </Container>
   </Box>
  )
 
}
const MyCarousel = () =>(
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
                <Box w={'full'} h={'100vh'}>
                    <img src= {'img1'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Watch the Future</Heading>
                </Box>
                <Box w={'full'} h={'100vh'}>
                    <img src= {'img2'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Future is This</Heading>
                </Box>
                <Box w={'full'} h={'100vh'}>
                    <img src= {'img3'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Future is Here</Heading>
                </Box>
                <Box w={'full'} h={'100vh'}>
                    <img src= {'img4'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>Development is Future</Heading>
                </Box>
        </Carousel> 
    )

export default Home
