import React from 'react'

import * as styles from './index.module.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import ContactSection from './components/ContactSection/ContactSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

import resumeFile from './downloads/Talles_Corradini_Resume.pdf'

// [x] TODO feat: add a footer
// [ ] TODO feat: populate projects from markdown files
// [ ] TODO feat: add project description for github

// [ ] TODO feat: add form validation
// [ ] TODO feat: animate form submission message (using CSSTransition)
// [ ] TODO feat: add dark mode

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

      <footer>
        <div className={styles.footerWrapper}>
          <a href={resumeFile} target="_blank" download>
            Download my CV
          </a>
          <p>Designing and developing this website was fun!</p>

          <span>Talles Corradini</span>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage
