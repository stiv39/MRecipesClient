import { Grid, Stack, Typography, Divider, Icon } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <Grid container marginTop={'50px'}>
      <Grid item xs={12}>
        <Divider orientation="horizontal" component={'div'} sx={{ width: '100%', height: '2px' }} />
      </Grid>
      <Grid item xs={12} marginTop={'20px'}>
        <Stack spacing={'10px'} sx={{textAlign: 'center'}} direction={'column'}>
          <Typography variant='subtitle2'>{'© MRecipes.sk'}</Typography>
         
          <Typography variant='subtitle2'>{'Sleduj ma'}</Typography>
          <Stack justifyContent={'center'} spacing={'10px'} direction={'row'}>
            <FacebookIcon  />
            <InstagramIcon  />
            <YouTubeIcon  />
          </Stack>

          <Typography variant='subtitle2' sx={{ marginTop: '20px' }}>{'Kontaktuj ma: info@mrecipes.sk'}</Typography>
          <Typography variant='subtitle2'>{'Akékoľvek šírenie obsahu stránky alebo jej častí v akejkoľvek forme je zakázané a autorsky chránené.'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
