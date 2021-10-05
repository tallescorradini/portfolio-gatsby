import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import { Trans } from 'gatsby-plugin-react-i18next'

import * as styles from './NavigationBar.module.css'

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuButtonClicked = () => {
    setMenuOpen(prev => !prev)
  }

  const handleLinkClicked = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.navBar}${menuOpen ? ` ${styles.open}` : ''}`}>
      <Scrollspy
        items={['home', 'projects', 'contact']}
        currentClassName={styles.activeLink}
        offset={-300}
        onUpdate={event => {
          // condition added to prevent testing errors when event is undefined
          if (!event) return
          const hash = event.getAttribute('id')
          if (!hash) return
          history.replaceState(undefined, undefined, `#${hash}`)
        }}
      >
        <li>
          <a href="#home" data-content="home" onClick={handleLinkClicked}>
            <Trans>home</Trans>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            data-content="projects"
            onClick={handleLinkClicked}
          >
            <Trans>projects</Trans>
          </a>
        </li>
        <li>
          <a href="#contact" data-content="contact" onClick={handleLinkClicked}>
            <Trans>contact</Trans>
          </a>
        </li>
      </Scrollspy>
      <button
        className={`${styles.menuButton}${menuOpen ? ` ${styles.open}` : ''}`}
        onClick={handleMenuButtonClicked}
      >
        <span className={`${styles.menuButtonBurger}`}></span>
      </button>
    </nav>
  )
}

export default NavigationBar
