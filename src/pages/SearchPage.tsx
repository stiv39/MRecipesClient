import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'
import useArticles from '../hooks/useArticles'
import useCategories from '../hooks/useCategories'
import { FormatDate } from '../utils/utils'
import { DebounceInput } from '../components/debounceInput'

export const SearchPage: React.FC = () => {
  const navigate = useNavigate()
  const query = useArticleStore((s) => s.articleQuery)
  // const tags = useArticleStore((s) => s.articleQuery.tags)
  // const setTags = useArticleStore((s) => s.setTags)
  const { data: articles, isLoading } = useArticles(query!)
  const { data: categories } = useCategories()
  const searchTerm = useArticleStore((s) => s.articleQuery.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)

  const handleArticleSelection = (id: string) => {
    navigate(`/articles/${id}`)
  }

  return (
    <Grid container component={'div'}>
      <Grid item xs={4}>
        <DebounceInput value={searchTerm!} handleChange={setSearchTerm} />
        {categories?.map((category) => <div>{category.name}</div>)}
      </Grid>
      <Grid item xs={8}>
        <Box component={'div'}>
          <Typography color={'GrayText'} variant="caption">
            {'vysledky vyhladavania'}
          </Typography>
        </Box>
        <Box component={'div'} sx={{ marginTop: '20px' }}>
          <Typography variant="h4">{'Recepty'}</Typography>
        </Box>
        <Stack direction={'column'} spacing={'20px'}>
          {isLoading ? <CircularProgress /> : <></>}
          {articles?.map((article) => (
            <Card sx={{ display: 'flex', cursor: 'pointer' }} onClick={() => handleArticleSelection(article.id)}>
              <CardMedia component={'img'} sx={{ width: '200px' }} image={`data:image/jpeg;base64,${article.image}`} />
              <CardContent>
                <Box component={'div'}>
                  <Typography variant="subtitle2">{article.title}</Typography>
                  <Stack direction={'row'} spacing={'10px'}>
                    {article.tags.map((tag, index) => (
                      <Paper sx={{ backgroundColor: 'orange', padding: '5px' }} key={index}>
                        <Typography variant="caption" fontWeight={'bold'}>
                          {tag}
                        </Typography>
                      </Paper>
                    ))}
                  </Stack>
                  <Typography variant="subtitle2">{article.author}</Typography>
                  <Typography variant="subtitle2">{FormatDate(article.dateAdded)}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}
