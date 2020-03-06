import Login from './Login'
import { setIsLoading } from '../../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setIsLoading: item => dispatch(setIsLoading(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
