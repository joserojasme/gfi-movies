import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import Amplify from 'aws-amplify'
import config from './config/constants'

// Se configura Amplify para login con grupo de usuarios cognitoAWS
Amplify.configure({
  Auth: {
    identityPoolId: config.identityPoolId,
    region: config.region,
    userPoolWebClientId: config.userPoolWebClientId,
    userPoolId: config.userPoolId,
    mandatorySignIn: false,
    storage: window.sessionStorage
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))
