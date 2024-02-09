import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Box, Breadcrumbs, Grid, Typography, Button, CircularProgress, Skeleton } from '@mui/material'
import useArticle from '../hooks/useArticle'
import { CommentProps } from '../components/commentItem/types'
import { AddComment, CommentItem } from '../components'

export const ArticleDetailPage: React.FC = () => {
  const navigate = useNavigate()
  const { articleId } = useParams()

  const { data, isLoading } = useArticle(articleId!)

  var dummyComments: CommentProps[] = [
    { name: 'Jozka', text: 'najlepsie co kedy moj kocur chaloval', date: new Date() },
    { name: 'Peterka', text: 'jak to robis ze je to take fajne', date: new Date() },
    { name: 'Fuzonozka', text: 'bomby pecky vlasy', date: new Date() },
    {
      name: 'Jolanka',
      text: 'mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with',
      date: new Date(),
    },
  ]

  const [articleComments, setArticleComments] = useState<CommentProps[]>(dummyComments)

  const HandleAddComment = (commentName: string, commentText: string) => {
    setArticleComments([...articleComments, { name: commentName, text: commentText, date: new Date() }])
  }

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

          <Grid container xs={12} textAlign={'left'}>
            <Grid item xs={12} lg={5}>
              <img src={`/assets/${data?.id}.jpg`} alt="imagefood" style={{ maxHeight: '300px' }} />
            </Grid>

            <Grid item xs={12} lg={5}>
              <Typography>{data?.body}</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ marginTop: '30px' }}>
            <Typography sx={{ textAlign: 'left' }}>
              <b>SUROVINY</b>
            </Typography>
            <Box>
              <ul>
                {data?.ingredients.map((ingredient) => (
                  <li key={ingredient.id} style={{ textAlign: 'left' }}>
                    {ingredient.value}
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '30px' }}>
            <Typography textAlign={'left'}>
              <b>POSTUP</b>
            </Typography>
            {data?.guide && data?.guide.length > 0
              ? data.guide.map((guide, i) => (
                  <Box key={i + 400}>
                    <Typography textAlign={'left'} marginTop={5}>
                      <b>{`${i + 1}.`}</b> {guide}
                    </Typography>
                  </Box>
                ))
              : null}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <Typography typography={'h6'} textAlign={'left'}>
              Komentáre
            </Typography>
            {articleComments.map((comment, index) => (
              <CommentItem key={index + 500} text={comment.text} name={comment.name} date={comment.date} />
            ))}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <AddComment id={'article-detail'} OnAddComment={HandleAddComment} />
          </Grid>
        </>
      )}
    </Grid>
  )
}
