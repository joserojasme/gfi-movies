import {
  SET_IS_LOADING,
  SET_MOVIES
} from './actionsTypes'

const initialState = {
  isLoading: false,
  movies: []
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
  default:
    return state
  }
}

export default reducer
