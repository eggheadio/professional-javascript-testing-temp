import React from 'react'
import { css, injectGlobal } from 'emotion'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Layout from '../components/Layout'

import { Container } from '../components/markupHelpers'
import Hero from '../components/Hero'
import Package from '../components/Package'

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
    user: {
      email: "test@egghead.io"
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
        <Layout>
          <Hero />
          <main
            className={css({
              width: '100%',
              background: '#ffffff',
              padding: '4rem 0'
            })}
          >
            <Container>
              <UserContext.Consumer>
                {({user}) => {
                  return(
                    <div className={css({padding: 20, background: 'aliceblue', display: 'flex'})}>
                      {packages.map((edge, index) => {
                        const pkg = edge.node

                        return (
                          <div className={css({padding: 10})} key={`package-${index}`}>
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
                  )
                }}
              </UserContext.Consumer>
            </Container>
          </main>
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
          title,
          description,
          courses {
            title,
          }
          sellableType,
          sellableID,
          purchaseURL
        }
      }
    }
  }
`
export default IndexPage
