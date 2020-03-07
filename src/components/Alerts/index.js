import Alerts from './Alerts'
import { connect } from 'react-redux'

export const ERROR = 'error'
export const WARNING = 'warning'
export const INFO = 'info'
export const ALERT_SUCCESS = 'success'

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Alerts)
