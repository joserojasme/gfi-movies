/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/destructuring-assignment: 0 */

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

function DialogDetail(props) {
  const {movieDetail, open, onClick} = props
  return (
    <div>
      <Dialog onClose={()=>onClick()} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogTitle id="customized-dialog-title" onClose={()=>onClick()}>
          {movieDetail.Title}
        </MuiDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{movieDetail.Plot}</Typography>
          <Typography gutterBottom>{`Fecha de Lanzamiento: ${movieDetail.Released}`}</Typography>
          <Typography gutterBottom>{`Duración: ${movieDetail.Runtime}`}</Typography>
          <Typography gutterBottom>{`Género ${movieDetail.Genre}`}</Typography>
          <Typography gutterBottom>{`Director ${movieDetail.Director}`}</Typography>
          <Typography gutterBottom>{`Escritor ${movieDetail.Writer}`}</Typography>
          <Typography gutterBottom>{`Reparto ${movieDetail.Actors}`}</Typography>
          <Typography gutterBottom>{`Idioma ${movieDetail.Language}`}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>onClick()} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogDetail
