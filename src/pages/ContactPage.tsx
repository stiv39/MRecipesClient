import { Grid, Typography } from '@mui/material'
import { EmailForm } from '../components'

export const ContactPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">KONTAKTUJE MA</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">
          Kontaktujte ma na emailovu adresu: muroslava@gmail.com alebo cez kontaktný formulár nižšie
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent={'center'} sx={{ display: 'flex' }}>
        <EmailForm />
      </Grid>
    </Grid>
  )
}
