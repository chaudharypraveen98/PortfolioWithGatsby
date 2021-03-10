import React, { useEffect, useState } from "react"
import Project from "./Project"
import styles from "../styles/Project.module.css"
// use this to control the number of projects to be displayed
const postsPerPage = 6

// never use export default with arrow function in gatsby directly
const ProjectList = ({ projects }) => {

  // using react hook to manage the state
  const [postsToShow, setPostsToShow] = useState([])
  const [next, setNext] = useState(3)
  const posts = projects

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end)
    setPostsToShow([...slicedPosts])
  }

  useEffect(() => {
    loopWithSlice(0, postsPerPage)
  }, [])

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage)
    setNext(next + postsPerPage)
  }
  return (
    <div className={styles.projectSection}>
      <div className={styles.ProjectContainer}>
        {postsToShow.map(project => {
          // always add key else it will raise error
          return <Project project={project} key={project.node.id} />
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleShowMorePosts} className={styles.loadMoreButton}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default ProjectList
