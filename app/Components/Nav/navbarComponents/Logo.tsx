import { chakra, Text, Icon, Button, Heading } from '@chakra-ui/react'
import * as React from 'react'
import {Link} from '@remix-run/react'

export const Logo = () => {
  return (
    <Link to="/">
      <Button ><Heading mt="2" fontSize={'4xl'}>PLACEHOLDER</Heading></Button>
    </Link>
  )
}
