import { useNavigate, useParams } from 'react-router-dom'
import { Box, Breadcrumbs, Grid, Typography, Button, CircularProgress, Skeleton } from '@mui/material'
import useArticle from '../hooks/useArticle'
import { AddComment, CommentItem } from '../components'

export const ArticleDetailPage: React.FC = () => {
  const navigate = useNavigate()
  const { articleId } = useParams()

  const { data, isLoading } = useArticle(articleId!)

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
            <Typography variant="h3" textAlign={'left'}>
              {data?.title}
            </Typography>
          </Grid>

          <Grid container textAlign={'left'}>
            <Grid item xs={12} lg={5}>
              <img src={`/assets/${data?.image}.jpg`} alt="imagefood" style={{ maxHeight: '300px' }} />
            </Grid>

            <Grid item xs={12} lg={5}>
              <Typography>{data?.description}</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ marginTop: '30px' }}>
            <Typography sx={{ textAlign: 'left' }}>
              <b>SUROVINY</b>
            </Typography>
            <Box>
              <ul>
                {data?.ingredients.map((ingredient, index) => (
                  <li key={index + 100} style={{ textAlign: 'left' }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Typography textAlign={'left'}>
              <b>POSTUP</b>
            </Typography>
            {data?.steps
              ? data.steps.map((step, i) => (
                  <Box key={i + 200}>
                    <Typography textAlign={'left'} marginTop={5}>
                      <b>{`${i + 1}.`}</b> {step}
                    </Typography>
                  </Box>
                ))
              : null}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <Typography typography={'h6'} textAlign={'left'}>
              Komentáre
            </Typography>
            {data?.articleComments.map((comment, index) => (
              <CommentItem key={index + 300} text={comment.description} name={comment.name} date={comment.dateAdded} />
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
