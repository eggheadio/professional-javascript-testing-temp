import React from 'react'
import { css, injectGlobal } from 'emotion'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import {Formik, Field, Form} from 'formik'
import * as yup from 'yup'

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
const announcementSchema = yup.object().shape({
  email: yup.string().email()
})

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
    // const packages = this.props.data.allBundle.edges

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
                {({ user }) => {
                  return (
                    <div
                      className={css({
                        padding: 20,
                        background: 'aliceblue',
                        display: 'flex'
                      })}
                    >
                      {/* {packages.map((edge, index) => {
                        const pkg = edge.node

                        return (
                          <div
                            className={css({ padding: 10 })}
                            key={`package-${index}`}
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
                      })} */}
                    </div>
                  )
                }}
              </UserContext.Consumer>
            </Container>
          </main>
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
                              span: {
                                verticalAlign: 'middle'
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
                          <div
                            className={css({
                              fontSize: '16px',
                              color: 'rgba(0, 0, 0, 0.6)',
                              marginTop: '16px'
                            })}
                          >
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
                          <ul
                            className={css({
                              listStyle: 'none'
                            })}
                          >
                            <li
                              className={css({
                                ':before': {
                                  content: '"\\2714"'
                                }
                              })}
                            />
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
            <Container maxWidth={768}>
              <Formik
                initialValues={{email: ''}}
                validationSchema={announcementSchema}
                onSubmit={(props) => {
                  console.log(props)
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   actions.setSubmitting(false);
                  // }, 1000);
                }}
                render={({handleSubmit, handleChange, handleBlur, values, errors}) => {
                  return(
                    <Form className={css`
                      margin-top: 2rem;
                      display: flex;
                      flex-direction: column;
                    `}>
                      <h3 className={css`
                        height: 30px;
                        width: 690px;
                        opacity: 0.9;
                        color: #2E2E36;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 30px;
                      `}>
                        Get notified with the latest updates
                      </h3>
                      <div className={css`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                      `}>
                        <Field type="email" name="email" placeholder="enter e-mail"
                          className={css`
                          border: 0;
                          background: #F4F6F8;
                          width: 300px;
                          height: 60px;
                          display: flex;
                          flex-direction: column;
                          justify-content: center;
                          align-items: left;
                          padding: 0 16px;
                          font-size: 1rem;
                          border-radius: 5px 0 0 5px;
                          transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
                          &:focus {
                            outline: transparent;
                            filter: contrast(0.95);
                            color: black;
                            transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
                          }
                          &::placeholder {
                            font-size: 1rem;
                            font-weight: 300;
                            opacity: 0.7;
                          }
                        `}
                        />
                        <button type="submit" className={css`
                          height: 60px;
                          display: inline-flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: center;
                          font-size: 1rem;
                          cursor: pointer;
                          border: none;
                          border-radius: 0 5px 5px 0;
                          padding: 1rem 1rem;
                          width: 130px;
                          margin: 0;
                          text-decoration: none;
                          background: black;
                          color: white;
                          span {
                            transition: all 250ms ease;
                          }
                          &:hover, &:focus {
                            outline: transparent;
                            filter: contrast(1.2);
                            span {
                              transition: all 250ms ease;
                              transform: scale(1.08);
                            }
                          }`}>
                          Get Notified
                        </button>
                      </div>
                      <p>No spam. lorem ipsum dolor sit amet.</p>
                    </Form>
                  )
                }}
              />
            </Container>
          </section>
        </Layout>
      </UserContext.Provider>
    )
  }
}

// export const query = graphql`
//   query IndexPageQuery {
//     allBundle {
//       edges {
//         node {
//           title,
//           description,
//           courses {
//             title,
//           }
//           sellableType,
//           sellableID,
//           purchaseURL
//         }
//       }
//     }
//   }
// `
export default IndexPage
