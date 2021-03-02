import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const DefaultHelmet = ({ title, description, author }) => {
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
