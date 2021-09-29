import React from 'react'

import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import * as styles from './index.module.css'
import ContactSection from './components/ContactSection/ContactSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

// [x] TODO feat: add clickable arrow to home page
// [x] TODO feat: add form to reach out
// [x] TODO refactor (ContactSection): clean up css
// [x] TODO feat: show submission message without leaving the page
// [x] TODO feat: link to social media
// [x] TODO fix: align contact section on large screens
// [x] TODO feat: add projects section (3/3)
// [ ] TODO fix: header should not overlap section titles
// [ ] TODO fix (HomeSection): center arrowIcon inside button
// [ ] TODO fix (NavigationBar): make navigation link unclickable when menu is inactive

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
