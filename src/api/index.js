import axios from 'axios'
import config from '../config/constants'

const request = axios.create({ baseURL: config.baseURL })

export const getMovies = async (title = 'car', page=1) =>{
  try{
    const { data } = await request(`/?apikey=${config.apiKey}&s=${title}&page=${page}`)
    return data
  }catch(error){
    return error.response
  }
}
