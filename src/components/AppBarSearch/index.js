import AppBarSearch from './AppBarSearch'
import { fetchMovies } from '../../store/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setMovie: fetchMovies(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarSearch)
