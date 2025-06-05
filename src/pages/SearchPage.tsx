import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'
import useArticles from '../hooks/useArticles'
import useCategories from '../hooks/useCategories'

export const SearchPage: React.FC = () => {
  const navigate = useNavigate()
  const query = useArticleStore((s) => s.articleQuery)
  const tags = useArticleStore((s) => s.articleQuery.tags)
  const setTags = useArticleStore((s) => s.setTags)
  const { data: articles, isLoading } = useArticles(query!)
  const { data: categories } = useCategories()

  const handleArticleSelection = (id: string) => {
    navigate(`/articles/${id}`)
  }

  return (
    <Grid container component={'div'}>
      <Grid item xs={4}>
        {categories?.map((category) => <div>{category.name}</div>)}
      </Grid>
      <Grid item xs={8}>
        <Box component={'div'} >
          <Typography color={'GrayText'} variant="caption">{'vysledky vyhladavania'}</Typography>
        </Box>
        <Box component={'div'} sx={{marginTop: '20px'}}>
          <Typography variant="h4">{'Recepty'}</Typography>
        </Box>
        <Stack direction={'column'} spacing={'20px'}>
        {isLoading ? <CircularProgress /> : <></>}
        {articles?.map((article) => 
        <Card sx={{display: 'flex' }} onClick={() => handleArticleSelection(article.id)}>
            <CardMedia component={'img'} sx={{width: '200px'}} image={`data:image/jpeg;base64,${article.image}`} />
            <CardContent>
                <Box component={'div'}>
                 <Typography variant="subtitle2">{article.title}</Typography>
                 <Typography variant="subtitle2">{article.tags}</Typography>
                 <Typography variant="subtitle2">{article.author}</Typography>
                 <Typography variant="subtitle2">{article.dateAdded}</Typography>
                </Box>
            </CardContent>
        </Card>
        )}
        </Stack>
      </Grid>
    </Grid>
  )
}
