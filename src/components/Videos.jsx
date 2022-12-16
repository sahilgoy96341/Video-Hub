import { Heading, Stack, VStack ,Text, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const Video = () => {
  const videosArr=[
    "https://player.vimeo.com/video/524933864?h=1ac4fd9fb4",
    "https://player.vimeo.com/video/748635397?h=bb84a193e",
    "https://player.vimeo.com/video/781239872?h=f9bfd8301f",
    "https://player.vimeo.com/video/770741142?h=9091739ee2",
    "https://player.vimeo.com/video/770741142?h=9091739ee2"
  ];
  const [videoSrc,setvideoSrc]=useState(videosArr) 
  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video controls controlsList='nodownload'
            src='videoSrc'
            style={{width:'100%'}}>

            </video>
          <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
            <Heading>
              Sample Video 1
            </Heading>
            <Text>This is a Sample Video for testing and demo.This is called Description.</Text>
          </VStack>
        </VStack>
        <VStack w={['full','xl']} 
        alignItems={'stretch'} 
        p={'8'} 
        spacing={'8'} 
        overflow={'auto'}>
            {
              videosArr.map((item,index)=>
              <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setvideoSrc(item)}>Lecture{index + 1}</Button>
              )
            }
        </VStack>
      
    </Stack>
  )
}

export default Video
