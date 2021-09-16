import React from 'react'
import Scrollspy from 'react-scrollspy'

import * as styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <Scrollspy
        items={['home', 'projects', 'contact']}
        currentClassName={styles.activeLink}
        offset={-300}
        onUpdate={event => {
          const hash = event.getAttribute('id')
          if (!hash) return
          history.replaceState(undefined, undefined, `#${hash}`)
        }}
      >
        <li>
          <a href="#home" data-content="home">
            home
          </a>
        </li>
        <li>
          <a href="#projects" data-content="projects">
            projects
          </a>
        </li>
        <li>
          <a href="#contact" data-content="contact">
            contact
          </a>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default NavigationBar
