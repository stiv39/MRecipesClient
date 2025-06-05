import { Box, Grid, Stack, Typography, Divider } from '@mui/material'

export const Footer = () => {
  return (
    <Grid container marginTop={'50px'}>
      <Grid item xs={12}>
        <Divider orientation="horizontal" component={'div'} sx={{ width: '100%', height: '2px' }} />
      </Grid>
      <Grid item xs={6} marginTop={'20px'}>
        <Stack direction={'column'}>
          <Typography>MRecipes</Typography>
          <Typography>Text text text</Typography>
          <Typography sx={{ marginTop: '20px' }}>MRecipes</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={'20px'}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Stack direction={'column'}>
            <Typography>MRecipes</Typography>
            <Typography>Text text text</Typography>
            <Typography sx={{ marginTop: '20px' }}>MRecipes</Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}
