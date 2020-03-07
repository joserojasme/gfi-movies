import React from 'react'
import Alert from '@material-ui/lab/Alert'

function Alerts(props) {
  function validateTypeAlert(data) {
    const { code, message, open } = data.dataAlert
    if (open)
      return <Alert variant='outlined' severity={code}>{message}</Alert>
    return <div />
  }

  return (
    <div>
      {validateTypeAlert({ ...props })}
    </div>
  )
}

export default Alerts
