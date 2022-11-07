import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" target="_blank" rel="noopener noreferrer" href="na" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" target="_blank" rel="noopener noreferrer" href="About Page" aria-label="About" icon={<FcAbout fontSize="20px" />} />
  </ButtonGroup>
)
