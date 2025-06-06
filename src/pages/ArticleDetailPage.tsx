import { useParams } from 'react-router-dom'
import useArticle from '../hooks/useArticle'
import { Box, CircularProgress, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { AddComment, CommentItem } from '../components'

export const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams()
  const { data, isLoading } = useArticle(articleId!)

  const shouldShowGridImg = data?.steps && data.steps.length > 2;

  return (
    <Grid container component={'div'}>
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
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  height: '300px',
                  backgroundImage: `url(/assets/pozadie2.jpg)`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                }}
              >
                <Paper sx={{ position: 'absolute', background: 'white', padding: '20px', top: '50%', left: '5%' }}>
                  <Stack direction={'column'} spacing={'20px'}>
                    <Typography variant="subtitle2">{data?.title}</Typography>
                    <Stack direction={'row'} spacing={'10px'}>
                      {data?.tags.map((t) => (
                        <Paper sx={{ backgroundColor: 'orange', padding: '5px' }}>
                          <Typography variant="caption" fontWeight={'bold'}>
                            {t}
                          </Typography>
                        </Paper>
                      ))}
                    </Stack>
                  </Stack>
                </Paper>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '50px' }}>
            <Paper sx={{ padding: '10px' }}>
              <Typography variant="caption">{data?.description}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} hidden={!shouldShowGridImg}>
                <img                 
                  style={{ maxWidth: '400px', borderRadius: '10px', maxHeight: '300px' }}
                  src={`data:image/jpeg;base64,${data?.image}`}
                />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-end' }}>
            <Paper sx={{ padding: 5 }}>
              <Typography sx={{ marginBottom: '20px' }} variant="h4">
                {'Ingrediencie'}
              </Typography>
              {data?.ingredients.map((ingredient, index) => (
                <Typography key={index * 60} variant="subtitle2">
                  {ingredient}
                </Typography>
              ))}
            </Paper>
          </Grid>

          <Paper sx={{ marginTop: '50px' }}>
            <Grid item xs={12} sx={{ padding: '10px' }}>
              <Typography sx={{ marginBottom: '20px' }} variant="h4">
                {'Postup'}
              </Typography>

              <Box component={'div'} sx={{ display: 'flex' }}>
                <Box>
                  {data?.steps.map((step, index) => (
                    <Box component={'div'} sx={{ marginTop: '20px', padding: '10px' }} key={step.length}>
                      <Typography variant="h5">{`KROK ${index + 1}`}</Typography>
                      <Typography variant="caption">{step}</Typography>
                    </Box>
                  ))}
                </Box>
                <img
                  hidden={shouldShowGridImg}
                  style={{ maxWidth: '400px', borderRadius: '10px', maxHeight: '300px' }}
                  src={`data:image/jpeg;base64,${data?.image}`}
                />
              </Box>
            </Grid>
          </Paper>
          <Grid item xs={12} sx={{ marginTop: '50px' }}>
            <Paper sx={{ padding: 5 }}>
              <Typography sx={{ marginBottom: '20px' }} variant="h4">
                {'Komentáre'}
              </Typography>
              {data?.articleComments.map((comment) => (
                <CommentItem key={comment.id} text={comment.description} name={comment.name} date={comment.dateAdded} />
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} marginTop={10}>
            <AddComment id={'article-detail'} articleId={articleId!} />
          </Grid>
        </>
      )}
    </Grid>
  )
}
