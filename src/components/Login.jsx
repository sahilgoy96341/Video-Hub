import { Button, Container, Heading, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={'96'} m={'auto'} my={'16'}>
        <Heading>Welcome Back</Heading>
        <input placeholder='Email' type={'email'} required focusColorBorder={'purple.500'}/>
        <input placeholder='Password' type={'password'} required focusColorBorder={'purple.500'}/>
       <Button variant={'link'} alignSelf={'flex-end'}>
        <Link to={'/forgetpassword'}>Forget Password?</Link>
       </Button>
       <Button colorScheme={'purple'} type={'submit'}>
        Log In
       </Button>
       <Text textAlign={'right'}>New User? {" "}
       <Button variant={'link'} colorScheme={'purple'}>
        <Link to={'/singnup'}>Sign Up</Link>
       </Button>
       </Text>
     
        </VStack>
    </form>
   </Container>
  )
}

export default Login
