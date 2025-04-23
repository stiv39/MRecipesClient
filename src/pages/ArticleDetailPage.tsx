import { useNavigate, useParams } from 'react-router-dom'
import { Box, Breadcrumbs, Grid, Typography, Button, CircularProgress, Skeleton } from '@mui/material'
import useArticle from '../hooks/useArticle'
import { AddComment, CommentItem } from '../components'
import useArticleStore from '../store/store'
import useDeleteArticleComment from '../hooks/useDeleteArticleComment'

export const ArticleDetailPage: React.FC = () => {
  const navigate = useNavigate()
  const { articleId } = useParams()

  const { data, isLoading } = useArticle(articleId!)
  const token = useArticleStore((s) => s.token)
  const { mutate } = useDeleteArticleComment(articleId!)

  return (
    <Grid container sx={{ textAlign: 'center' }}>
      {isLoading ? (
        <Grid item xs={12}>
          <Skeleton variant="rounded" height={40} />
          <Skeleton variant="rectangular" height={60} />
          <Skeleton variant="rounded" height={60} />
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Button variant="text" color="inherit" onClick={() => navigate('/')}>
                Recepty
              </Button>
              <Typography color="text.primary">{data?.title}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">{data?.title}</Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={`data:image/jpeg;base64,${data.image}`} alt="imagefood" style={{ margin: 'auto' }} />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Typography>
              <b>SUROVINY</b>
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <span>{data?.ingredients.map((ingredient, index) => <li key={index + 100}>{ingredient}</li>)}</span>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Typography>
              <b>POSTUP</b>
            </Typography>
            {data?.steps
              ? data.steps.map((step, i) => (
                  <Box key={i + step}>
                    <Typography marginTop={5}>
                      <b style={{ marginRight: '2px' }}>{`${i + 1}.`}</b>
                      <span>{step}</span>
                    </Typography>
                  </Box>
                ))
              : null}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <Typography typography={'h6'} textAlign={'left'}>
              Komentáre
            </Typography>
            {data?.articleComments.map((comment) => (
              <Box key={comment.id} sx={{ display: 'flex' }}>
                <CommentItem key={comment.id} text={comment.description} name={comment.name} date={comment.dateAdded} />
                {token && token !== '' && (
                  <Button onClick={() => mutate(comment.id)} color="error">
                    Delete
                  </Button>
                )}
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <AddComment id={'article-detail'} articleId={articleId!} />
          </Grid>
        </>
      )}
    </Grid>
  )
}
