import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../../store/store'
import { DebounceInput } from '../debounceInput'

export const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const searchTerm = useArticleStore((s) => s.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar disableGutters>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
