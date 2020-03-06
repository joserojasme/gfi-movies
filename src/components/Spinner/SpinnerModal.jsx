/* eslint react/destructuring-assignment: 0 */
import Dialog from '@material-ui/core/Dialog'
import React from 'react'
import './styles.css'

function SpinnerModal(props){
  return (
    <div>
      <Dialog
        open={props.isLoading}
        aria-labelledby='responsive-dialog-title'
      >
        <div className="loading">Cargando</div>
      </Dialog>
    </div>
  )
}

export default SpinnerModal

