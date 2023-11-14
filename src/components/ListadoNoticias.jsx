import React from 'react'

import {Grid, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useNoticias } from '../hooks/useNoticias'
import { Noticia } from './Noticia'



export const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina, buscando } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20) //Math.ceil: redondea hacia el numero superior (2.1 hacia 3)
    // console.log(totalPaginas)

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now() .toString(36)
    
        return random + fecha
    }
    
  return (
    <>
        {buscando 
        ? 
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Buscando Noticias
            </Typography>
        :
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Últimas Noticias
            </Typography>
        }

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia key={generarId()} noticia={noticia} />
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
