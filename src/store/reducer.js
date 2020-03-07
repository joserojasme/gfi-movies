import {
  SET_IS_LOADING,
  SET_MOVIES,
  SET_MOVIE_BY_ID,
  SET_DATA_ALERT,
  SET_SUGGEST_MOVIES,
  SET_FAVORITES_MOVIES
} from './actionsTypes'

const initialState = {
  isLoading: false,
  suggestMovies: [],
  movies: [],
  movieDetail: {},
  dataAlert: {},
  favoritesMovies: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading
    }
  case SET_SUGGEST_MOVIES:
    return {
      ...state,
      suggestMovies: [...state.suggestMovies, ...action.suggestMovies]
    }
  case SET_MOVIES:
    return {
      ...state,
      movies: action.movies
    }
  case SET_MOVIE_BY_ID:
    return {
      ...state,
      movieDetail: action.movieDetail
    }
  case SET_DATA_ALERT:
    return {
      ...state,
      dataAlert: action.dataAlert
    }
  case SET_FAVORITES_MOVIES:
    return {
      ...state,
      favoritesMovies: action.favoritesMovies
    }
  default:
    return state
  }
}

export default reducer
