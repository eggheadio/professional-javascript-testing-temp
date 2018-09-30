import OAuthClient from 'client-oauth2'

import axios from 'axios'

const http = axios.create()

const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const AUTH_CLIENT_ID = process.env.CLIENT_ID
const AUTH_REDIRECT_URL = process.env.REDIRECT_URI

export default class Auth {
  eggheadAuth = new OAuthClient({
    clientId: AUTH_CLIENT_ID,
    authorizationUri: `${AUTH_DOMAIN}/oauth/authorize`,
    accessTokenUri: `${AUTH_DOMAIN}/oauth/token`,
    redirectUri: AUTH_REDIRECT_URL
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    window.open(this.eggheadAuth.token.getUri())
  }

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user')
  }

  handleAuthentication(location) {
    if (typeof window !== 'undefined') {
      this.eggheadAuth.token.getToken(location).then(user => {
        this.setSession(user).then(() => {
          // window.onunload = () => {
          //   window.opener.location.reload()
          // }
          // window.close()
          window.opener.location.reload()
        })
      })
    }
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.data.expires_in * 1000 + new Date().getTime()
    )

    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('expires_at', expiresAt)

    return http
      .get(`${AUTH_DOMAIN}/api/v1/users/current`, {
        headers: {
          Authorization: `Bearer ${authResult.accessToken}`
        }
      })
      .then(({ data }) => {
        localStorage.setItem('user', JSON.stringify(data))
      })
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'))
    }
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name
    }
  }
}
