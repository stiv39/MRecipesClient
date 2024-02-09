import React, { useState } from 'react'
import { AddCommentProps } from './types'
import { Button, Grid, TextField, Typography } from '@mui/material'

export const AddComment: React.FC<AddCommentProps> = ({ id, OnAddComment }) => {
  const [commentName, setCommentName] = useState<string>('')
  const [commentText, setCommentText] = useState<string>('')

  const HandleSubmit = () => {
    OnAddComment(commentName, commentText)
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
        <Button onClick={() => HandleSubmit()} disabled={commentName == '' || commentText == ''}>
          Pridaj komentár
        </Button>
      </Grid>
    </Grid>
  )
}
