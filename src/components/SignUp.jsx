import { Button, Container, Heading, VStack,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={'96'} m={'auto'} my={'16'}>
        <Heading>Video Hub</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}  />
        <input placeholder='Name' type={'name'} required focusColorBorder={'purple.500'}/>
        <input placeholder='Email' type={'email'} required focusColorBorder={'purple.500'}/>
        <input placeholder='Password' type={'password'} required focusColorBorder={'purple.500'}/>
      
       <Button colorScheme={'purple'} type={'submit'}>
        Sign Up
       </Button>
       <Text textAlign={'right'}>Already Sign Up? {" "}
       <Button variant={'link'} colorScheme={'purple'}>
        <Link to={'/login'}>Log In</Link>
       </Button>
       </Text>
     
        </VStack>
    </form>
   </Container>
  )
}

export default SignUp
