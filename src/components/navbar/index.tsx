import { AppBar, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavigationBar: React.FC = () => {
  const navigate = useNavigate()

  const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
};

  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Container component={'nav'} sx={{display: 'flex'}}>
        <Stack direction="row" spacing={'30px'} sx={{ display: 'flex' }}>
          <Button onClick={() => navigate('/main')}>
            <Typography sx={{fontWeight: 'bold'}} color={'black'}>MRecipes</Typography>
          </Button>
          <Link style={linkStyle} to={'/'}>
            <Typography sx={{fontWeight: 'bold'}}> Recepty</Typography>
          </Link>
          <Link style={linkStyle}  to={'/contact'}>
            <Typography sx={{fontWeight: 'bold'}}>Kontakt</Typography>
          </Link>
        </Stack>
      </Container>          
    </AppBar>
  )
}
