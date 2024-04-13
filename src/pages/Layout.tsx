import { Box } from '@mui/material'
import { NavigationBar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={5} sx={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
