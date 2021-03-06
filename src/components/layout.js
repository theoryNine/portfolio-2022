/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import Header from "./Header";
//import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`
        }}
      >
        <Header />
        <main style={{width:`100%`}}>{children}</main>
      </div>
    </>
  )
}

export default Layout;
