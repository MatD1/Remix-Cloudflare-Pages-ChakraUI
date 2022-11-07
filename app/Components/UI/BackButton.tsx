import { Button } from '@chakra-ui/react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const BackButton = () => {
  return (
    <React.Fragment>
        <Button m={1} colorScheme={'teal'} rightIcon={<BiArrowBack />} onClick={() => window.history.back()}>Back</Button>
    </React.Fragment>
  )
}

export default BackButton