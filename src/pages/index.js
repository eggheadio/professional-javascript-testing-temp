import React from 'react'
import { injectGlobal } from 'emotion'

import Layout from '../components/Layout'

import Hero from '../components/Hero'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

injectGlobal`
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

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default IndexPage
