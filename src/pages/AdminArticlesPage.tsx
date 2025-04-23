import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'
import useArticles from '../hooks/useArticles'
import { ArticleCard } from '../components'
import useDeleteArticle from '../hooks/useDeleteArticle'
import { useEffect, useState } from 'react'
import { ConfirmModal } from '../components/confirmModal'
import { Article } from '../services/articleService/types'

export const AdminArticlesPage: React.FC = () => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [articleId, setArticleId] = useState<string>('')
  const [articleName, setArticleName] = useState<string>('')

  const token = useArticleStore((s) => s.token)

  useEffect(() => {
    if (!token || token.length === 0) {
      navigate('admin/login')
    }
  }, [token])

  const setArticle = (article: Article) => {
    setArticleId(article.id)
    setArticleName(article.title)
    setIsOpen(true)
  }

  const query = useArticleStore((s) => s.articleQuery)
  const { data: articles } = useArticles(query!)
  const { mutate } = useDeleteArticle()
  const goBack = () => navigate('/admin')
  const handleArticleSelect = (articleId: string) => navigate(`/admin/articles/${articleId}`)
  const handleDeleteArticle = () => mutate({ articleId, token })

  return (
    <Grid container>
      <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
        <Typography>Articles management</Typography>
        <Button onClick={goBack}>Back</Button>
      </Grid>
      <Grid item xs={12} display={'flex'}>
        <Grid container justifyContent={'center'} textAlign={'center'} display={'flex'} flexDirection={'row'}>
          {articles?.map((article) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={article.id + article.title}>
              <ArticleCard
                key={article.id}
                article={article}
                imgUrl={`data:image/jpeg;base64,${article.image}`}
                handleClickAction={() => handleArticleSelect(article.id)}
              />
              <Button variant="contained" color="error" onClick={() => setArticle(article)}>
                Delete
              </Button>
            </Grid>
          ))}
          <ConfirmModal
            isOpen={isOpen}
            articleName={articleName}
            onSubmit={handleDeleteArticle}
            handleOpen={(open) => setIsOpen(open)}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
