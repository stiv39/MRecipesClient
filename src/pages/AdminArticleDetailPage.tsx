import { Button, Grid, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAddNewArticle from '../hooks/useAddNewArticle'
import useArticle from '../hooks/useArticle'
import useUpdateArticle from '../hooks/useUpdateArticle'
import useArticleStore from '../store/store'

export const AdminArticleDetailPage: React.FC = () => {
  const navigate = useNavigate()

  const { articleId } = useParams()

  const user = useArticleStore((s) => s.user)

  useEffect(() => {
    if (!user || user.length === 0) {
      navigate('admin/login')
    }
  }, [user])

  const { data, isLoading } = useArticle(articleId!)

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [steps, setSteps] = useState<string[]>([''])
  const [tags, setTags] = useState<string>('')
  const [ingredients, setIngredients] = useState<string>('')

  const { mutate } = useAddNewArticle({
    title: title,
    description: description,
    steps: steps,
    ingredients: ingredients,
    tags: tags,
  })

  const { mutate: update } = useUpdateArticle()

  useEffect(() => {
    if (data) {
      setTitle(data.title)
      setDescription(data.description)
      setTags(data.tags.join(','))
      setIngredients(data.ingredients.join(','))
      setSteps(data.steps)
    }
  }, [data])

  const handleSubmit = () => {
    mutate({ title: title, description: description, steps: steps, ingredients: ingredients, tags: tags })
  }

  const handleEdit = () => {
    update({
      title: title,
      description: description,
      steps: steps,
      ingredients: ingredients,
      tags: tags,
      id: data?.id,
    })
  }

  const goBack = () => navigate('/admin')

  return (
    <Grid container>
      <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
        <Typography>Pridaj novy recept</Typography>
        <Button onClick={goBack}>Back</Button>
      </Grid>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
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
            <Typography>{'Postup'}</Typography>
            {steps.map((step, i) => (
              <div key={i + 100} style={{ display: 'flex', marginTop: 15 }}>
                <TextField
                  placeholder=""
                  multiline
                  minRows={5}
                  fullWidth
                  value={step}
                  onChange={(event) => {
                    const newSteps = [...steps]
                    newSteps[i] = event.target.value
                    setSteps(newSteps)
                  }}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setSteps([...steps.filter((_, index) => index !== i)])}
                >
                  Delete
                </Button>
              </div>
            ))}
            <Button onClick={() => setSteps([...steps, ''])}>Add step</Button>
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
            {articleId && articleId.length > 0 ? (
              <Button
                onClick={handleEdit}
                disabled={
                  title.length === 0 ||
                  description.length === 0 ||
                  steps.length === 0 ||
                  tags.length === 0 ||
                  ingredients.length === 0
                }
              >
                Edit
              </Button>
            ) : (
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
            )}
          </Grid>
        </>
      )}
    </Grid>
  )
}
