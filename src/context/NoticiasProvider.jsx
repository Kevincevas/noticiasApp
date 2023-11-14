import axios from 'axios'
import React, {useState, useEffect, createContext} from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)
    const [buscando, setBuscando] = useState(false)
    
    useEffect(() => {
        const consultarAPI = async() => {
            setBuscando(true)

            const key = import.meta.env.VITE_API_KEY

            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${key}`

            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
            setBuscando(false)

        }

        consultarAPI()

    }, [categoria])

    useEffect(() => {
        const consultarAPI = async() => {
            setBuscando(true)
            const key = import.meta.env.VITE_API_KEY


            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${key}`

            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setBuscando(false)

        }

        consultarAPI()
    }, [pagina])
    

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }


    return(
        <NoticiasContext.Provider 
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina,
                buscando,
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider}

export default NoticiasContext