import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAddNewArticle from '../hooks/useAddNewArticle'

export const AdminNewArticlePage: React.FC = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [steps, setSteps] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [ingredients, setIngredients] = useState<string>('')

  const { mutate } = useAddNewArticle({
    title: title,
    description: description,
    steps: steps,
    ingredients: ingredients,
    tags: tags,
  })

  const handleSubmit = () => {
    const newArticle = {
      tags: tags.split(',').map((t) => t.trim()),
      ingredients: ingredients.split(',').map((i) => ({ id: '', value: i.trim() })),
      title: title,
      descritpion: description,
      steps: steps.split('---').map((g) => g.trim()),
    }
    mutate({ title: title, description: description, steps: steps, ingredients: ingredients, tags: tags })
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
          value={description}
          onChange={(e) => setDescription(e?.target.value)}
        />
      </Grid>

      <Grid item xs={12} marginTop={4}>
        <Typography>{'Postup  (oddelit tromi pomlckami ---)'}</Typography>
        <TextField
          placeholder=""
          multiline
          minRows={10}
          fullWidth
          value={steps}
          onChange={(e) => setSteps(e?.target.value)}
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
            description.length === 0 ||
            steps.length === 0 ||
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
