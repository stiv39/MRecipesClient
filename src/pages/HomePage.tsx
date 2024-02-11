import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArticleCard } from '../components'
import useArticles from '../hooks/useArticles'
import useCategories from '../hooks/useCategories'
import useArticleStore from '../store/store'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const query = useArticleStore((s) => s.articleQuery)
  const tags = useArticleStore((s) => s.articleQuery.tags)
  const setTags = useArticleStore((s) => s.setTags)
  const { data: articles, isLoading } = useArticles(query!)
  const { data: categories } = useCategories()

  const handleArticleSelection = (id: string) => {
    navigate(`/articles/${id}`)
  }

  const handleSetTag = (tag: string) => {
    if (tags.includes(tag)) {
      var tags2 = tags.filter((t) => t !== tag)
      setTags(tags2)
    } else {
      setTags([...tags, tag])
    }
  }

  return (
    <>
      <Grid container justifyContent="center" textAlign={'center'}>
        <Grid item xs={12}>
          <img src="/assets/header2.png" alt="header" height={'300px'} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Typography variant="body1">Ahoj, ja som NIKA a tu su moje recepty.</Typography>
        </Grid>
      </Grid>
      <div>
        <Grid container justifyContent={'center'} textAlign={'center'} display={'flex'} flexDirection={'row'}>
          {categories?.map((category, i) => (
            <Grid item xs={6} md={2} lg={1} key={i + 10}>
              <Button
                style={{
                  padding: '0px 10px',
                  border: tags.includes(category?.name) ? '1px solid red' : 'none',
                }}
                onClick={() => handleSetTag(category.name)}
              >
                <Typography sx={{ color: 'black' }}>
                  <b>{category.name}</b>
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <>
        {isLoading ? (
          <Grid item xs={12} textAlign={'center'} marginTop={10}>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {articles?.map((article) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={article.id + article.title}>
                <ArticleCard
                  key={article.id}
                  article={article}
                  imgUrl={`/assets/${article.image}.jpg`}
                  handleClickAction={handleArticleSelection}
                />
              </Grid>
            ))}
            {articles.length === 0 && <Typography marginTop={20}>No articles found</Typography>}
          </Grid>
        )}
      </>
    </>
  )
}
