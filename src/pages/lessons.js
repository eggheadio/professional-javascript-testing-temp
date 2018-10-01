import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'

class LessonsPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        {/* {data.allBundle.edges.map(({ node }) => {
          return (
            <div key={node.title}>
              <h1>{node.title}</h1>
              <ul>
                {node.courses.map(course => {
                  return (
                    <div
                      className={css`
                        display: flex;
                        align-items: center;
                        padding: 40px;
                        height: 104px;
                      `}
                    >
                      <img
                        className={css`
                          height: 64px;
                          width: 64px;
                        `}
                        src={course.square_cover_64_url}
                        alt="a logo for this lesson"
                      />{' '}
                      <div
                        className={css`
                          padding-left: 15px;
                        `}
                      >
                        {course.title}
                      </div>
                    </div>
                  )
                })}
              </ul>
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

/* export const query = graphql`
  query LessonsPageQuery {
    allBundle {
      edges {
        node {
          title
          courses {
            title
            description
            square_cover_64_url
          }
        }
      }
    }
  }
` */

export default LessonsPage
