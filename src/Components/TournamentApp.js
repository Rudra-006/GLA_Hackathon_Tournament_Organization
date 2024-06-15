import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TournamentApp = () => {
  return (
    <Stack direction={'row'} spacing={5} justifyContent={'center'} alignItems={'center'}>
        <Link to={'/create'}>Create Tournament</Link>
        <Link to={'/join'}>Join Tournament</Link>
    </Stack>
  )
}

export default TournamentApp
