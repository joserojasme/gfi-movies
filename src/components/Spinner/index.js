import SpinnerModal from './SpinnerModal'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(SpinnerModal)
