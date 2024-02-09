import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material'

export const EmailForm = () => {
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [subject, setSubject] = useState<string>('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleSubjectChange = (event) => {
    setSubject(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Send email logic goes here
    const mailtoLink = `mailto:${`jozo@jozo.com`}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      message
    )}`

    window.location.href = mailtoLink
    // Reset form fields
    setName('')
    setSubject('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '500px' }}>
      <TextField label="Meno" value={name} onChange={handleNameChange} required fullWidth margin="normal" />
      <TextField label="Predmet" value={subject} onChange={handleSubjectChange} required fullWidth margin="normal" />
      <TextField
        label="Správa"
        value={message}
        onChange={handleMessageChange}
        required
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Box sx={{ textAlign: 'center' }}>
        <Button type="submit" variant="contained" color="primary">
          <Typography>ODOSLAŤ</Typography>
        </Button>
      </Box>
    </form>
  )
}
