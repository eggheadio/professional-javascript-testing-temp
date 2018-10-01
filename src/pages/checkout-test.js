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
        url={"http://egghead.af:5000/"}
        sellableType={"Course"}
        sellableID={"1"}
        onSuccess={() => (window.location = "http://localhost:8000")}
        onError={() => alert('something bad happened')}
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
