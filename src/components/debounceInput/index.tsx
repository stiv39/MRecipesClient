import { Search, Close } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface DebounceInputProps {
  value: string
  handleChange: (val: string) => void
  delay?: number
}

export const DebounceInput: React.FC<DebounceInputProps> = ({
  value = '',
  handleChange,
  delay = 1000,
}: DebounceInputProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleChange(debouncedValue)
    }, delay)

    return () => clearTimeout(timeout)
  }, [debouncedValue, delay, handleChange])

  return (
    <TextField
      fullWidth
      label="Search"
      variant="standard"
      InputLabelProps={{ shrink: true, focused: false }}
      InputProps={{
        startAdornment: <Search />,
        endAdornment: (
          <Close
            onClick={() => setDebouncedValue('')}
            sx={{ display: debouncedValue.length === 0 ? 'none' : 'auto' }}
          />
        ),
      }}
      placeholder=""
      value={debouncedValue}
      onChange={(e) => setDebouncedValue(e.target.value)}
    />
  )
}
