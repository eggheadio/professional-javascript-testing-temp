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
          <main
            className={css({
              width: '100%',
              background: '#ffffff',
              padding: '4rem 0'
            })}
          >
            <Container>123</Container>
            <section
              className={css({
                width: '100%',
                background: '#ffffff',
                padding: '4rem 0'
              })}
            >
              <Container maxWidth={768}>
                <div
                  className={css({
                    width: '100%'
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    })}
                  >
                    <h3
                      className={css({
                        fontSize: '34px',
                        fontWeight: 500,
                        lineHeight: 1.25,
                        color: 'black'
                      })}
                    >
                      Start testing like a pro
                    </h3>
                    <h6
                      className={css({
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: 1.25,
                        color: 'rgba(0, 0, 0, 0.6)',
                        marginTop: '10px'
                      })}
                    >
                      Buy once. Forever yours.
                    </h6>
                    <div
                      className={css({
                        marginTop: '4rem',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%'
                      })}
                    >
                      <div
                        className={css({
                          width: '50%',
                          flexShrink: 0,
                          paddingRight: '20px'
                        })}
                      >
                        <div
                          className={css({
                            border: '1px solid #e4e4e4'
                          })}
                        >
                          <div
                            className={css({
                              padding: '60px 20px',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              borderBottom: '1px solid #e4e4e4'
                            })}
                          >
                            <h4
                              className={css({
                                fontSize: '20px',
                                lineHeight: 1.25,
                                fontWeight: 400,
                                color: 'black'
                              })}
                            >
                              Plan 1
                            </h4>
                            <div
                              className={css({
                                marginTop: '24px',
                                display: 'inline-block',
                                fontSize: '22px',
                                lineHeight: 1,
                                color: 'black',
                                'span': {
                                  verticalAlign: 'middle',
                                }
                              })}
                            >
                              <span
                                className={css({
                                  fontSize: '16px',
                                  color: 'rgba(0, 0, 0, 0.5)',
                                  textTransform: 'uppercase'
                                })}
                              >
                                us
                              </span>
                              <span
                                className={css({
                                  margin: '0 4px'
                                })}
                              >
                                $
                              </span>
                              <span
                                className={css({
                                  fontSize: '56px',
                                  fontWeight: 300
                                })}
                              >
                                149
                              </span>
                              <span
                                className={css({
                                  marginLeft: '4px',
                                  fontWeight: 300
                                })}
                              >
                                .00
                              </span>
                            </div>
                            <div className={css({
                              fontSize: '16px',
                              color: 'rgba(0, 0, 0, 0.6)',
                              marginTop: '16px',
                            })}>
                              Lorem ipsum dolor sit amet.
                            </div>
                          </div>
                          <div
                            className={css({
                              padding: '60px 20px',
                              display: 'flex',
                              justifyContent: 'center'
                            })}
                          >
                            <ul className={css({
                              listStyle: 'none',
                            })}>
                              <li className={css({
                                ':before': {
                                  content: '"\\2714"',
                                },
                              })}>

                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className={css({
                          width: '50%',
                          flexShrink: 0,
                          paddingLeft: '20px'
                        })}
                      >
                        <div
                          className={css({
                            border: '1px solid #e4e4e4'
                          })}
                        >
                          123
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </main>
        </Layout>
      </UserContext.Provider>
    )
  }
}

export default IndexPage
