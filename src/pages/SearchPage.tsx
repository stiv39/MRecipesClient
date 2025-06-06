import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'
import useArticles from '../hooks/useArticles'
import useCategories from '../hooks/useCategories'
import { FormatDate } from '../utils/utils'
import { DebounceInput } from '../components/debounceInput'
import { useEffect, useState } from 'react'

export const SearchPage: React.FC = () => {
  const navigate = useNavigate()
  const query = useArticleStore((s) => s.articleQuery)

  const { data: articles, isLoading } = useArticles(query!)
  const { data: categories } = useCategories()
  const searchTerm = useArticleStore((s) => s.articleQuery.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)
  const tags = useArticleStore((s) => s.articleQuery.tags)
  const setTags = useArticleStore((s) => s.setTags)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const handleArticleSelection = (id: string) => {
    navigate(`/articles/${id}`)
  }

  const handleCategoryChange = (e: SelectChangeEvent) => setSelectedCategory(e.target.value)

  useEffect(() => {
    setTags([selectedCategory])
  }, [selectedCategory])

  return (
    <Grid container component={'div'}>
      <Grid item xs={4}>
        <Stack direction={'column'} spacing={'20px'} padding={'20px'}>
          <Typography variant="h6">{'Filtre'}</Typography>
          <DebounceInput value={searchTerm!} handleChange={setSearchTerm} />
          <FormControl>
            <InputLabel focused={false} shrink={true}>
              {'Kategórie'}
            </InputLabel>
            <Select
              displayEmpty
              variant="standard"
              label={'Kategórie'}
              value={selectedCategory}
              fullWidth={false}
              onChange={handleCategoryChange}
            >
              {
                <MenuItem value={''}>
                  <em> </em>
                </MenuItem>
              }
              {categories?.map((x) => <MenuItem value={x.name}>{x.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Stack>
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
