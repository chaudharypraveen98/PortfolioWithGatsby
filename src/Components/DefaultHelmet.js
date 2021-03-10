import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// first test graphql queries in playground at https://127.0.0.1:8000/___graphql
const DefaultHelmet = ({ title, description, author }) => {
  // staticQuery is now depreciated
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  
  return (
    <Helmet>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
    </Helmet>
  )
}

DefaultHelmet.defaultProps = {
  title: "Praveen Chaudhary",
  keywords: "Praveen Chaudhary, chaudharypraveen98",
  description: "Portfolio. Contains all projects of Praveen Chaudhary",
}

export default DefaultHelmet
