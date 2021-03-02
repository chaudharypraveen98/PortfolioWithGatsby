import React, { useEffect, useState } from "react"
import Project from "./Project"
import styles from "../styles/Project.module.css"
const postsPerPage = 6

const ProjectList = ({ projects }) => {
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
    <div className={styles.ProjectContainer}>
      {postsToShow.map(project => {
        return <Project project={project} key={project.node.id} />
      })}
      <div>
        <button onClick={handleShowMorePosts} className="load-btn">
          Load more
        </button>
      </div>
    </div>
  )
}

export default ProjectList
