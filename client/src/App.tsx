import { TextField } from '@mui/material'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <form action="">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </form>
      <AppRouter />
    </div>
  )
}

export default App
