import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

const Layout = ({ children, darkHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
          <script type="text/javascript" src="//fast.fonts.net/jsapi/bf9975aa-1bcc-4052-8d47-2bc727a70fea.js"></script>
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          darkHeader={darkHeader}
        />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
