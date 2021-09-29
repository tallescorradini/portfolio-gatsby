import React from 'react'

import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import * as styles from './index.module.css'
import ContactSection from './components/ContactSection/ContactSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

// [x] TODO fix: header should not overlap section titles
// [ ] TODO fix (HomeSection): center arrowIcon inside button
// [ ] TODO fix (NavigationBar): make navigation link unclickable when menu is inactive
// [ ] TODO fix: (HomeSection): set smaller font-size for small screens

// [ ] TODO feat: add form validation
// [ ] TODO feat: animate form submission message (using CSSTransition)

const IndexPage = () => {
  return (
    <div>
      <header>
        <div className={styles.headerWrapper}>
          <a className={styles.logo} href="#home">
            talles corradini
          </a>

          <NavigationBar />
        </div>
      </header>
      <main>
        <HomeSection />

        <ProjectsSection />

        <ContactSection />
      </main>
    </div>
  )
}

export default IndexPage
