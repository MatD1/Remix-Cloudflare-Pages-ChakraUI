import { Box, Button, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { Logo } from '../Nav/navbarComponents/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { Link } from '@remix-run/react'

export const Footer = () => (
  <Box 
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" overflowX="auto" overflowY={'hidden'}>
        <Logo />
        <Link to="MajorUpdate">
        <Button>Report a bug / Issue</Button>
        </Link>
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
  </Box>
)
