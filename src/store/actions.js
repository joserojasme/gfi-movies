import { SET_IS_LOADING,
  SET_MOVIES,
  SET_MOVIE_BY_ID } from './actionsTypes'
import { getMovies, getMovieById } from '../network/api'

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

const setMovies = movies => ({
  type: SET_MOVIES,
  movies
})

const setMovie = movieDetail => ({
  type: SET_MOVIE_BY_ID,
  movieDetail
})

// thunks
export const fetchMovies = dispatch => async (title, page) => {
  let movies
  try {
    dispatch(setIsLoading(true))
    movies = await getMovies(title, page)
    dispatch(setMovies(movies.Search))
    dispatch(setIsLoading(false))
  } catch{
    dispatch(setIsLoading(false))
  }
}

export const fetchMoviesDetail = dispatch => async imdbID => {
  let movie
  try {
    dispatch(setIsLoading(true))
    movie = await getMovieById(imdbID)
    dispatch(setMovie(movie))
    dispatch(setIsLoading(false))
  } catch{
    dispatch(setIsLoading(false))
  }
}
