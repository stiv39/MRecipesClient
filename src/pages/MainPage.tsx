import React from 'react'
import useArticleStore from '../store/store'
import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material'
import useArticles from '../hooks/useArticles'
import useCategories from '../hooks/useCategories'
import { ArticleCard } from '../components'
import { useNavigate } from 'react-router-dom'
import { DebounceInput } from '../components/debounceInput'

export const MainPage: React.FC = () => {
  const query = useArticleStore((s) => s.articleQuery)
  const navigate = useNavigate()
  const { data: categories } = useCategories()
  const { data: articles } = useArticles(query!)

  const handleArticleSelection = (id: string) => {
    navigate(`/articles/${id}`)
  }

  const searchTerm = useArticleStore((s) => s.articleQuery.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)

  
  return (
    <Grid container justifyContent="center" textAlign={'center'}>
      <Grid item xs={12}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ backgroundImage: `url(/assets/pozadie5.jpg)`, backgroundSize: 'cover', borderRadius: '10px' }} height={'300px'}>
            <Box
              sx={{
                width: '500px',
                borderRadius: 5,
                padding: 3,
                background: 'white',
                display: 'flex',
                marginTop: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                zIndex: 1000,
                position: 'absolute',
                top: '60%',
                left: '30%',
              }}
            >
              <DebounceInput value={searchTerm!} handleChange={setSearchTerm} />
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* <Grid item xs={12}>
        <img src="/assets/pozadie3.jpg" alt="header" width={'1200px'} height={'300px'} style={{opacity: '0.2', zIndex: 0}}  />
      </Grid> */}
      {/* <Grid item xs={12} style={{ marginTop: '10px', marginBottom: '20px' }}>
        <Typography variant="body1">Ahoj, ja som NIKA a tu su moje recepty.</Typography>
      </Grid> */}

      {/* <Grid item xs={5} sx={{ marginTop: '-100px' }}>
        <Box sx={{ background: 'red', backgroundColor: 'white', height: '80px', borderRadius: 10 }}>
          <TextField
            sx={{ marginTop: '10px', paddingLeft: '20px', paddingRight: '20px', zIndex: 1000 }}
            fullWidth
            label="Search"
            variant="standard"
            InputProps={{ sx: { border: 'none' } }}
            InputLabelProps={{ shrink: true, focused: true }}
          />
        </Box>
      </Grid> */}

      <Grid
        container
        justifyContent={'center'}
        spacing={'20px'}
        marginTop={'20px'}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'row'}
      >
        {categories?.slice(0, 3)?.map((category, i) => (
          <Grid item xs={4} key={i}>
            <Card key={category.name}>
              <CardMedia component={'img'} height={'200'} image="/assets/012.jpg" />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <Typography textAlign={'left'} variant="body1">
          Najnovšie
        </Typography>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        {articles?.slice(0, 4).map((article) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={article.id + article.title}>
            <ArticleCard
              key={article.id}
              article={article}
              imgUrl={`data:image/jpeg;base64,${article.image}`}
              handleClickAction={handleArticleSelection}
            />
          </Grid>
        ))}
        {articles.length === 0 && <Typography marginTop={20}>No articles found</Typography>}
      </Grid>
    </Grid>
  )
}
