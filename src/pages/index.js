import React from "react"
import Layout from "./../Components/Layout"
import styles from "../styles/Home.module.css"
import { graphql, useStaticQuery } from "gatsby"
import ProjectList from "./../Components/ProjectList"

const Home = () => {
  const { projects } = useStaticQuery(
    graphql`
      {
        projects: allGithubProfileJson {
          edges {
            node {
              link
              programming_language
              stars
              title
              topics
              desc
              id
              forks
              last_updated
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <div className={styles.banner}>
        <h1 className={styles.bannerHead}>Praveen Chaudhary</h1>
      </div>
      <ProjectList projects={projects.edges} />
    </Layout>
  )
}

export default Home
