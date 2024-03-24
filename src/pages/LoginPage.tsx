import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useArticleStore from '../store/store'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const loginUser = useArticleStore((s) => s.setUser)

  const handleLogin = () => {
    if (login === 'admin' && password === 'pw') {
      navigate('/admin')
      loginUser(login)
      setErr('')
    } else {
      setErr('wrong credentials')
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} textAlign={'center'} style={{ marginTop: 20 }}>
        Admin
      </Grid>
      {err && err.length > 0 && (
        <Grid item xs={12} textAlign={'center'} style={{ marginTop: 20, color: 'red' }}>
          {err}
        </Grid>
      )}
      <Grid item xs={12} textAlign={'center'} style={{ marginTop: 20 }}>
        <TextField placeholder="login" value={login} onChange={(e) => setLogin(e.target.value)} />
      </Grid>
      <Grid item xs={12} textAlign={'center'} style={{ marginTop: 20 }}>
        <TextField placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Grid>
      <Grid item xs={12} textAlign={'center'} style={{ marginTop: 20 }}>
        <Button onClick={handleLogin} variant="outlined" disabled={login === '' || password === ''}>
          Login
        </Button>
      </Grid>
    </Grid>
  )
}
