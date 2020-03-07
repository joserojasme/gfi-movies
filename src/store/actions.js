import {
  SET_IS_LOADING,
  SET_MOVIES,
  SET_MOVIE_BY_ID,
  SET_DATA_ALERT,
  SET_SUGGEST_MOVIES,
  SET_FAVORITES_MOVIES
} from './actionsTypes'
import { getMovies, getMovieById, getSuggestMovies } from '../network/api'

const nameStorageFavorites = 'favoritesMovies'

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

const setSuggestMovies = suggestMovies => ({
  type: SET_SUGGEST_MOVIES,
  suggestMovies
})

const setMovies = movies => ({
  type: SET_MOVIES,
  movies
})

const setMovie = movieDetail => ({
  type: SET_MOVIE_BY_ID,
  movieDetail
})

export const setDataAlert = dataAlert => ({
  type: SET_DATA_ALERT,
  dataAlert
})

const setFavoritesMovies = favoritesMovies => ({
  type: SET_FAVORITES_MOVIES,
  favoritesMovies
})

// thunks
export const fetchSuggestMovies = dispatch => async (page) => {
  let suggestMovies
  const arrayPages = [1, 2, 3, 4, 5]
  dispatch(setIsLoading(true))
  if (!page) {
    arrayPages.forEach(async element => {
      suggestMovies = await getSuggestMovies(element)
      dispatch(setSuggestMovies(suggestMovies.Search))
    })
  } else {
    suggestMovies = await getSuggestMovies(page)
    dispatch(setSuggestMovies(suggestMovies.Search))
  }
  dispatch(setIsLoading(false))

}

export const fetchMovies = dispatch => async (title) => {
  const movies = await getMovies(title)
  if (movies.Response === 'True') {
    dispatch(setMovies(movies.Search))
  } else {
    dispatch(setMovies([]))
  }
}

export const fetchMoviesDetail = dispatch => async imdbID => {
  dispatch(setIsLoading(true))
  const movie = await getMovieById(imdbID)
  dispatch(setMovie(movie))
  dispatch(setIsLoading(false))
}

export const fetchFavoritesMovies = dispatch => async () => {
  const favoritesMovies = await JSON.parse(localStorage.getItem(nameStorageFavorites))
  dispatch(setFavoritesMovies(favoritesMovies))
}
