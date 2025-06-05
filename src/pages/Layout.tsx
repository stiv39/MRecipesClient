import { Box } from '@mui/material'
import { Footer, NavigationBar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={5} sx={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Outlet />
      <Footer />
      </Box>
    </>
  )
}

export default Layout
