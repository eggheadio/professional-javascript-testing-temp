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
            padding: 40px;
            height: 104px;
          `}
        >
          <img
            className={css`
              height: 64px;
              width: 64px;
            `}
            src={node.image_64_url}
            alt="a logo for this lesson"
          />{' '}
          <div
            className={css`
              padding-left: 15px;
            `}
          >
            {node.title} by {node.instructor.full_name}
          </div>
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
