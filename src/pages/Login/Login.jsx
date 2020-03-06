/* eslint react/destructuring-assignment: 0 */
/* eslint no-debugger: 0 */
/* eslint semi: 0 */
import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import * as Amplify from '../../network/cognitoAWS'
import Alerts, { ERROR, ALERT_SUCCESS } from '../../components/Alerts'
import { useStyles } from './styles'
import LabelTitle from '../../components/LabelTitles'
import SpinnerModal from '../../components/Spinner'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'JOSEROJASME',
      password: 'jose1234',
      msn: '',
      code: ERROR,
      alertIsOpen: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ alertIsOpen: false }, () => {
      Amplify.signIn({ ...this.state }, this.props.setIsLoading).then(res => {
        this.validateResponse(res)
        this.setState({ password: '', username: '' })
      })
    })
  }

  validateResponse = (res) => {
    const codeDefault = ERROR
    switch (res.code) {
    case Amplify.errorNotAuthorizedException:
      this.setState({ msn: Amplify.notAuthorizedException, alertIsOpen: true, code: codeDefault })
      break
    case Amplify.errorUserNotFoundException:
      this.setState({ msn: Amplify.userNotFoundException, alertIsOpen: true, code: codeDefault })
      break
    case Amplify.SUCCESS:
      this.setState({ msn: res.data.msn, alertIsOpen: true, code: ALERT_SUCCESS })
      break
    case Amplify.GENERAL_ERROR:
      this.setState({ msn: res.data.msn, alertIsOpen: true, code: codeDefault })
      break
    default:
      window.location.replace('/home')
      break
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { classes } = this.props
    const { msn,
      alertIsOpen,
      username,
      password,
      code,
    } = this.state

    return (
      <div>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Alerts code={code} msn={msn} open={alertIsOpen} />
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <LabelTitle text='Iniciar sesión' />
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Nombre de usuario'
                name='user'
                autoFocus
                value={username}
                onChange={this.handleChange}
                autoComplete="off"
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Contraseña'
                type='password'
                id='password'
                value={password}
                onChange={this.handleChange}
                autoComplete="off"
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Iniciar Sesión
              </Button>
            </form>
          </div>
        </Container>
        <SpinnerModal />
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default (withStyles(useStyles)(Login))
