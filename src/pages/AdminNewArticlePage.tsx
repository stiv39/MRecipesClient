import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AdminNewArticlePage: React.FC = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [guide, setGuide] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [ingredients, setIngredients] = useState<string>('')

  const handleSubmit = () => {
    const newArticle = {
      tags: tags.split(',').map((t) => t.trim()),
      ingredients: ingredients.split(',').map((i) => ({ id: '', value: i.trim() })),
      title: title,
      body: body,
      guide: guide.split('---').map((g) => g.trim()),
    }

    console.log(newArticle)
  }

  const goBack = () => navigate('/admin')

  return (
    <Grid container>
      <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
        <Typography>Pridaj novy recept</Typography>
        <Button onClick={goBack}>Back</Button>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Typography>Nazov</Typography>
        <TextField placeholder="" fullWidth value={title} onChange={(e) => setTitle(e?.target.value)} />
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Typography>Popis</Typography>
        <TextField
          placeholder=""
          multiline
          minRows={10}
          fullWidth
          value={body}
          onChange={(e) => setBody(e?.target.value)}
        />
      </Grid>

      <Grid item xs={12} marginTop={4}>
        <Typography>{'Postup  (oddelit tromi pomlckami ---)'}</Typography>
        <TextField
          placeholder=""
          multiline
          minRows={10}
          fullWidth
          value={guide}
          onChange={(e) => setGuide(e?.target.value)}
        />
      </Grid>

      <Grid item xs={12} marginTop={4}>
        <Typography>{'Tags (oddelit ciarkou)'}</Typography>
        <TextField placeholder="" fullWidth value={tags} onChange={(e) => setTags(e?.target.value)} />
      </Grid>

      <Grid item xs={12} marginTop={4}>
        <Typography>{'Ingrediencie (oddelit ciarkou)'}</Typography>
        <TextField
          placeholder=""
          fullWidth
          value={ingredients}
          onChange={(e) => setIngredients(e?.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <Button
          onClick={handleSubmit}
          disabled={
            title.length === 0 ||
            body.length === 0 ||
            guide.length === 0 ||
            tags.length === 0 ||
            ingredients.length === 0
          }
        >
          Pridaj clanok
        </Button>
      </Grid>
    </Grid>
  )
}
