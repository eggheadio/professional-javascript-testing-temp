import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'

const LessonsPage = ({ data }) => (
  <Layout>
    {data.allLesson.edges.map(({ node }) => {
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
          `}
        >
          <img src={node.image_64_url} alt="a logo for this lesson" />{' '}
          {node.title} by {node.instructor.full_name}
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  query LessonsPageQuery {
    allLesson {
      edges {
        node {
          image_64_url
          title
          id
          instructor {
            full_name
          }
        }
      }
    }
  }
`

export default LessonsPage
