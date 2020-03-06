import React from 'react'
import Alert from '@material-ui/lab/Alert'

export const ERROR = 'error'
export const WARNING = 'warning'
export const INFO = 'info'
export const ALERT_SUCCESS = 'success'

function Alerts(props) {
  function validateTypeAlert(data) {
    const { code, msn, open } = data
    if (open)
      return <Alert variant="outlined" severity={code}>{msn}</Alert>
    return <div />
  }

  return (
    <div>
      {validateTypeAlert({ ...props })}
    </div>
  )
}

export default Alerts
