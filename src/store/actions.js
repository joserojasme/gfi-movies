import { SET_IS_LOADING, SET_MOVIES } from './actionsTypes'
import {getMovies} from '../api'

const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

const setMovies = movies => ({
  type: SET_MOVIES,
  movies
})

// thunks
export const fetchMovies = dispatch => async (params) => {
  let movies
  try {
    dispatch(setIsLoading(true))

    movies = await getMovies()

    dispatch(setMovies(movies.Search))
    dispatch(setIsLoading(false))
  } catch{
    dispatch(setIsLoading(false))
  }
}
