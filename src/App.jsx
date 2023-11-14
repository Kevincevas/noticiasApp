import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Formulario } from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider'
import { ListadoNoticias } from './components/ListadoNoticias'
import { useNoticias } from './hooks/useNoticias'
import { BuscandoNoticia } from './components/BuscandoNoticia'



function App() {

  const { totalNoticias } = useNoticias()
  
  return (
    <Container>

      <header>
        <Typography align='center' marginY={5} component='h1' variant='h3'>
          Buscador de Noticias
        </Typography>
      </header>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} md={6}>
          <Formulario />
        </Grid>
      </Grid>

      { totalNoticias === 0 ? <BuscandoNoticia /> : <ListadoNoticias /> }
      

    </Container>
  )
}

export default App
