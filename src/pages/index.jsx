import React from 'react'

import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import * as styles from './index.module.css'

// [x] TODO feat: add project and download CV buttons
// [x] TODO feat: serve pdf when clicking on download CV button
// [x] TODO refactor: create HomeSection component
// [x] TODO refactor: create NavigtationBar component folder
// [x] TODO feat (NavigationBar): add navigation for smaller devices
// [x] TODO fix: home section buttons are not working
// [x] TODO refactor (NavigationBar): cleanup code
// [x] TODO fix: show navBar on large devices even when menuButton is open
// [ ] TODO feat: add clickable arrow to home page

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

        <section id="projects" data-testid="projects">
          Projects
        </section>

        <section id="contact" data-testid="contact">
          Contact
        </section>
      </main>
    </div>
  )
}

export default IndexPage
