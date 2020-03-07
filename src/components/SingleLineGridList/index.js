import SingleLineGridList from './SingleLineGridList'
import { connect } from 'react-redux'
import {fetchMoviesDetail, fetchFavoritesMovies} from '../../store/actions'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setMovie: fetchMoviesDetail(dispatch),
  setFavoritesMovies: fetchFavoritesMovies(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleLineGridList)
