import React from 'react'
import useArticleStore from '../store/store'
import { Grid, Typography, Box, Paper, Divider, Button } from '@mui/material'
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

   const handleCategorySelection = () => {
    navigate(`/}`)
  }

  const searchTerm = useArticleStore((s) => s.articleQuery.searchTerm)
  const setSearchTerm = useArticleStore((s) => s.setSearchTerm)

  return (
    <Grid container justifyContent="center" textAlign={'center'}>
      <Grid item xs={12}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{ backgroundImage: `url(/assets/pozadie5.jpg)`, backgroundSize: 'cover', borderRadius: '10px' }}
            height={'300px'}
          >
            <Typography sx={{paddingTop: '20px', color: 'white', fontWeight: 'bold' }} variant="body1">Ahoj, ja som NIKA a toto sú moje recepty.</Typography>
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

      <Grid
        container
        justifyContent={'center'}
        spacing={'20px'}
        marginTop={'20px'}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'row'}
      >
        <Grid item xs={12}>
          <Typography textAlign={'left'} variant="h4">
            Kategórie
          </Typography>
        </Grid>

        {categories
          ?.filter((x) => x.hasImage)
          .slice(0, 4)
          ?.map((category, i) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={i}>
              <Box sx={{position: 'relative', cursor: 'pointer'}} onClick={handleCategorySelection} > 
                <Box sx={{ backgroundImage: `url(/assets/categories/${category.tagId}.jpg)`, backgroundSize: 'cover', borderRadius: '10px', width: '200', height: '200px' }}>
                  <Paper sx={{background: 'white', top: '80%', left: '5%', position:'absolute', padding: '5px'}}>
                   <Typography variant="body1">{category.name}</Typography>
                  </Paper>            
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>

      <Grid sx={{marginTop: '50px'}} item xs={12}>
        <Divider orientation="horizontal" component={'div'} sx={{ width: '100%', height: '2px' }} />
        <Typography sx={{marginTop: '30px'}}  textAlign={'left'} variant="h4">
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
        {articles.length === 0 && <Typography marginTop={20}>Ups! Žiadne recepty sa nenašli.</Typography>}
      </Grid>

      <Grid sx={{marginTop: '50px'}} item xs={12}>
        <Divider orientation="horizontal" component={'div'} sx={{ width: '100%', height: '2px' }} />
        <Paper sx={{height: '50px', display: 'flex', justifyContent: 'end', marginTop: '30px'}}>
          <Button variant='contained' onClick={handleCategorySelection} color='secondary'>
            <Typography>Všetky moje recepty nájdeš tu</Typography> 
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}
         
