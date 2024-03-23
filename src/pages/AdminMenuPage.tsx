import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AdminMenuPage: React.FC = () => {
  const navigate = useNavigate()

  const goToNewArticle = () => navigate('/admin/new')
  const goToArticles = () => navigate('/admin/articles')

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography textAlign={'center'} variant="h2">
          Admin menu
        </Typography>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Button variant="contained" onClick={goToNewArticle}>
          Pridaj novy clanok
        </Button>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Button variant="contained" onClick={goToArticles}>
          Uprav existujuci clanok
        </Button>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Button variant="contained">Pridaj kategoriu</Button>
      </Grid>
    </Grid>
  )
}
