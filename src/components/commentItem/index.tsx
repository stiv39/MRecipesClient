import React from 'react'
import { CommentProps } from './types'
import { Stack, Typography, Grid, Divider } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const CommentItem: React.FC<CommentProps> = ({ text, name, date }) => {
  return (
    <Grid container marginTop={2}>
      <Grid item xs={12} display={'flex'} justifyContent={'left'}>
        <FaceIcon sx={{ fontSize: 50, paddingRight: 2 }} />
        <Stack>
          <Typography textAlign={'left'} fontWeight={'bold'}>
            {name}
          </Typography>
          <Typography typography={'caption'} textAlign={'left'}>
            {date.toLocaleDateString('sk')}
          </Typography>
          <Typography textAlign={'left'}>{text}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={2}>
        <Divider />
      </Grid>
    </Grid>
  )
}
