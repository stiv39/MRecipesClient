import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useArticleStore from '../../store/store'
import { DebounceInput } from '../debounceInput'

export const NavigationBar: React.FC = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  const searchTerm = useArticleStore((s) => s.articleQuery.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

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
             
        {/* <Toolbar disableGutters>
          <Box style={{ display: 'flex', justifyContent: 'center' }}></Box>

          <Box style={{ marginRight: '20px' }}>
            <IconButton edge="end" style={{ color: 'black' }} aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => navigate('/')}>RECEPTY</MenuItem>
              <MenuItem onClick={() => navigate('/contact')}>KONTAKT</MenuItem>
            </Menu>
          </Box>
          <DebounceInput value={searchTerm!} handleChange={setSearchTerm} />
        </Toolbar> */}
      </Container>          
    </AppBar>
  )
}
