import { Button } from '@chakra-ui/react'
import React from 'react'

const LogoutButton = () => {
  return (
    <React.Fragment>
        <form action="/logout" method="post">
            <Button type='submit'>Logout</Button>
        </form>
    </React.Fragment>
  )
}

export default LogoutButton