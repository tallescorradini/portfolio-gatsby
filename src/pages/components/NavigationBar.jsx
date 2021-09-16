import React from 'react'
import Scrollspy from 'react-scrollspy'

import * as styles from './NavigationBar.module.css'

// TODO: [x] feat: update active link with page scroll
// TODO: [x] feat: add animation to link activation
// TODO: [x] fix: update url hash with page scroll
// TODO: [ ] feat: add smooth scroll to section
// TODO: [ ] refactor: anchor tags into reusable component

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
