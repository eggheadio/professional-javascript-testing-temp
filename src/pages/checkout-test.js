import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Package from '../components/Package'

const features = [
  {title: "Cool point!", available: true},
  {title: "Cool point!", available: true},
  {title: "Cool point!", available: true},
  {title: "Cool point!", available: false},
  {title: "Cool point!", available: false},
  {title: "Cool point!", available: false},
]

export default function CheckoutTest({ data: { site } }) {
  return (
    <Layout site={site}>
      <Package
        name="gold"
        amount={9900}
        description="a bundle of good things for you to learn"
        features={features}
        email={"raquel@egghead.io"}
       />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
