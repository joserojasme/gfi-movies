import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'
import { fetchMovies, fetchMoviesDetail, fetchSuggestMovies } from '../../store/actions'
import { withAuthenticator } from 'aws-amplify-react'
import Login from '../Login'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setMovies: fetchMovies(dispatch),
  setMovie: fetchMoviesDetail(dispatch),
  setSuggestMovies: fetchSuggestMovies(dispatch)
})

export default withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(Home),false, [<Login />])
