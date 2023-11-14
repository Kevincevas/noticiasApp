import React from 'react'

import {Grid, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useNoticias } from '../hooks/useNoticias'
import { Noticia } from './Noticia'



export const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20) //Math.ceil: redondea hacia el numero superior (2.1 hacia 3)
    // console.log(totalPaginas)
    
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </Grid>

        <Stack
            sx={{my: 5}}
            spacing={2}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Pagination 
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina} 
                page={pagina}
            />
        </Stack>


    </>
  )
}
