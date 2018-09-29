import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import Auth from '../utils/auth'
import { UserContext } from '../context/userContext'

const auth = new Auth()

const Header = ({ siteTitle }) => (
  <UserContext.Consumer>
    {({ authenticated }) => {
      return (
        <div
          className={css({
            background: '#f8f8f8'
          })}
        >
          <section
            className={css({
              width: '100%',
              padding: '1rem 0'
            })}
          >
            <div
              className={css({
                margin: '0 auto',
                maxWidth: 960,
                padding: '0 1rem'
              })}
            >
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
            </div>
          </section>
        </div>
      )
    }}
  </UserContext.Consumer>
)

export default Header
