import React from 'react'

import * as styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
