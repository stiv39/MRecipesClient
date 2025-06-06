import { Button, Grid, TextField, Typography, Input, Box, Checkbox, Stack } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAddNewArticle from '../hooks/useAddNewArticle'
import useArticle from '../hooks/useArticle'
import useUpdateArticle from '../hooks/useUpdateArticle'
import useCategories from '../hooks/useCategories'

export const AdminArticleDetailPage: React.FC = () => {
  const navigate = useNavigate()

  const { articleId } = useParams()

  const token = localStorage.getItem('mrecipestoken')

  useEffect(() => {
    if (!token || token.length === 0) {
      navigate('/admin/login')
    }
  }, [token])

  const { data, isLoading } = useArticle(articleId!)
  const { data: categories } = useCategories()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [steps, setSteps] = useState<string[]>([''])
  const [tags, setTags] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { mutate: create } = useAddNewArticle({
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
      setTags(data.tags)
      setIngredients(data.ingredients.join(','))
      setSteps(data.steps)
    }
  }, [data])

  useEffect(() => {
    console.log('file path: ', setSelectedFile)
  }, [setSelectedFile])

  const handleSubmit = () => {
    let formData
    formData = new FormData()

    formData.append(
      'dto',
      JSON.stringify({
        title: title,
        description: description,
        steps: steps,
        ingredients: ingredients,
        tags: tags,
      })
    )

    if (selectedFile != null) {
      formData.append('image', selectedFile)
    }

    create({
      article: {
        title: title,
        description: description,
        steps: steps,
        ingredients: ingredients,
        tags: tags,
        image: formData,
      },
      token,
    })
  }

  const handleEdit = () => {
    let formData
    formData = new FormData()
    formData.append(
      'dto',
      JSON.stringify({
        id: data?.id,
        title: title,
        description: description,
        steps: steps,
        ingredients: ingredients,
        tags: tags,
      })
    )

    if (selectedFile != null) {
      formData.append('image', selectedFile)
    }

    update({
      article: {
        title: title,
        description: description,
        steps: steps,
        ingredients: ingredients,
        tags: tags,
        id: data?.id,
        image: formData,
      },
      token,
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])
    }
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
            <Typography>{'Tags'}</Typography>
            <Stack direction={'row'} spacing={'20px'}>
              {categories?.map((x) => (
                <Box component={'div'}>
                  <Typography variant="subtitle1">{x.name}</Typography>
                  <Checkbox checked={tags.includes(x.name)} value={x.name} onChange={(e) => setTags([...tags, e.target.value])}/>
                </Box>
              ))}
            </Stack>
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
            <Input type="file" onChange={handleFileChange} />
            <p>{selectedFile?.name}</p>
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
