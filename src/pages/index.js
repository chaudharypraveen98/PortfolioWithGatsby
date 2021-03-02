import React from "react"
import Layout from "./../Components/Layout"
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <div className={styles.banner}>
        <h1 className={styles.bannerHead}>Praveen Chaudhary</h1>
      </div>
    </Layout>
  )
}

export default Home
