import axios from 'axios'
import config from '../../config/constants'

const request = axios.create({ baseURL: config.baseURL })

export const getMovies = async (title, page) =>{
  try{
    const { data } = await request(`/?apikey=${config.apiKey}&s=${title}&page=${page}`)
    return data
  }catch(error){
    return error.response
  }
}

export const getMovieById = async imdbID =>{
  try{
    const { data } = await request(`/?apikey=${config.apiKey}&i=${imdbID}&plot=${config.plot}`)
    return data
  }catch(error){
    return error.response
  }
}
