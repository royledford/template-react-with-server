import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

export default function Login({ login }) {
  return (
    <Grid
      container
      spacing={2}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh' }}
    >
      <Paper elevation={3} sx={{ padding: '2rem' }}>
        <Grid item xs={1} sx={{ width: '100%' }}>
          <Stack direction='column' spacing={2}>
            <Typography variant='h3' align='center'>
              Login
            </Typography>
            <TextField id='email' label='Email' variant='outlined' />
            <TextField id='password' label='Password' variant='outlined' />
            <Button variant='contained' color='primary' onClick={login}>
              Login
            </Button>
          </Stack>
        </Grid>
      </Paper>
    </Grid>
  )
}
