import React from "react"
import styles from "../styles/Project.module.css"

const Project = ({project}) => (
    <div className={styles.singleProject}>
        <h1>{project.node.title.split(/(?=[A-Z])/)}</h1>
        <h2>{project.node.stars}</h2>
        <h3>{project.node.desc}</h3>
        <h4>{project.node.programming_language}</h4>
    </div>
)

export default Project