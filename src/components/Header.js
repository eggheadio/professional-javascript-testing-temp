import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

import Auth from '../utils/auth'
import { UserContext } from '../context/userContext'
import { Container } from './markupHelpers'

const auth = new Auth()

const Header = ({ siteTitle }) => (
  <UserContext.Consumer>
    {({ authenticated }) => {
      return (
        <nav
            className={css({
              background: '#f8f8f8',
              width: '100%',
              padding: '2rem 0'
            })}
          >
            <Container>
              <div
                className={css({
                  width: '100%',
                  display: 'flex'
                })}
              >
                <Link
                  to="/"
                  className={css({
                    textDecoration: 'none'
                  })}
                >
                  Professional Javascript Testing
                  <br />
                  <i>with Kent C. Dodds</i>
                </Link>
                <div
                  className={css({
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'flex-end'
                  })}
                >
                  {authenticated ? (
                    <button
                      onClick={() => {
                        auth.logout()
                        window.location.reload()
                      }}
                    >
                      log out
                    </button>
                  ) : (
                    <button onClick={auth.login}>log in with egghead</button>
                  )}
                </div>
              </div>
            </Container>
          </nav>
      )
    }}
  </UserContext.Consumer>
)

export default Header
