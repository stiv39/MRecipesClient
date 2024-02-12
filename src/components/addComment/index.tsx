import React, { useState } from 'react'
import { AddCommentProps } from './types'
import { Button, Grid, TextField, Typography } from '@mui/material'
import useAddArticleComment from '../../hooks/useAddArticleComment'

export const AddComment: React.FC<AddCommentProps> = ({ id, articleId }) => {
  const [commentName, setCommentName] = useState<string>('')
  const [commentText, setCommentText] = useState<string>('')

  const { mutate } = useAddArticleComment(articleId!, commentText, commentName)

  const handleSubmit = () => {
    mutate({ articleId: articleId, description: commentText, name: commentName })
    setCommentName('')
    setCommentText('')
  }

  return (
    <Grid container key={id}>
      <Grid item xs={12}>
        <Typography textAlign={'left'}> Add comment</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          placeholder="name"
          fullWidth={true}
          value={commentName}
          onChange={(e) => setCommentName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ marginTop: 5 }}
          multiline={true}
          minRows={5}
          fullWidth={true}
          placeholder="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => handleSubmit()} disabled={commentName == '' || commentText == ''}>
          Pridaj komentár
        </Button>
      </Grid>
    </Grid>
  )
}
