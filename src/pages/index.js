import React from 'react'
import { css, injectGlobal } from 'emotion'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Layout from '../components/Layout'

import { Container } from '../components/markupHelpers'
import Hero from '../components/Hero'
import Package from '../components/Package'

import Auth from '../utils/auth'

import colorValues from '../lib/colorValues'

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
    user: {
      email: 'test@egghead.io'
    },
    authenticated: true
  }

  componentDidMount() {
    this.setState({
      user: auth.getUser(),
      authenticated: auth.isAuthenticated()
    })
  }

  render() {
    const packages = this.props.data.allBundle.edges

    return (
      <UserContext.Provider value={this.state}>
        <Layout darkHeader>
          <Hero />
          <main
            className={css({
              width: '100%',
              background: '#ffffff',
              padding: '4rem 0'
            })}
          >
            <Container>main copy here</Container>
          </main>
          <section
            className={css({
              width: '100%',
              background: '#fafafa',
              padding: '6rem 0'
            })}
          >
            <Container maxWidth={768}>
              <UserContext.Consumer>
                {({ user }) => {
                  return (
                    <div
                      className={css({
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      })}
                    >
                      <h3
                        className={css({
                          fontSize: '56px',
                          fontWeight: 400,
                          lineHeight: 1.25,
                          color: colorValues['gray-darken-20'],
                          fontFamily: 'TT Commons W01 DemiBold'
                        })}
                      >
                        Start testing like a pro
                      </h3>
                      <h6
                        className={css({
                          fontFamily: 'TT Commons W01 Regular',
                          fontSize: '22px',
                          fontWeight: 400,
                          lineHeight: 1.25,
                          color: '#41425B',
                          opacity: 0.8,
                          marginTop: '10px'
                        })}
                      >
                        Buy once. Forever yours.
                      </h6>
                      <div
                        className={css({
                          marginTop: '100px',
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%'
                        })}
                      >
                        {packages.map((edge, index) => {
                          const pkg = edge.node
                          return (
                            <div
                              key={`package-${index}`}
                              className={css({
                                width: '50%',
                                flexShrink: 0,
                                ':nth-child(odd)': {
                                  paddingRight: '20px'
                                },
                                ':nth-child(even)': {
                                  paddingLeft: '20px'
                                }
                              })}
                            >
                              <Package
                                name={pkg.title}
                                amount={9900}
                                description={pkg.description}
                                features={pkg.courses.map(course => course.title)}
                                email={get(user, 'email')}
                                url={pkg.purchaseURL}
                                sellableType={pkg.sellableType}
                                sellableID={pkg.sellableID}
                                onSuccess={() => alert('successful purchase')}
                                onError={() => alert('something bad happened')}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }}
              </UserContext.Consumer>
            </Container>
          </section>
        </Layout>
      </UserContext.Provider>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    allBundle {
      edges {
        node {
          title
          description
          courses {
            title
          }
          sellableType
          sellableID
          purchaseURL
        }
      }
    }
  }
`
export default IndexPage
