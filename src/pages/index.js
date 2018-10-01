import React from 'react'
import { css, injectGlobal } from 'emotion'

import Layout from '../components/Layout'

import { Container } from '../components/markupHelpers'
import Hero from '../components/Hero'

import Auth from '../utils/auth'

import { UserContext } from '../context/userContext'

const auth = new Auth()

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Roboto Light",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`

class IndexPage extends React.Component {
  state = {
    user: {},
    authenticated: false
  }

  componentDidMount() {
    this.setState({
      user: auth.getUser(),
      authenticated: auth.isAuthenticated()
    })
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Layout>
          <Hero />
          <section
            className={css({
              width: '100%',
              background: '#ffffff',
              padding: '4rem 0'
            })}
          >
            <Container>123</Container>
          </section>
        </Layout>
      </UserContext.Provider>
    )
  }
}

export default IndexPage
