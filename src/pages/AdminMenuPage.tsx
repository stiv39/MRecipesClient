import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'
import { useEffect } from 'react'

export const AdminMenuPage: React.FC = () => {
  const navigate = useNavigate()

  const token = useArticleStore((s) => s.token)

  useEffect(() => {
    if (!token || token.length === 0) {
      navigate('/admin/login')
    }
  }, [token])

  const goToNewArticle = () => navigate('/admin/new')
  const goToArticles = () => navigate('/admin/articles')

  return !token || token.length === 0 ? (
    <div>no access</div>
  ) : (
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
    </Grid>
  )
}
