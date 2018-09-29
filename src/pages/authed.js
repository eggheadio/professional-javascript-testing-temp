import React from 'react'

import Auth from '../utils/auth'

const auth = new Auth()

export default class Authed extends React.Component {
  componentDidMount() {
    auth.handleAuthentication(window.location)
  }

  render() {
    return null
  }
}
