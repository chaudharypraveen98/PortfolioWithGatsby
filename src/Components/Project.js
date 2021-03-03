import React from "react"
import styles from "../styles/Project.module.css"

const Project = ({project}) => (
    <div className={styles.singleProject}>
        <h1 className={styles.singleProjectTitle}>{project.node.title.split(/(?=[A-Z])/)}</h1>
        <p>{project.node.desc}</p>
        <p className={styles.projectNumber}>{project.node.id}</p>
        <h4 className={styles.projectDesc}>{project.node.programming_language}</h4>
    </div>
)

export default Project