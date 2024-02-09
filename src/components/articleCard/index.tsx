import React from 'react'
import { ArticleCardProps } from './types'
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article: { author, title, description, category, body, dateAdded, id },
  imgUrl,
  handleClickAction,
}: ArticleCardProps) => {
  return (
    <Card
      style={{
        maxWidth: 350,
        margin: 10,
        minHeight: 300,
        border: '5px solid transparent',
        borderRadius: '20px',
        background: 'white',
      }}
    >
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={category}
        // subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="dish"
        onClick={() => handleClickAction(id)}
        sx={{ cursor: 'pointer' }}
      />
      <CardContent sx={{ borderTop: '2px solid transparent' }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => handleClickAction(id)}>
          <b>{title}</b>
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton style={{ float: 'right' }}>load more</IconButton>
        </Box>
      </CardActions> */}
    </Card>
  )
}
