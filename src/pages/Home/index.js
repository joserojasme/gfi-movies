import Home from './Home'
import { connect } from 'react-redux'
import { fetchMovies } from '../../store/actions'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setMovies: fetchMovies(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
