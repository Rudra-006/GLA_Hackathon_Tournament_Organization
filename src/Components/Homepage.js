import { Button, Stack, Typography } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {

  return (
    <div style={{justifyContent: 'center', margin: 'auto', marginTop: '10px'}}>
      <Typography variant='h4'>Welcome to tournaments organization and management platform!</Typography>
      <Stack direction={'row'} justifyContent={'center'} spacing={2} mt={2}>
        <Button variant='contained'>
          <Link to={'/login'}>Login</Link><br/>
        </Button>
        <Button variant='contained'>
          <Link to={'/signup'}>Signup</Link>
        </Button>
      </Stack>
    </div>
  )
}

export default Homepage
