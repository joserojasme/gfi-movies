import {
  SET_IS_LOADING,
  SET_MOVIES,
  SET_MOVIE_BY_ID,
  SET_DATA_ALERT
} from './actionsTypes'

const initialState = {
  isLoading: false,
  movies: [],
  movieDetail: {},
  dataAlert: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading
    }
  case SET_MOVIES:
    return {
      ...state,
      movies: [...state.movies, ...action.movies]
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
  default:
    return state
  }
}

export default reducer
