import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ConfirmModalProps } from './types'

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, articleName, handleOpen, onSubmit }) => {
  const handleClose = () => {
    handleOpen(false)
  }

  const handleSubmit = () => {
    handleOpen(false)
    onSubmit()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure you want to delete?</DialogTitle>
      <DialogContent>
        <DialogContentText>{articleName}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>NO</Button>
        <Button onClick={handleSubmit}>YES</Button>
      </DialogActions>
    </Dialog>
  )
}
