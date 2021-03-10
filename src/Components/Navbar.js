import { Link } from "gatsby"
import styles from "../styles/Navbar.module.css"
import React from "react"

// gatsby uses the link to instead of link href
const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navUl}>
        <li className={styles.navBrand}>
          <Link to="/">Praveen Chaudhary</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
